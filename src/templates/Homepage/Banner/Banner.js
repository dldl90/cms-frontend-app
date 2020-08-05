import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { trackBannerClick } from '../homepageTracking';
import { SubTitle, Title } from '../../../styles/global';
import { Image } from '../../../components';
import { BannerLink, BannerHeading, BannerImage } from './Banner.style';
import { Column, Row } from '../../../styles/layout';

class Banner extends PureComponent {
  static propTypes = {
    sectionId: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
    }).isRequired,
    backgroundColor: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  };

  render() {
    const { sectionId, link, title, image, backgroundColor, subtitle } = this.props;

    return (
      <BannerLink
        href={link}
        onMouseDown={() => trackBannerClick({ sectionId, ctaText: title, link })}
      >
        <Row>
          <Column columns={{ phone: 12, tablet: 6 }}>
            <BannerImage>
              <Image src={image.desktop} />
              <Image src={image.mobile} />
            </BannerImage>
          </Column>
          <Column columns={{ phone: 12, tablet: 6 }}>
            <BannerHeading bgColor={backgroundColor}>
              <Title negativeColours uppercase>
                {title}
              </Title>
              <SubTitle negativeColours>
                {subtitle}
                &nbsp;&raquo;
              </SubTitle>
            </BannerHeading>
          </Column>
        </Row>
      </BannerLink>
    );
  }
}

export default Banner;
