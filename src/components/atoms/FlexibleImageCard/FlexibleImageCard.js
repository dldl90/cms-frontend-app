import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Picture } from './FlexibleImageCard.style';
import { Image } from '../../index';
import { sizes } from '../../../styles/breakpoints';
import { CardHeader, CardCopy, TextWrapper } from '../CardText/CardText';

const hasWhiteSpace = url => url.indexOf(' ') >= 0;

const renderImage = (image, link) => {
  if (image.desktop && image.desktop.src && !hasWhiteSpace(image.desktop.src)) {
    return (
      <Picture isLink={!!link}>
        <source
          srcSet={image.desktop && image.desktop.src}
          media={`(min-width: ${sizes.tablet}px)`}
          alt={image.desktop && image.desktop.alt}
        />
        <Image
          fullWidth
          src={image.mobile && image.mobile.src}
          alt={image.mobile && image.mobile.alt}
        />
      </Picture>
    );
  }

  return (
    <Image
      fullWidth
      src={image.mobile && image.mobile.src}
      alt={image.mobile && image.mobile.alt}
    />
  );
};

const FlexibleImageCard = ({
  image,
  header,
  copy,
  link,
  trackGtmEvent,
  uppercaseHeader,
  lightText,
  alignText,
  withBorder,
}) => {
  return (
    <Wrapper
      as={link && 'a'}
      href={link}
      isLink={!!link}
      onMouseDown={trackGtmEvent}
      withBorder={withBorder}
    >
      {renderImage(image, link)}
      <TextWrapper alignText={alignText} hasContent={copy || header}>
        {header && (
          <CardHeader
            uppercaseHeader={uppercaseHeader}
            lightText={lightText}
            hasCopy={!!copy}
            isLink={!!link}
          >
            {header}
          </CardHeader>
        )}
        {copy && <CardCopy>{copy}</CardCopy>}
      </TextWrapper>
    </Wrapper>
  );
};

FlexibleImageCard.defaultProps = {
  image: {
    desktop: { src: '', alt: '' },
  },
  header: '',
  copy: '',
  link: '',
  trackGtmEvent: () => {},
  uppercaseHeader: false,
  lightText: false,
  alignText: 'left',
  withBorder: false,
};

FlexibleImageCard.propTypes = {
  image: PropTypes.shape({
    desktop: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    mobile: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }).isRequired,
  }),
  header: PropTypes.string,
  copy: PropTypes.string,
  link: PropTypes.string,
  trackGtmEvent: PropTypes.func,
  uppercaseHeader: PropTypes.bool,
  lightText: PropTypes.bool,
  alignText: PropTypes.string,
  withBorder: PropTypes.bool,
};

export default FlexibleImageCard;
