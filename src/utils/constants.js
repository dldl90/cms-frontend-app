// Webpack replaces process.env with an empty object
// to circumvent the webpack logic we need to import env variables from process
import * as runtimeProcess from 'process';

export const { ENV_TYPE, ROOT_DOMAIN } = runtimeProcess.env;
export const { NODE_ENV } = process.env;
export const PRODUCTION = 'production';
export const QA = 'qa';
export const DEVELOPMENT = 'development';
export const localStorageKey = 'recentlyViewedProducts';
export const SENTRY_DSN = 'e5258189d218491d894799fa15c19bed@sentry.io/1341122';
