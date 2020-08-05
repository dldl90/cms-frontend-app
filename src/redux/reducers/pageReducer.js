import * as ACTION from '../actions/actionTypes';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION.FETCH_PAGE: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTION.FETCH_PAGE_REJECTED: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    case ACTION.FETCH_PAGE_FULFILLED: {
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null,
      };
    }
    default:
      return state;
  }
};
