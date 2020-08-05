import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { Image } from '../../index';
import {
  Wrapper,
  ResponsiveView,
  SlideWrapper,
  Slide,
  Icon,
  TextBlock,
  Title,
  Copy,
} from './UspBanner.style';

const sliderSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
  ],
};

const testName = 'UspBanner';
export default class UspBanner extends PureComponent {
  static propTypes = {
    slides: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }),
    ]),
  };

  static defaultProps = {
    slides: null,
  };

  renderSlides = () => {
    const { slides } = this.props;

    if (!slides) return null;

    return slides.map(slide => (
      <SlideWrapper key={slide.title}>
        <Slide>
          <Icon>
            <Image src={slide.image} alt={slide.alt} />
          </Icon>
          <TextBlock>
            <Title>{slide.title}</Title>
            <Copy>{slide.subtitle}</Copy>
          </TextBlock>
        </Slide>
      </SlideWrapper>
    ));
  };

  render() {
    return (
      <Wrapper>
        <ResponsiveView data-testid={`${testName}-ResponsiveViewDesktop`} desktop>
          {this.renderSlides()}
        </ResponsiveView>
        <ResponsiveView data-testid={`${testName}-ResponsiveViewMobile`} mobile>
          <Slider {...sliderSettings}>{this.renderSlides()}</Slider>
        </ResponsiveView>
      </Wrapper>
    );
  }
}
