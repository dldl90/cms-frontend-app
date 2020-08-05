import React from 'react';
import { shallow } from 'enzyme';
import CategoryBlock from './GategoryBlock';
import { categoryBlocks } from './story/mockData';
import { FlexibleImageCard } from '../../index';

describe('<CategoryBlock />', () => {
  it('should render the correct number of categoryBlocks', () => {
    const component = shallow(<CategoryBlock categoryBlocks={categoryBlocks} />);
    const expectedLength = categoryBlocks.length;
    expect(component.find(FlexibleImageCard).length).toEqual(expectedLength);
  });

  it('should render category blocks with the correct text', () => {
    const component = shallow(<CategoryBlock categoryBlocks={categoryBlocks} />);
    const expectedText = categoryBlocks[0].text;
    expect(
      component
        .find(FlexibleImageCard)
        .at(0)
        .prop('header')
    ).toEqual(expectedText);
  });

  it('should render category blocks with the correct image', () => {
    const component = shallow(<CategoryBlock categoryBlocks={categoryBlocks} />);
    const expectedImage = {
      mobile: {
        src: categoryBlocks[0].image.src,
        alt: categoryBlocks[0].image.alt,
      },
    };
    expect(
      component
        .find(FlexibleImageCard)
        .at(0)
        .prop('image')
    ).toEqual(expectedImage);
  });
});
