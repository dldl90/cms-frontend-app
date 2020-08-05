import * as ACTION from '../actions/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION.SET_DEBUG: {
      return action.payload;
    }
    default:
      return state;
  }
};
