import GTM from '../../../utils/tracking';

export const trackCampaignClick = ({ eventLabel, destinationUrl, eventCategory }) => {
  GTM.pushToDataLayer({
    event: 'campaign_clicks',
    eventCategory: `${eventCategory} LP`,
    eventLabel,
    destinationUrl,
    eventAction: 'Click',
  });
};
