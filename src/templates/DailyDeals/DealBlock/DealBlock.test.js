import React from 'react';
import { shallow } from 'enzyme';
import DealBlock from './DealBlock';
import * as dailyDealsTracking from '../dailyDealsTracking';
import { WithImpression } from '../../../components';

import { Quote, IndexQuote, ThumbnailWrapper, ProductDetails, SaleBadge } from './DealBlock.style';

jest.mock('../dailyDealsTracking');

describe('<DealBlock />', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockProps = {
    number: 1,
    sale: {
      productBlock: {
        saleDiscount: 30,
        productThumbnail: 'product thumbnail',
        productName: 'product name',
        partnerName: 'partner Name',
        partnerURL: 'partnerName',
        productCode: 10001,
        originalPrice: 10,
        salePrice: 7,
        productLink: 'www.noths.com',
      },
      copyGroup: {
        titleCopy: 'Title Copy',
        bodyCopy: 'Body copy',
      },
    },
    eventCategory: 'Daily wonders',
  };

  const component = shallow(<DealBlock {...mockProps} />);

  it('should should display a SaleBadge', () => {
    const expectedSaleBadge = '30%off';
    expect(component.find(SaleBadge).length).toEqual(1);
    expect(component.find(SaleBadge).text()).toEqual(expectedSaleBadge);
  });

  it('should should display an image', () => {
    const thumbnailWrapper = component.find(ThumbnailWrapper);
    const thumbnail = thumbnailWrapper.find('img');

    expect(thumbnail);
    expect(thumbnail.prop('src')).toEqual('product thumbnail');
  });

  it('should should display product details', () => {
    const expectedOriginalPrice = 'Was £10';
    const expectedSalePrice = 'Now £7';
    const expectedProductName = 'product name';
    const expectedPartnerName = 'Sold by partner Name';

    const productDetails = component.find(ProductDetails);

    expect(productDetails.text()).toEqual(
      // eslint-disable-next-line prefer-template
      expectedOriginalPrice +
        '\u00a0' +
        expectedSalePrice +
        expectedProductName +
        expectedPartnerName
    );
  });

  describe('Thumbnail wrapper', () => {
    const thumbnailWrapper = component.find(ThumbnailWrapper);

    it('the image should display a link to the product', () => {
      expect(thumbnailWrapper.prop('href')).toEqual('www.noths.com');
    });

    it('should trigger trackDailyDealsClick onMouseDown of the image', () => {
      const expectedArgs = {
        eventCategory: 'Daily wonders',
        link: 'www.noths.com',
        productName: 'product name',
        productCode: 10001,
        basePrice: 10,
        price: 7,
        sale: 30,
        partnerName: 'partner Name',
        partnerShortcode: 'partnerName',
        positionIndex: 1,
      };

      thumbnailWrapper.prop('onMouseDown')();
      expect(dailyDealsTracking.trackDailyDealsClick).toHaveBeenCalledTimes(1);
      expect(dailyDealsTracking.trackDailyDealsClick).toHaveBeenCalledWith(expectedArgs);
    });
  });

  it('should display IndexQuote', () => {
    const indexQuote = component.find(IndexQuote);

    expect(indexQuote.length).toEqual(1);
    expect(indexQuote.text()).toEqual('1');
  });

  it('should display a quote', () => {
    const quote = component.find(Quote);

    expect(quote.length).toEqual(1);
    expect(quote.find('h2').text()).toEqual('Title Copy');
    expect(quote.find('p').text()).toEqual('Body copy');
  });

  describe('CTA', () => {
    const quote = component.find(Quote);
    const CTA = quote.find('a');

    it('should display a CTA', () => {
      expect(CTA.text()).toEqual('Shop now');
      expect(CTA.prop('href')).toEqual('www.noths.com');
    });

    it('should trigger trackDailyDealsClick onMouseDown of the CTA', () => {
      const expectedArgs = {
        eventCategory: 'Daily wonders',
        link: 'www.noths.com',
        productName: 'product name',
        productCode: 10001,
        basePrice: 10,
        price: 7,
        sale: 30,
        partnerName: 'partner Name',
        partnerShortcode: 'partnerName',
        positionIndex: 1,
      };

      CTA.prop('onMouseDown')();
      expect(dailyDealsTracking.trackDailyDealsClick).toHaveBeenCalledTimes(1);
      expect(dailyDealsTracking.trackDailyDealsClick).toHaveBeenCalledWith(expectedArgs);
    });
  });

  it('should track impressions', () => {
    const withImpression = component.find(WithImpression);
    withImpression.prop('onImpression')();

    expect(dailyDealsTracking.trackDealsImpressions).toHaveBeenCalledTimes(1);
    expect(dailyDealsTracking.trackDealsImpressions).toHaveBeenCalledWith(
      mockProps.sale.productBlock,
      mockProps.number,
      mockProps.eventCategory
    );
  });
});
