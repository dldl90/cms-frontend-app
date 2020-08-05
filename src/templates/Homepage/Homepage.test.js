/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import { Homepage } from './Homepage';
import { Carousel, UspBanner, ImageCard, RichTextEditor } from '../../components';
import { Heading } from '../../styles/global';
import { InfoSection, HeroCtaWrapper } from './Homepage.style';

import mockedHomepageProps from '../../utils/tests/mockedHomepageProps';
import PartnerBlock from './PartnerBlock/PartnerBlock';
import HeroBanner from './HeroBanner/HeroBanner';
import Banner from './Banner/Banner';

describe('when rendering Homepage without successfully loaded content', () => {
  let component;

  it('should render null if page is loading', () => {
    const mockProps = {
      loading: true,
      page: null,
      location: { pathname: '/' },
    };

    component = shallow(<Homepage {...mockProps} />);

    expect(component.type()).toEqual(null);
  });

  it('should call loadHomepage to fetch data', () => {
    const loadHomepage = jest.fn();
    const mockProps = {
      loading: false,
      page: null,
      location: { pathname: '/' },
      loadHomepage,
    };
    component = shallow(<Homepage {...mockProps} />);
    expect(loadHomepage).toHaveBeenCalledTimes(1);
  });
});

describe('When rendering Homepage and have successfully loaded content', () => {
  const mockProps = {
    loading: false,
    location: { pathname: '/' },
    page: mockedHomepageProps,
  };

  let component;

  beforeAll(() => {
    component = shallow(<Homepage {...mockProps} />);
  });

  describe('when rendering UspBanner  <UspBanner />', () => {
    it('should display UspBanner Component', () => {
      expect(component.find(UspBanner).length).toEqual(1);
    });
  });

  describe('when rendering the HeroBanner section', () => {
    it('should display the HeroBanner component', () => {
      expect(component.find(HeroBanner).length).toEqual(1);
    });

    it('should pass the correct props', () => {
      const expectedLink = '/gifts';
      const expectedButtonTitle = 'GIFTS, GLORIOUS GIFTS';
      const expectedTitleImage = 'test title image';

      expect(component.find(HeroBanner).props().link).toEqual(expectedLink);
      expect(component.find(HeroBanner).props().buttonTitle).toEqual(expectedButtonTitle);
      expect(component.find(HeroBanner).props().titleImage).toEqual(expectedTitleImage);
    });
  });

  describe('And When rendering CTA Blocks <HeroCtaBlock />', () => {
    let ctaBlock;

    beforeAll(() => {
      ctaBlock = component.find(HeroCtaWrapper);
    });

    it('should display 4 cta block', () => {
      expect(ctaBlock.find(ImageCard).length).toEqual(4);
    });

    it('should display a link in a cta block', () => {
      const expectedLink = '/gifts/shop-by-recipient/for-him';
      expect(
        ctaBlock
          .find(ImageCard)
          .at(0)
          .prop('link')
      ).toEqual(expectedLink);
    });

    it('should display a title in a cta block', () => {
      const expectedTitle = 'Gifts for him';
      expect(
        ctaBlock
          .find(ImageCard)
          .at(0)
          .prop('title')
      ).toEqual(expectedTitle);
    });

    it('should display a image in a cta block', () => {
      const expectedLink = 'test image 1';
      expect(
        ctaBlock
          .find(ImageCard)
          .at(0)
          .prop('image')
      ).toEqual(expectedLink);
    });
  });

  describe('when rendering Carousel section <CarouselWrapper />', () => {
    it('should display heading', () => {
      const expectedHeading = "WHAT'S HOT";
      expect(component.find('#section-3').find(Heading).length).toEqual(1);
      expect(
        component
          .find('#section-3')
          .find(Heading)
          .text()
      ).toEqual(expectedHeading);
    });

    it('should display Carousel Component <Carousel />', () => {
      expect(component.find(Carousel).length).toEqual(1);
    });

    it('should render carousel slides with the correct data', () => {
      const carousel = component.find('#section-3').find(Carousel);
      const expectedTitle = 'mindful living';
      const expectedLink = '/themes/mindful-living';
      const expectedImage = 'test image 1';

      const renderSlideComponentsReturn = carousel.prop('renderSlideComponents')();
      const firstSlide = renderSlideComponentsReturn[0];

      expect(firstSlide.props.title).toEqual(expectedTitle);
      expect(firstSlide.props.link).toEqual(expectedLink);
      expect(firstSlide.props.image).toEqual(expectedImage);
    });
  });

  describe('when rendering Partners section', () => {
    it('should display the PartnerBlock component', () => {
      expect(component.find(PartnerBlock).length).toEqual(1);
    });

    it('should pass the correct props', () => {
      const expectedHeading = 'GIVE HAPPY, SHOP SMALL';
      const expectedSectionId = '5';
      const expectedSubheading = 'Shopping small brings joy to artisans like these...';
      expect(component.find(PartnerBlock).props().heading).toEqual(expectedHeading);
      expect(component.find(PartnerBlock).props().sectionId).toEqual(expectedSectionId);
      expect(component.find(PartnerBlock).props().subheading).toEqual(expectedSubheading);
    });
  });

  describe('And When rendering bottom banner <Banner />', () => {
    it('should display the banner component', () => {
      expect(component.find(Banner).length).toEqual(1);
    });

    it('should pass the correct props', () => {
      const expectedLink = '/birchbox';
      const expectedTitleImage = "We've partnerd with Birchbox!";
      const expectedSubtitle = 'Get your first box for £5';

      expect(component.find(Banner).props().link).toEqual(expectedLink);
      expect(component.find(Banner).props().title).toEqual(expectedTitleImage);
      expect(component.find(Banner).props().subtitle).toEqual(expectedSubtitle);
    });
  });

  describe('And When rendering the text description at bottom of the page', () => {
    it('should display title', () => {
      const expectedTitle = 'THOUGHTFUL GIFTS, MADE FOR YOUR FAVOURITES';
      expect(
        component
          .find(InfoSection)
          .find(Heading)
          .text()
      ).toEqual(expectedTitle);
    });
    it('should display RichTextBox Component', () => {
      const expectedProps = {
        html: '<p>Prepare to be inspired.</p>',
      };
      expect(component.find(RichTextEditor).props().html).toEqual(expectedProps.html);
    });
  });
});
