import React from 'react';
import { shallow } from 'enzyme';
import Carousel from './Carousel';

const mockProps = {
  settings: {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  },
  renderSlideComponents: () => {},
};

describe('<Carousel />', () => {
  let component;

  it('should render with the correct settings', () => {
    component = shallow(<Carousel {...mockProps} />);
    expect(component.props().dots).toEqual(true);
    expect(component.props().infinite).toEqual(true);
  });

  it('should render slides through renderSlideComponents', () => {
    const renderSlideComponents = () => <div>test component</div>;
    component.setProps({ ...mockProps, renderSlideComponents });

    expect(component.find('div')).toHaveLength(1);
    expect(component.find('div').text()).toEqual('test component');
  });
});
