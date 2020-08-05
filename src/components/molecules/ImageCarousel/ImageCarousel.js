import React from 'react';
import PropTypes from 'prop-types';
import { Carousel, FlexibleImageCard } from '../../index';
import ArrowButton from '../../atoms/ArrowButton/ArrowButton';
import { sizes } from '../../../styles/breakpoints';
import { Wrapper, ImageCardWrapper } from './ImageCarousel.style';

const settings = {
  dots: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <ArrowButton translate="-100" />,
  prevArrow: <ArrowButton rotate translate="-100" />,
  responsive: [
    {
      breakpoint: sizes.tablet,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
      },
    },
  ],
};

const trackGtmEvent = () => {
  // TODO: add gtm tracking for products once confirmed by marketing & data team
  console.log('product tracking');
};

const ImageCarousel = ({ items }) => {
  return (
    <Wrapper>
      <Carousel
        settings={settings}
        renderSlideComponents={() =>
          items.map(item => (
            <ImageCardWrapper key={item.header}>
              <FlexibleImageCard
                image={item.image}
                header={item.header}
                copy={item.copy}
                link={item.link}
                trackGtmEvent={item.link.url && trackGtmEvent}
              />
            </ImageCardWrapper>
          ))
        }
      />
    </Wrapper>
  );
};

ImageCarousel.defaultProps = {
  items: [
    {
      image: {
        desktop: { src: '', alt: '' },
      },
      link: '',
      productId: '',
    },
  ],
};

ImageCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        desktop: PropTypes.shape({
          src: PropTypes.string,
          alt: PropTypes.string,
        }),
        mobile: PropTypes.shape({
          src: PropTypes.string,
          alt: PropTypes.string,
        }).isRequired,
      }),
      header: PropTypes.string.isRequired,
      copy: PropTypes.string.isRequired,
      link: PropTypes.string,
      productId: PropTypes.string,
    })
  ),
};

export default ImageCarousel;
