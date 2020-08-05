import React from 'react';
import { shallow, mount } from 'enzyme';
import HeroBanner from './HeroBanner';
import { ImageWrapper, HeroContentWrapper } from './HeroBanner.style';
import { Image, RichTextEditor } from '../..';

describe('<HeroBanner />', () => {
  it('should render without props', () => {
    const component = shallow(<HeroBanner />);
    expect(component.find(ImageWrapper).length).toEqual(1);
  });

  describe('ImageWrapper', () => {
    it('should display a solid background color if passed a backgroundColor prop', () => {
      const mockProps = {
        backgroundColor: 'blue',
      };

      const component = mount(<ImageWrapper {...mockProps} />);
      expect(component).toHaveStyleRule('background', 'blue');
    });

    it('should display a background image if provided', () => {
      const mockProps = {
        backgroundImage: {
          desktop: 'test image url desktop',
          mobile: '',
          alt: 'alt text',
        },
      };
      const component = mount(<ImageWrapper {...mockProps} />);

      expect(component).toHaveStyleRule('background-image', 'url(test image url desktop)');
    });

    describe('aligning the hero text', () => {
      const mockProps = {
        backgroundImage: {
          desktop: 'test image url',
          mobile: '',
          alt: 'test alt text',
        },
        alignment: 'left',
      };
      const component = mount(<ImageWrapper {...mockProps} />);

      it('should left align the hero content if alignment is set to left', () => {
        expect(component).toHaveStyleRule('justify-content', 'flex-start');
      });
      it('should right align the hero content if alignment is set to right', () => {
        component.setProps({ alignment: 'right' });
        expect(component).toHaveStyleRule('justify-content', 'flex-end');
      });
      it('should center align the hero content if alignment is set to center', () => {
        component.setProps({ alignment: 'center' });
        expect(component).toHaveStyleRule('justify-content', 'center');
      });
    });
  });

  it('should display hero copy text if passed a copy prop', () => {
    const mockProps = {
      copy: 'test hero copy',
    };
    const component = shallow(<HeroBanner {...mockProps} />);
    expect(component.find(RichTextEditor).length).toEqual(1);
    expect(component.find(RichTextEditor).prop('html')).toEqual('test hero copy');
  });

  describe('optional overlay', () => {
    it('should not include overlay styles when displaying a solid background colour', () => {
      const mockProps = {
        backgroundColor: 'blue',
      };

      const component = shallow(<HeroBanner {...mockProps} />);
      expect(component.find(HeroContentWrapper).prop('color')).toBeNull();
      expect(component.find(HeroContentWrapper).prop('transparency')).toBeNull();
    });

    it('should include a customised overlay when displaying a background image and passed an overlay prop', () => {
      const mockProps = {
        backgroundImage: 'test background url',
        overlay: {
          color: 'red',
          transparency: true,
        },
      };

      const component = shallow(<HeroBanner {...mockProps} />);
      expect(component.find(HeroContentWrapper).prop('transparency')).toEqual(true);
      expect(component.find(HeroContentWrapper).prop('color')).toEqual('red');
    });
  });
  describe('titleImage', () => {
    it('should include a separate mobile and desktop src if both are supplied', () => {
      const mockProps = {
        titleImage: {
          desktop: 'desktop title image url',
          mobile: 'mobile title image url',
          alt: 'test title image alt',
        },
      };

      const component = shallow(<HeroBanner {...mockProps} />);
      const source = component.find('source');

      expect(source.at(0).prop('srcSet')).toEqual('desktop title image url');
      expect(source.at(1).prop('srcSet')).toEqual('mobile title image url');

      expect(source.at(0).prop('alt')).toEqual('test title image alt');
      expect(source.at(1).prop('alt')).toEqual('test title image alt');

      expect(component.find(Image).prop('src')).toEqual('desktop title image url');
      expect(component.find(Image).prop('alt')).toEqual('test title image alt');
    });
  });
});
