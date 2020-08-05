import React from 'react';
import PropTypes from 'prop-types';

import flexibleComponents from '../flexibleComponents';
import { Seo, HeroBanner } from '../../components';
import {
  BackgroundColor,
  HeroBannerWrapper,
  SectionTitleWrapper,
  SectionWrapper,
  QuoteBlockWrapper,
  ImageGalleryWrapper,
  CtaButtonWrapper,
} from './FlexibleTemplate.style';
import { Container } from '../../styles/layout';

const wrappers = {
  sectionTitle: SectionTitleWrapper,
  quoteBlock: QuoteBlockWrapper,
  imageGalleryBlock: ImageGalleryWrapper,
  ctaButton: CtaButtonWrapper,
  imageSectionTitle: SectionTitleWrapper,
  default: SectionWrapper,
};

const FlexibleTemplate = ({ page, wide, backgroundColor }) => {
  const { pageTitle, seo, heroBanner, componentSections } = page;

  return (
    <Container noPadding wide={wide}>
      <BackgroundColor color={backgroundColor}>
        <Seo {...seo} />
        {heroBanner && (
          <HeroBannerWrapper>
            <HeroBanner {...heroBanner} />
          </HeroBannerWrapper>
        )}
        {componentSections.map((section, index) => {
          const { sectionKey, data } = section;
          const ComponentName = flexibleComponents[sectionKey].component;
          const Wrapper = wrappers[sectionKey] || wrappers.default;

          return (
            <Wrapper key={`section-${sectionKey + index}`}>
              <ComponentName {...data} pageTitle={pageTitle} />
            </Wrapper>
          );
        })}
      </BackgroundColor>
    </Container>
  );
};

FlexibleTemplate.defaultProps = {
  page: [],
  wide: false,
  backgroundColor: '',
};

FlexibleTemplate.propTypes = {
  page: PropTypes.shape({}),
  wide: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

export default FlexibleTemplate;
