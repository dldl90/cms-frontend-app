import React from 'react';
import { shallow } from 'enzyme';
import RecentlyViewed from './RecentlyViewed';
import { Heading } from '../../../styles/global';
import { ImageCard } from '../../index';
import mockRecentlyViewedProducts from '../../../utils/tests/mockRecentlyViewed';

describe('<RecentlyViewed />', () => {
  const mockProps = {
    heading: 'Test heading',
    sectionId: 'section-4',
  };

  it('should return an empty div if there are no recentlyViewedProducts', () => {
    const component = shallow(<RecentlyViewed {...mockProps} />);
    expect(component.children()).toHaveLength(0);
  });

  describe('with recentlyViewedProducts', () => {
    const component = shallow(<RecentlyViewed {...mockProps} />);
    // eslint-disable-next-line no-multi-assign
    const getProductsMock = (component.instance().getProducts = jest.fn(
      () => mockRecentlyViewedProducts
    ));

    it('should call getProducts and setState with returned value', () => {
      const expectedLength = mockRecentlyViewedProducts.length;
      component.instance().componentDidMount();
      expect(getProductsMock).toHaveBeenCalledTimes(1);
      expect(component.state().recentlyViewedProducts).toHaveLength(expectedLength);
    });

    it('should render with the correct text', () => {
      expect(component.find(Heading).text()).toEqual('Test heading');
    });

    it('should render a carousel with ImageCards', () => {
      const expectedLength = mockRecentlyViewedProducts.length;
      expect(component.find(ImageCard)).toHaveLength(expectedLength);
    });

    it('should render ImageCards with the correct information', () => {
      const expectedTitle = mockRecentlyViewedProducts[0].title;
      const expectedImage = mockRecentlyViewedProducts[0].image;

      const firstImageCard = component.find(ImageCard).at(0);
      expect(firstImageCard.prop('title')).toEqual(expectedTitle);

      expect(firstImageCard.prop('image')).toEqual(expectedImage);
    });
  });
});
