import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  SaleRow,
  QuoteWrapper,
  Quote,
  CopyWrapper,
  IndexQuote,
  ThumbnailWrapper,
  ProductDetails,
  SaleColor,
  SaleBadge,
  ButtonMobile,
} from './DealBlock.style';
import { WithImpression } from '../../../components';
import { trackDailyDealsClick, trackDealsImpressions } from '../dailyDealsTracking';

class DealBlock extends PureComponent {
  static propTypes = {
    sale: PropTypes.shape({
      productBlock: PropTypes.shape({}),
      copyGroup: PropTypes.shape({}),
    }),
    number: PropTypes.number,
    eventCategory: PropTypes.string,
  };

  static defaultProps = {
    sale: null,
    number: 1,
    eventCategory: 'Daily Deals',
  };

  render() {
    const { sale, number, eventCategory } = this.props;
    const { productBlock, copyGroup } = sale;

    return (
      <SaleRow data-testid="DealBlock">
        <ThumbnailWrapper
          href={productBlock.productLink}
          data-productid={productBlock.productCode}
          onMouseDown={() =>
            trackDailyDealsClick({
              eventCategory,
              link: productBlock.productLink,
              productName: productBlock.productName,
              productCode: productBlock.productCode,
              basePrice: productBlock.originalPrice,
              price: productBlock.salePrice,
              sale: productBlock.saleDiscount,
              partnerName: productBlock.partnerName,
              partnerShortcode: productBlock.partnerURL,
              positionIndex: number,
            })
          }
        >
          <SaleBadge>
            <span>
              {productBlock.saleDiscount}
              %
              <br />
              off
            </span>
          </SaleBadge>
          <WithImpression
            once
            onImpression={() => trackDealsImpressions(productBlock, number, eventCategory)}
          >
            <img src={productBlock.productThumbnail} alt={productBlock.productName} />
          </WithImpression>
          <ProductDetails>
            <p>
              <strong>
                <strike>{`Was £${productBlock.originalPrice}`}</strike>
                &nbsp;
                <SaleColor>{`Now £${productBlock.salePrice}`}</SaleColor>
              </strong>
            </p>
            <p>
              <strong>{productBlock.productName}</strong>
            </p>
            <p>
              {'Sold by '}
              <strong>{productBlock.partnerName}</strong>
            </p>
          </ProductDetails>
          <ButtonMobile data-testid="CTAButton-Mobile">Shop now</ButtonMobile>
        </ThumbnailWrapper>
        <QuoteWrapper>
          <CopyWrapper>
            <IndexQuote>{number}</IndexQuote>
            <Quote>
              <h2>{copyGroup.titleCopy}</h2>
              <p>{copyGroup.bodyCopy}</p>
              <a
                data-testid="CTAButton-Desktop"
                href={productBlock.productLink}
                data-productid={productBlock.productCode}
                onMouseDown={() =>
                  trackDailyDealsClick({
                    eventCategory,
                    link: productBlock.productLink,
                    productName: productBlock.productName,
                    productCode: productBlock.productCode,
                    basePrice: productBlock.originalPrice,
                    price: productBlock.salePrice,
                    sale: productBlock.saleDiscount,
                    partnerName: productBlock.partnerName,
                    partnerShortcode: productBlock.partnerURL,
                    positionIndex: number,
                  })
                }
              >
                Shop now
              </a>
            </Quote>
          </CopyWrapper>
        </QuoteWrapper>
      </SaleRow>
    );
  }
}

export default DealBlock;
