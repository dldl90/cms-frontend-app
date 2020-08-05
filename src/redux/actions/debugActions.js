import * as ACTION from './actionTypes';

export const setDebug = (hostname, xForwardedHostHeader, trustProxy) => ({
  type: ACTION.SET_DEBUG,
  payload: { hostname, xForwardedHostHeader, trustProxy },
});
