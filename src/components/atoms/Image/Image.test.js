import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image';

describe('<Image />', () => {
  const mockProps = {
    src: 'test url',
    alt: 'test alt text',
  };

  it('should render with the correct props', () => {
    const component = shallow(<Image {...mockProps} />);
    expect(component.props().src).toEqual('test url');
    expect(component.props().alt).toEqual('test alt text');
  });
});
