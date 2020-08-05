import { combineReducers } from 'redux';

import page from './pageReducer';
import previewMode from './previewModeReducer';
import debug from './debugReducer';

export default combineReducers({
  page,
  previewMode,
  debug,
});
