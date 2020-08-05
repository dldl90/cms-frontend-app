import React from 'react';
import { shallow } from 'enzyme';
import ImageGalleryBlock from './ImageGalleryBlock';
import { Row } from '../../../styles/layout';
import { imageItems } from './story/mockData';
import { FlexibleImageCard } from '../../index';

describe('<ImageCard />', () => {
  it('should render without props', () => {
    const component = shallow(<ImageGalleryBlock />);
    expect(component.find(Row).length).toEqual(1);
  });

  it('should render the correct number of imageItems', () => {
    const component = shallow(<ImageGalleryBlock imageItems={imageItems} />);
    const expectedLength = imageItems.length;
    expect(component.find(FlexibleImageCard).length).toEqual(expectedLength);
  });

  it('should render imageItems with the correct header', () => {
    const component = shallow(<ImageGalleryBlock imageItems={imageItems} />);
    const expectedText = imageItems[0].header;
    expect(
      component
        .find(FlexibleImageCard)
        .at(0)
        .prop('header')
    ).toEqual(expectedText);
  });

  it('should render imageItems with the correct copy', () => {
    const component = shallow(<ImageGalleryBlock imageItems={imageItems} />);
    const expectedText = imageItems[0].copy;
    expect(
      component
        .find(FlexibleImageCard)
        .at(0)
        .prop('copy')
    ).toEqual(expectedText);
  });
});
