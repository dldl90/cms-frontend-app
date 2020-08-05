import * as ACTION from './actionTypes';

import { getStack, getStackEnv, getSingleContent } from '../../utils/contentstack';
import { campaignStack, corePagesStack } from '../../utils/contentstackAuth';

import homepageData from '../../utils/transformers/homepageData';
import giftCardsData from '../../utils/transformers/giftCardsData';
import announcementData from '../../utils/transformers/announcementData';
import dailyDealsData from '../../utils/transformers/dailyDealData';

const pageLoading = () => ({
  type: ACTION.FETCH_PAGE,
  payload: { loading: true },
});

const pageLoadFulfilled = data => ({
  type: ACTION.FETCH_PAGE_FULFILLED,
  payload: { data, error: null },
});

const pageLoadRejected = error => ({
  type: ACTION.FETCH_PAGE_REJECTED,
  payload: { data: null, error },
});

export const fetchPage = (stackEnvKeys, contentType, path, mapData = null) => (
  dispatch,
  getState
) => {
  const isPreview = getState().previewMode;
  const stackEnv = getStackEnv(stackEnvKeys, isPreview);
  const stack = getStack(stackEnv);

  dispatch(pageLoading());

  // NOTE: when no entry is returned getSingleContent returns: [[]]
  return getSingleContent(stack, contentType, path)
    .then(data => {
      // NOTE: result is array where -
      // NOTE: result[0] =&gt; entry objects
      const entry = data[0][0];

      if (entry) {
        try {
          const pageData = mapData(entry);
          dispatch(pageLoadFulfilled(pageData));
        } catch (err) {
          console.error(err); //eslint-disable-line
        }
      } else {
        dispatch(pageLoadRejected({ message: 'Error, no content found for entry', status: 404 }));
      }
    })
    .catch(err => {
      dispatch(pageLoadRejected({ message: err, status: null }));
    });
};

export const fetchHomepage = path => {
  return fetchPage(campaignStack, 'homepage', path, homepageData);
};

export const fetchDailyDealsData = (path, contentType) => {
  return fetchPage(campaignStack, contentType, path, dailyDealsData);
};

export const fetchGiftCards = path => fetchPage(corePagesStack, 'gift_card', path, giftCardsData);

export const fetchAnnouncementData = path => {
  return fetchPage(corePagesStack, 'email', path, announcementData);
};
