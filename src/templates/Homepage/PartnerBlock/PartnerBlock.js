import React, { PureComponent, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import {
  PartnerSubTitle,
  PartnersRow,
  PartnersColumn,
  PartnersBlock,
  PartnersImages,
  PartnersLargeImage,
  PartnersSmallImage,
} from './PartnerBlock.style';
import { WithImpression } from '../../../components';
import { Heading, SubTitle, Title } from '../../../styles/global';
import { Column, Row } from '../../../styles/layout';
import {
  trackPartnerClick,
  trackPartnerImpressions,
  trackPartnerProductClick,
} from '../homepageTracking';

class PartnerBlock extends PureComponent {
  static defaultProps = {
    subheading: '',
  };

  static propTypes = {
    sectionId: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string,
    blocks: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        link: PropTypes.string.isRequired,
        largeImage: PropTypes.shape({
          title: PropTypes.string.isRequired,
          image: PropTypes.shape({
            desktop: PropTypes.string.isRequired,
            mobile: PropTypes.string.isRequired,
          }),
          link: PropTypes.string.isRequired,
        }),
        smallImages: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            productCode: PropTypes.string.isRequired,
            productId: PropTypes.string.isRequired,
          })
        ),
      })
    ).isRequired,
  };

  render() {
    const { sectionId, heading, subheading, blocks } = this.props;
    return (
      <Fragment>
        <Heading withSubHeading>{heading}</Heading>
        <PartnerSubTitle>{subheading}</PartnerSubTitle>
        <PartnersRow>
          <Row>
            {blocks.map((partner, partnerIndex) => {
              return (
                <PartnersBlock key={partner.title}>
                  <PartnersImages>
                    <Column columns={{ phone: 12, tablet: 8 }}>
                      <PartnersLargeImage
                        bgDesktop={partner.largeImage.image.desktop}
                        bgMobile={partner.largeImage.image.mobile}
                        href={partner.largeImage.link}
                        onMouseDown={() =>
                          trackPartnerClick(sectionId, heading, partner, partnerIndex)
                        }
                      >
                        <span>{partner.largeImage.title}</span>
                      </PartnersLargeImage>
                    </Column>
                    <Column columns={{ phone: 0, tablet: 4 }}>
                      <PartnersColumn>
                        <WithImpression
                          once
                          onImpression={() => trackPartnerImpressions(heading, partner)}
                        >
                          {partner.smallImages.map((productImage, imageIndex) => (
                            <PartnersSmallImage
                              key={productImage.title}
                              background={productImage.image}
                              href={productImage.link}
                              onMouseDown={() =>
                                trackPartnerProductClick(
                                  sectionId,
                                  heading,
                                  partner,
                                  partnerIndex,
                                  productImage,
                                  imageIndex
                                )
                              }
                              data-testid="PartnersSmallImage"
                            >
                              <span>{productImage.title}</span>
                            </PartnersSmallImage>
                          ))}
                        </WithImpression>
                      </PartnersColumn>
                    </Column>
                  </PartnersImages>
                  <Title topMargin={19}>{partner.title}</Title>
                  <SubTitle>{partner.subtitle}</SubTitle>
                </PartnersBlock>
              );
            })}
          </Row>
        </PartnersRow>
      </Fragment>
    );
  }
}

export default PartnerBlock;
