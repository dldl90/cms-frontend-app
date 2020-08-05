import * as ACTION from './actionTypes';

export const previewMode = () => ({
  type: ACTION.SET_PREVIEW_MODE,
  payload: true,
});

export const setPreviewMode = (req, store) => {
  const isPreviewMode = req.hostname.includes('cms-preview');
  if (isPreviewMode) store.dispatch(previewMode());
};
