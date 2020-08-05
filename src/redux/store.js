import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as runtimeProcess from 'process';

import reducers from './reducers';
import { NODE_ENV, DEVELOPMENT, QA } from '../utils/constants';

const configureStore = preloadedState => {
  let store;
  if (NODE_ENV === DEVELOPMENT || runtimeProcess.env.ENV_TYPE === QA) {
    store = composeWithDevTools(applyMiddleware(thunkMiddleWare))(createStore)(
      reducers,
      preloadedState
    );
  } else {
    store = applyMiddleware(thunkMiddleWare)(createStore)(reducers, preloadedState);
  }
  return store;
};

export default configureStore;
