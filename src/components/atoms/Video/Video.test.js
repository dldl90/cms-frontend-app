import React from 'react';
import { shallow } from 'enzyme';
import Video from './Video';

describe('<Video />', () => {
  const mockProps = {
    src: 'test url',
    contentType: 'video/mp4',
  };

  it('should render with the correct props', () => {
    const component = shallow(<Video {...mockProps} />);
    expect(component).toHaveLength(1);

    const source = component.find('source');
    expect(source).toHaveLength(1);
    expect(source.props().src).toEqual('test url');
    expect(source.props().type).toEqual('video/mp4');
  });
});
