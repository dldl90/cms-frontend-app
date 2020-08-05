import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

export default class Carousel extends PureComponent {
  static propTypes = {
    settings: PropTypes.shape({
      dots: PropTypes.bool,
      infinite: PropTypes.bool,
      slidesToShow: PropTypes.number,
      slidesToScroll: PropTypes.number,
      responsive: PropTypes.array,
    }),
    renderSlideComponents: PropTypes.func.isRequired,
  };

  static defaultProps = {
    settings: {
      dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    },
  };

  render() {
    const { settings, renderSlideComponents } = this.props;

    return <Slider {...settings}>{renderSlideComponents()}</Slider>;
  }
}
