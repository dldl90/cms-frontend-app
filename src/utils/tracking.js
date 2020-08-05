import { ENV_TYPE, PRODUCTION, QA } from './constants';

class GTM {
  static pushToDataLayer(event) {
    if (global.window && global.window.dataLayer) {
      window.dataLayer.push(event);
    }
  }

  static getTrackedPageData(category = '') {
    return {
      page: {
        category: `${category}`,
        react: 'true',
        environment: `${ENV_TYPE === PRODUCTION ? PRODUCTION : QA}`,
      },
    };
  }
}

export default GTM;
