import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { trackBannerClick } from '../homepageTracking';
import {
  HeroBannerLink,
  HeroBannerPromo,
  HeroBannerButton,
  HeroBannerImage,
  TandCs,
  TitleImageDesktop,
  TitleImageMobile,
} from './HeroBanner.style';

import { Column, Row } from '../../../styles/layout';

class HeroBanner extends PureComponent {
  static propTypes = {
    link: PropTypes.string.isRequired,
    buttonTitle: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    titleImage: PropTypes.string.isRequired,
    titleImageMobile: PropTypes.string.isRequired,
    titleImageAlt: PropTypes.string.isRequired,
    buttonColor: PropTypes.string.isRequired,
    bannerImage: PropTypes.shape({}).isRequired,
    legalInfo: PropTypes.shape({}).isRequired,
    testName: PropTypes.string.isRequired,
  };

  render() {
    const {
      link,
      buttonTitle,
      backgroundColor,
      titleImage,
      titleImageMobile,
      titleImageAlt,
      buttonColor,
      bannerImage,
      legalInfo,
      testName,
    } = this.props;

    return (
      <div>
        <HeroBannerLink
          href={link}
          onMouseDown={() =>
            trackBannerClick({
              sectionId: 1,
              ctaText: buttonTitle,
              link,
            })
          }
          data-testid={`${testName}-HeroBanner`}
        >
          <Row>
            <Column columns={{ phone: 12, tablet: 5 }} order={{ phone: 2, tablet: 1 }}>
              <HeroBannerPromo bgColor={backgroundColor}>
                <TitleImageDesktop src={titleImage} alt={titleImageAlt} />
                <TitleImageMobile src={titleImageMobile} alt={titleImageAlt} />
                <HeroBannerButton bgColor={buttonColor}>
                  {buttonTitle}
                  &nbsp;&raquo;
                </HeroBannerButton>
              </HeroBannerPromo>
            </Column>
            <Column columns={{ phone: 12, tablet: 7 }} order={{ phone: 1, tablet: 2 }}>
              <HeroBannerImage bgDesktop={bannerImage.desktop} bgMobile={bannerImage.mobile} />
            </Column>
          </Row>
        </HeroBannerLink>

        {legalInfo.display && (
          <TandCs>
            <a href={legalInfo.link}>{legalInfo.title}</a>
          </TandCs>
        )}
      </div>
    );
  }
}

export default HeroBanner;
