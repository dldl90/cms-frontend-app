import React from 'react';
import PropTypes from 'prop-types';
import { Image, RichTextEditor } from '../..';
import { ImageWrapper, HeroContentWrapper, HeroContent } from './HeroBanner.style';
import { sizes } from '../../../styles/breakpoints';

const HeroBanner = ({
  backgroundImage,
  backgroundColor,
  alignment,
  copy,
  overlay,
  titleImage,
  copyColor,
}) => {
  const titleImageIncluded = titleImage && (titleImage.mobile || titleImage.desktop);

  return (
    <ImageWrapper
      data-testid="HeroBanner"
      backgroundImage={backgroundImage}
      backgroundColor={backgroundColor}
      alignment={alignment}
    >
      <HeroContentWrapper
        backgroundImage={backgroundImage}
        alignment={alignment}
        color={overlay && overlay.color}
        transparency={overlay && overlay.transparency}
      >
        <HeroContent noImage={!titleImageIncluded}>
          {titleImageIncluded && (
            <picture>
              <source
                srcSet={titleImage.desktop}
                media={`(min-width: ${sizes.tablet}px)`}
                alt={titleImage.alt}
              />
              <source srcSet={titleImage.mobile} alt={titleImage.alt} />
              <Image src={titleImage.desktop} alt={titleImage.alt} />
            </picture>
          )}

          {copy && <RichTextEditor html={copy} copyColor={copyColor} />}
        </HeroContent>
      </HeroContentWrapper>
    </ImageWrapper>
  );
};

HeroBanner.defaultProps = {
  backgroundImage: '',
  backgroundColor: '',
  copy: '',
  copyColor: undefined,
  overlay: null,
  titleImage: {
    src: '',
    alt: '',
  },
};

HeroBanner.propTypes = {
  backgroundImage: PropTypes.shape({
    desktop: PropTypes.string.isRequired,
    mobile: PropTypes.string,
    alt: PropTypes.string.isRequired,
  }),
  backgroundColor: PropTypes.string,
  alignment: PropTypes.string.isRequired,
  copy: PropTypes.string,
  copyColor: PropTypes.string,
  overlay: PropTypes.shape({
    color: PropTypes.string.isRequired,
    transparency: PropTypes.bool.isRequired,
  }),
  titleImage: PropTypes.shape({
    desktop: PropTypes.string.isRequired,
    mobile: PropTypes.string,
    alt: PropTypes.string.isRequired,
  }),
};

export default HeroBanner;
