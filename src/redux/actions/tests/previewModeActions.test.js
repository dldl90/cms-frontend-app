/* eslint-env jest */
import { setPreviewMode } from '../previewModeActions';

describe('setPreviewMode(), When setting the preview mode', () => {
  it('should dispatch the SET_PREVIEW_MODE action when the hostname starts with cms-preview', () => {
    const req = { hostname: 'cms-preview.noths.com' };
    const dispatch = jest.fn();
    const store = { dispatch };

    setPreviewMode(req, store);

    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('should not dispatch any action when the hostname does not start with cms-preview', () => {
    const req = { hostname: 'www.noths.com' };
    const dispatch = jest.fn();
    const store = { dispatch };

    setPreviewMode(req, store);

    expect(dispatch).toHaveBeenCalledTimes(0);
  });
});
