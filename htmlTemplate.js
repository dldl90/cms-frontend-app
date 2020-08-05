import React, { Fragment } from 'react';
import { renderToString } from 'react-dom/server';

import { Styles, Header, Footer, Copyright } from '@noths/global-components';
import { PRODUCTION, ROOT_DOMAIN, SENTRY_DSN, ENV_TYPE } from './src/utils/constants';
import manifest from './dist/manifest.json';
import { dependencies } from './package.json';

const header = renderToString(
  <Fragment>
    <Styles />
    <Header />
  </Fragment>
);

const footer = renderToString(
  <Fragment>
    <Footer />
    <Copyright />
  </Fragment>
);

const gtmScripts = trackedPageData => `
  <script>
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(${trackedPageData});
  </script>
  <script>
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PG465H');
  </script>
`;

const gtmNoScript = () => `
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PG465H"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
`;

const getPkgVersion = dependency => dependencies[dependency].replace('^', '').replace('~', '');
const staticAssetsPublicUrl = `//static-files.${ROOT_DOMAIN}/cms-frontend`;

const productionScripts = {
  js: `
    <script type="text/javascript" src="https://unpkg.com/react@${getPkgVersion(
      'react'
    )}/umd/react.production.min.js"></script>
    <script type="text/javascript" src="https://unpkg.com/react-dom@${getPkgVersion(
      'react-dom'
    )}/umd/react-dom.production.min.js"></script>
    <script type="text/javascript" src="https://unpkg.com/contentstack@${getPkgVersion(
      'contentstack'
    )}/dist/web/contentstack.js"></script>
    <script type="text/javascript" src="https://unpkg.com/styled-components@${getPkgVersion(
      'styled-components'
    )}/dist/styled-components.js"></script>
    <script type="text/javascript" src="${staticAssetsPublicUrl}${manifest['main.js']}"></script>
    <script type="text/javascript" src="${staticAssetsPublicUrl}${manifest['vendors.js']}"></script>
    <script type="text/javascript" src="${staticAssetsPublicUrl}/js/ads.js?v4"></script>
    `,
  css: `${staticAssetsPublicUrl}${manifest['main.css']}`,
};

const devScripts = {
  js: `
    <script type="text/javascript" src="/js/main.js"></script>
    <script type="text/javascript" src="/js/ads.js"></script>
  `,
  css: '/css/main.css',
};

const includeSentry = () => {
  if (process.env.NODE_ENV === PRODUCTION) {
    return `
      <script src="https://browser.sentry-cdn.com/5.3.0/bundle.min.js" crossorigin="anonymous"></script>
      <script>
        Sentry.init({
          dsn: 'https://${SENTRY_DSN}',
          debug: false,
          environment: '${ENV_TYPE}',
          attachStacktrace: true,
        });
      </script>`;
  }
  return '';
};

const disableOldHeaderNav = `
  <style>
    [global-component].gc-header .gc-header-menu {
      display: none !important;
      width: 0px !important;
      height: 0px !important;
      overflow: hidden !important;
    }
  </style>
`;

const renderHtml = (
  rootApp,
  environment,
  preloadedCmsData,
  preloadedStyles,
  helmet,
  trackedPageData,
  preloadedGlobalData
) => {
  const cssStylePath = environment === PRODUCTION ? productionScripts.css : devScripts.css;
  const jsScripts = environment === PRODUCTION ? productionScripts.js : devScripts.js;

  const globalData = JSON.stringify(preloadedGlobalData).replace(/</g, '\\u003c');
  const cmsData = JSON.stringify(preloadedCmsData).replace(/</g, '\\u003c');

  return `<!DOCTYPE html>
    <html lang='en'>
      <head>
        ${helmet.title.toString()}
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
        ${helmet.meta.toString()}
        <link rel="shortcut icon" href="//cdn.notonthehighstreet.com/favicon.ico">
        ${helmet.link.toString()}
        ${gtmScripts(trackedPageData)}
        ${preloadedStyles}
        <link rel='stylesheet' href="${cssStylePath}" />
        ${
          /* TURNING OFF OLD GLOBAL NAV TO BE REPLACED BY NEW CONTENTSTACK GLOBAL NAV */
          disableOldHeaderNav
        }
        ${includeSentry()}
      </head>
      <body style="padding:0;margin:0;">
        ${gtmNoScript()}
        ${header}
        <div id="root">${rootApp}</div>
        ${footer}
        <div style="padding:0; margin:0;" class="BlockerEnabled"></div>
        <script type="text/javascript">window.GLOBAL_DATA = ${globalData}</script>
        <script type="text/javascript">window.CMS_DATA = ${cmsData}</script>
        ${jsScripts}
      </body>
    </html>
  `;
};

export default renderHtml;
