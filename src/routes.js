/* eslint-disable import/no-named-as-default */
import GiftCards from './templates/GiftCards/GiftCards';
import HomePage from './templates/Homepage/Homepage';
import Announcement from './templates/Announcement/Announcement';
import DailyDeals from './templates/DailyDeals/DailyDeals';
import NotFound from './templates/NotFound/NotFound';

import TermsConditions from './containers/Campaigns/TermsConditions/TermsConditions';
import FlexibleCampaign from './containers/Campaigns/FlexibleCampaign/FlexibleCampaign';
import BrandMessage from './containers/Campaigns/BrandMessage/BrandMessage';
import About from './containers/CorePages/About/About';
import FlexibleEmail from './containers/CorePages/FlexibleEmail/FlexibleEmail';

export default [
  {
    ...HomePage,
    path: '/',
    exact: true,
    category: 'Home',
  },
  {
    ...GiftCards,
    path: '/gift-cards',
    exact: true,
    category: 'Gift Cards',
  },
  {
    ...DailyDeals,
    path: '/campaign/daily-wonders',
    exact: true,
    category: 'Campaign',
    contentType: 'daily_deals',
  },
  {
    ...BrandMessage,
    path: '/campaign/international-womens-day',
    exact: true,
    category: 'Campaign',
    contentType: 'brand_message',
  },
  {
    ...TermsConditions,
    path: '/campaign/terms-and-conditions/:id',
    exact: true,
    category: 'Customer service',
    contentType: 'terms_and_conditions',
  },
  {
    ...FlexibleCampaign,
    path: '/campaign/:id',
    exact: true,
    category: 'Campaign',
    contentType: 'flexible_campaign_template',
  },
  {
    ...About,
    path: '/about/:id',
    exact: true,
    category: 'Customer service',
    contentType: 'about',
  },
  {
    ...About,
    path: '/join/:id',
    exact: true,
    category: 'Customer service',
    contentType: 'join',
  },
  {
    ...Announcement,
    path: '/email/unsubscribe-success',
    exact: true,
    category: 'Customer service',
  },
  {
    ...FlexibleEmail,
    path: '/emails/:id',
    exact: true,
    category: 'Customer service',
    contentType: 'flexible_email',
  },
  {
    component: NotFound,
    path: '*',
  },
];
