import React from 'react';
import { shallow } from 'enzyme';
import HeroBanner from './HeroBanner';
import mockedHomepageProps from '../../../utils/tests/mockedHomepageProps';
import {
  HeroBannerLink,
  HeroBannerButton,
  HeroBannerImage,
  TitleImageDesktop,
  TitleImageMobile,
} from './HeroBanner.style';

describe('<HeroBanner />', () => {
  const mockProps = {
    testName: 'Homepage',
    ...mockedHomepageProps.heroBanner,
  };

  const component = shallow(<HeroBanner {...mockProps} />);

  it('should display with a link', () => {
    expect(component.find(HeroBannerLink).length).toEqual(1);
    expect(component.find(HeroBannerLink).prop('href')).toEqual('/gifts');
  });

  it('should display title image including src and alt tag for desktop and mobile', () => {
    const bannerTitleDesktop = component.find(TitleImageDesktop);
    const bannerTitleMobile = component.find(TitleImageMobile);
    expect(bannerTitleDesktop);
    expect(bannerTitleDesktop.prop('src')).toEqual('test title image');
    expect(bannerTitleDesktop.prop('alt')).toEqual('give a little Magic');
    expect(bannerTitleMobile);
    expect(bannerTitleMobile.prop('src')).toEqual('test title image mobile');
    expect(bannerTitleMobile.prop('alt')).toEqual('give a little Magic');
  });

  it('should display a cta link with the correct CTA text', () => {
    expect(component.find(HeroBannerButton).length).toEqual(1);
    expect(component.find(HeroBannerButton).text()).toContain('GIFTS, GLORIOUS GIFTS');
  });

  it('should display large image banner', () => {
    const bannerImage = component.find(HeroBannerImage);
    expect(bannerImage.length).toEqual(1);
    expect(bannerImage.prop('bgDesktop')).toEqual('test desktop banner image');
    expect(bannerImage.prop('bgMobile')).toEqual('test mobile banner image');
  });
});
