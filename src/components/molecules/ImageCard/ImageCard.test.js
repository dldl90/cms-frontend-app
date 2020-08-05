import React from 'react';
import { shallow } from 'enzyme';
import ImageCard from './ImageCard';
import { Image } from '../../index';
import { CardTitle } from './ImageCard.style';

const mockProps = {
  title: 'test title',
  image: 'test image url',
  alt: 'test alt',
  link: 'test link',
};

describe('<ImageCard />', () => {
  let component;

  beforeAll(() => {
    component = shallow(<ImageCard {...mockProps} />);
  });

  it('should display the correct image', () => {
    const expectedUrl = 'test image url';
    expect(component.find(Image)).toHaveLength(1);
    expect(component.find(Image).prop('src')).toEqual(expectedUrl);
  });

  it('should render with the correct link url', () => {
    const expectedLink = 'test link';
    expect(component.prop('href')).toEqual(expectedLink);
  });

  it('should render with the correct title', () => {
    const expectedTitle = 'test title';
    expect(component.find(CardTitle).text()).toEqual(expectedTitle);
  });
});
