import React from 'react';
import { shallow } from 'enzyme';
import FlexibleImageCard from './FlexibleImageCard';
import { Wrapper, Picture } from './FlexibleImageCard.style';
import { Image } from '../../index';
import { CardHeader, CardCopy } from '../CardText/CardText';

describe('FlexibleImageCard', () => {
  it('should render without props', () => {
    const component = shallow(<FlexibleImageCard />);
    expect(component.find(Wrapper).length).toEqual(1);
  });

  describe('rendering the correct html', () => {
    it('should include a separate mobile and desktop src if both are supplied', () => {
      const mockImage = {
        desktop: {
          src: 'desktop-image-url',
          alt: 'desktop image alt',
        },
        mobile: {
          src: 'mobile-image-url',
          alt: 'mobile image alt',
        },
      };

      const component = shallow(<FlexibleImageCard image={mockImage} />);
      const source = component.find('source');

      expect(source.prop('srcSet')).toEqual('desktop-image-url');
      expect(source.prop('alt')).toEqual('desktop image alt');
      expect(component.find(Image).prop('src')).toEqual('mobile-image-url');
      expect(component.find(Image).prop('alt')).toEqual('mobile image alt');
    });

    it('should still render if desktop image is not supplied', () => {
      const mockImage = {
        mobile: {
          src: 'mobile-image-url',
          alt: 'mobile image alt',
        },
      };
      const component = shallow(<FlexibleImageCard image={mockImage} />);

      expect(component.find(Picture).length).toEqual(0);
      expect(component.find(Image).prop('src')).toEqual('mobile-image-url');
      expect(component.find(Image).prop('alt')).toEqual('mobile image alt');
    });

    it('should include a CardHeader if header is supplied', () => {
      const component = shallow(<FlexibleImageCard header="test header" />);
      expect(component.find(CardHeader).length).toEqual(1);
      expect(component.find(CardHeader).text()).toEqual('test header');
    });

    it('should include copy if it is supplied', () => {
      const component = shallow(<FlexibleImageCard copy="test copy" />);
      expect(component.find(CardCopy).length).toEqual(1);
      expect(component.find(CardCopy).text()).toEqual('test copy');
    });
  });
});
