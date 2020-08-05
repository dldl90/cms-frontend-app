/* eslint-env jest */
import * as ACTION from '../../actions/actionTypes';
import configureStore from '../../store';

describe('When post previewMode reducer', () => {
  const store = configureStore();

  const action = {
    type: ACTION.SET_PREVIEW_MODE,
  };

  it('should have an initial state of previewMode set to false', () => {
    expect(store.getState().previewMode).toBe(false);
  });

  it('should handle dispatcher action SET_PREVIEW_MODE and set previewMode to true', () => {
    store.dispatch({ ...action, payload: true });
    expect(store.getState().previewMode).toBe(true);
  });

  it('should handle dispatcher action SET_PREVIEW_MODE and set previewMode to false', () => {
    store.dispatch({ ...action, payload: false });
    expect(store.getState().previewMode).toBe(false);
  });
});
