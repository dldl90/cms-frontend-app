import GTM from '../../utils/tracking';
import { getLastString } from '../../utils/helpers/stringHelpers';

const trackHomepageClick = (eventLabel, link) => {
  GTM.pushToDataLayer({
    event: 'homepage_clicks',
    eventCategory: 'Homepage',
    eventAction: 'Click',
    eventLabel,
    destinationUrl: link,
  });
};

const trackHomepageEcommerce = (eventLabel, link, click) => {
  GTM.pushToDataLayer({
    event: 'homepage_product_clicks',
    eventCategory: 'Homepage',
    eventAction: 'Product Click',
    eventLabel,
    destinationUrl: link,
    ecommerce: {
      click: {
        list_id: 'n/a',
        ...click,
      },
    },
  });
};

const trackHomepageImpressions = impressions => {
  GTM.pushToDataLayer({
    event: 'homepage_impressions',
    eventCategory: 'Homepage',
    eventAction: 'Product Impressions',
    eventLabel: undefined,
    ecommerce: {
      impressions,
    },
  });
};

const gtmEventLabel = eventLabelProps => {
  return eventLabelProps ? Object.values(eventLabelProps).join(' | ') : undefined;
};

// Banner section tracking
export const trackBannerClick = ({ sectionId, ctaText, link }) => {
  const eventLabel = gtmEventLabel({ sectionPosition: sectionId, text: ctaText });

  trackHomepageClick(eventLabel, link);
};

// Hero blocks section tracking
export const trackHeroBlockClick = ({ sectionId, ctaText, link, blockIndex }) => {
  const eventLabel = gtmEventLabel({
    sectionPosition: sectionId,
    sectionTitle: 'HIGHLIGHTS',
    positionInSection: blockIndex + 1,
    ctaText: ctaText.toLowerCase(),
  });

  trackHomepageClick(eventLabel, link);
};

// Product carousel section tracking
export const trackCarouselProductClick = ({
  sectionId,
  slideIndex,
  ctaText,
  link,
  sectionTitle,
}) => {
  const eventLabel = gtmEventLabel({
    sectionPosition: sectionId,
    sectionTitle: sectionTitle.toUpperCase(),
    positionInSection: slideIndex + 1,
    ctaText: ctaText.toLowerCase(),
  });

  trackHomepageClick(eventLabel, link);
};

// Partner section tracking
const partnerPositionInTile = 1;

export const trackPartnerClick = (sectionId, heading, partner, partnerIndex) => {
  const eventLabel = gtmEventLabel({
    sectionPosition: sectionId,
    sectionTitle: heading.toUpperCase(),
    positionInSection: partnerIndex + 1,
    partnerName: partner.title,
    positionInTile: partnerPositionInTile,
  });

  trackHomepageClick(eventLabel, partner.largeImage.link);
};

export const trackPartnerProductClick = (
  sectionId,
  heading,
  partner,
  partnerIndex,
  productImage,
  imageIndex
) => {
  const eventLabel = gtmEventLabel({
    sectionPosition: sectionId,
    sectionTitle: heading.toUpperCase(),
    positionInSection: partnerIndex + 1,
    partnerName: partner.title,
    positionInTile: partnerPositionInTile + imageIndex + 1,
    productName: productImage.title,
  });

  const click = {
    list_name: heading,
    product_name: productImage.title,
    product_id: productImage.productId,
    product_code: productImage.productCode,
    partner_shortcode: getLastString(partner.link),
    position: partnerPositionInTile + imageIndex + 1,
  };

  trackHomepageEcommerce(eventLabel, productImage.link, click);
};

export const trackPartnerImpressions = (heading, partner) => {
  const impressions = partner.smallImages.map((product, index) => {
    return {
      list_name: heading,
      list_id: 'n/a',
      product_name: product.title,
      product_id: product.productId,
      product_code: product.productCode,
      partner_shortcode: getLastString(partner.link),
      position: index + 1 + partnerPositionInTile,
    };
  });
  trackHomepageImpressions(impressions);
};
