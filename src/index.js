import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GlobalDataContext } from '@noths/global-components-v2';

import configureStore from './redux/store';

import App from './App';
import { ErrorBoundary } from './components';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.CMS_DATA;
const preloadedGlobalState = window.GLOBAL_DATA;

// Allow the passed state to be garbage-collected
delete window.CMS_DATA;
delete window.GLOBAL_DATA;

const store = configureStore(preloadedState);

hydrate(
  <GlobalDataContext.Provider value={{ navData: preloadedGlobalState }}>
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  </GlobalDataContext.Provider>,
  document.getElementById('root')
);
