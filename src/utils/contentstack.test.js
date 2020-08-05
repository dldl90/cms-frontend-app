/* eslint-env jest */

import * as runtimeProcess from 'process';
import { getStackEnv } from './contentstack';
import * as constants from './constants';

describe('When returning the contentstack enviroment value', () => {
  const stackKeys = {
    prod: {
      api_key: 'apiProd',
      access_token: 'acProd',
      environment: 'live',
    },
    preview: {
      api_key: 'apiPreview',
      access_token: 'acPreview',
      environment: 'preview',
    },
    qa: {
      api_key: 'apiQa',
      access_token: 'acQa',
      environment: 'qa',
    },
  };

  it('should return Production Key by default', () => {
    const isPreview = false;
    expect(getStackEnv(stackKeys, isPreview)).toBe(stackKeys.prod);
  });

  it('should return preview when isPreview is true and environment is qa', () => {
    runtimeProcess.env.ENV_TYPE = constants.QA;
    const isPreview = true;
    expect(getStackEnv(stackKeys, isPreview)).toBe(stackKeys.preview);
  });

  it('should return preview when isPreview is true and environment is production', () => {
    runtimeProcess.env.ENV_TYPE = constants.PRODUCTION;
    const isPreview = true;
    expect(getStackEnv(stackKeys, isPreview)).toBe(stackKeys.preview);
  });

  it('should return QA when isPreview is false and environment is qa', () => {
    runtimeProcess.env.ENV_TYPE = constants.QA;
    const isPreview = false;
    expect(getStackEnv(stackKeys, isPreview)).toBe(stackKeys.qa);
  });
});
