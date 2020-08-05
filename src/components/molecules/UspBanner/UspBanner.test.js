import React from 'react';
import { shallow } from 'enzyme';
import UspBanner from './UspBanner';
import { Wrapper } from './UspBanner.style';

const mockProps = {
  slides: [
    {
      title: 'Made by creatives',
      subtitle: "From the UK's best small businesses",
      image: 'test image 1',
      alt: 'Icon-USP-1.png',
    },
    {
      title: 'Chosen by us',
      subtitle: 'All carefully curated to save you time',
      image: 'test image 2',
      alt: 'Icon-USP-2.png',
    },
    {
      title: 'Loved by you',
      subtitle: 'More than 1 million positive reviews',
      image: 'test image 3',
      alt: 'Icon-USP-3.png',
    },
  ],
};

describe('<UspBanner />', () => {
  let component;

  beforeAll(() => {
    component = shallow(<UspBanner {...mockProps} />);
  });

  it('should render a UspBanner component', () => {
    expect(component.find(Wrapper)).toHaveLength(1);
  });
});
