import GTM from '../../utils/tracking';

const productOffset = 10000;

export const priceTrackingHelper = price => {
  const numToTwoDP = parseFloat(price).toFixed(2);
  const lastDecimalIsZero = num => num[num.length - 1] === '0';

  if (lastDecimalIsZero(numToTwoDP)) {
    return numToTwoDP.slice(0, numToTwoDP.length - 1);
  }
  return numToTwoDP;
};

export const trackDailyDealsEcommerce = (link, click, eventCategory) => {
  GTM.pushToDataLayer({
    event: 'campaign_product_clicks',
    eventCategory: `${eventCategory} LP`,
    eventAction: 'Product Click',
    eventLabel: undefined,
    destinationUrl: link,
    ecommerce: {
      click: {
        list_id: 'n/a',
        ...click,
      },
    },
  });
};

export const trackDailyDealsImpressions = (impressions, eventCategory) => {
  GTM.pushToDataLayer({
    event: 'campaign_impressions',
    eventCategory: `${eventCategory} LP`,
    eventAction: 'Product Impressions',
    eventLabel: undefined,
    ecommerce: {
      impressions: [impressions],
    },
  });
};

export const trackDailyDealsClick = ({
  eventCategory,
  link,
  productName,
  productCode,
  basePrice,
  price,
  sale,
  partnerName,
  partnerShortcode,
  positionIndex,
}) => {
  const click = {
    list_name: eventCategory,
    product_name: productName,
    product_id: (productCode - productOffset).toString(),
    product_code: productCode.toString(),
    base_price_GBP: priceTrackingHelper(basePrice),
    price_GBP: priceTrackingHelper(price),
    sale_type: `${sale}.0%`,
    partner_name: partnerName,
    partner_shortcode: partnerShortcode,
    position: positionIndex,
  };

  trackDailyDealsEcommerce(link, click, eventCategory);
};

export const trackDealsImpressions = (productBlock, saleIndex, eventCategory) => {
  const impressions = {
    list_name: eventCategory,
    list_id: 'n/a',
    product_name: productBlock.productName,
    product_id: (productBlock.productCode - productOffset).toString(),
    product_code: productBlock.productCode.toString(),
    base_price_GBP: priceTrackingHelper(productBlock.originalPrice),
    price_GBP: priceTrackingHelper(productBlock.salePrice),
    sale_type: `${productBlock.saleDiscount}.0%`,
    partner_name: productBlock.partnerName,
    partner_shortcode: productBlock.partnerURL,
    position: saleIndex,
  };
  trackDailyDealsImpressions(impressions, eventCategory);
};
