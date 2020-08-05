import * as ACTION from '../actions/actionTypes';

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION.SET_PREVIEW_MODE: {
      return action.payload;
    }
    default:
      return state;
  }
};
