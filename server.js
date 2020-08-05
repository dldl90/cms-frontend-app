import './config/dd-config';

import express from 'express';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import { navigationFetcher, GlobalDataContext } from '@noths/global-components-v2';

import webpack from 'webpack';
import webpackDev from 'webpack-dev-middleware';
import webpackHot from 'webpack-hot-middleware';
import register from 'ignore-styles';

import App from './src/App';
import renderHtml from './htmlTemplate';

import webpackDevConfig from './config/webpack.dev.config';
import routes from './src/routes';
import configureStore from './src/redux/store';

import { setPreviewMode } from './src/redux/actions/previewModeActions';
import { setDebug } from './src/redux/actions/debugActions';

import GTM from './src/utils/tracking';
import { PRODUCTION, QA, DEVELOPMENT, ENV_TYPE } from './src/utils/constants';

import { getAssetUrl } from './src/utils/contentstack';
import { assetListUrl } from './src/utils/assetListUrl';

const ddOptions = {
  response_code: true,
  tags: ['app:cms-frontend'],
};

const connectDatadog = require('connect-datadog')(ddOptions);

register(['.sass', '.scss']);
const server = express();

// compression & security
server.disable('x-powered-by');
server.enable('trust proxy'); // signals to express that nginx will be populating the X-Forwarded-Host header.

server.use(connectDatadog);

// DEV Mode webpack with hot reloader
if (process.env.NODE_ENV !== PRODUCTION) {
  const webpackDevCompiler = webpack(webpackDevConfig);
  server.use(
    webpackDev(webpackDevCompiler, {
      publicPath: webpackDevConfig.output.publicPath,
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false,
      },
    })
  );
  server.use(webpackHot(webpackDevCompiler));
}

server.get('/health', (req, res) => res.status(200).send('OK'));
server.use('/', express.static(path.join('.', '/dist')));

const renderApp = async (req, res) => {
  const context = {};
  const { store } = req;
  const sheet = new ServerStyleSheet();

  setPreviewMode(req, store);

  let pageCategory;

  const dataRequirements = matchRoutes(routes, req.path).map(({ route }) => {
    pageCategory = route.category || '';
    return route.loadData ? store.dispatch(route.loadData(req.path, route.contentType)) : null;
  });

  const isQa = ENV_TYPE === QA || process.env.NODE_ENV === DEVELOPMENT;
  const isPreview = store.getState().previewMode;
  const navData = await navigationFetcher(isQa, isPreview);

  Promise.all(dataRequirements).then(() => {
    const rootApp = renderToString(
      <GlobalDataContext.Provider value={{ navData }}>
        <Provider store={store}>
          <StyleSheetManager sheet={sheet.instance}>
            <StaticRouter location={req.url} context={context}>
              <App />
            </StaticRouter>
          </StyleSheetManager>
        </Provider>
      </GlobalDataContext.Provider>
    );

    if (context.status === 404) {
      res.status(404);
    }

    const environment = process.env.NODE_ENV;
    const helmet = Helmet.renderStatic();
    const state = store.getState();
    const styleTags = sheet.getStyleTags();
    const trackedPageData = JSON.stringify(GTM.getTrackedPageData(pageCategory));

    res.send(renderHtml(rootApp, environment, state, styleTags, helmet, trackedPageData, navData));
  });
};

const renderAssetsPaths = list => {
  Object.values(list).forEach(asset => {
    server.get(asset.path, (req, res) => {
      getAssetUrl(asset, res);
    });
  });
};

renderAssetsPaths(assetListUrl);

server.use((req, res, next) => {
  const { hostname } = req;
  const xForwardedHostHeader = req.get('X-Forwarded-Host');
  const trustProxy = server.get('trust proxy');

  req.store = configureStore();
  req.store.dispatch(setDebug(hostname, xForwardedHostHeader, trustProxy));

  next();
});


server.use(renderApp);

const port = process.env.NODE_ENV !== PRODUCTION ? 3000 : 8080;
server.listen(port, err => {
  if (err) {
    console.error(err); //eslint-disable-line
  } else {
    console.log(''); //eslint-disable-line
    console.log(`Server listening on port ${port}`); //eslint-disable-line
    console.log(''); //eslint-disable-line
  }
});
