import React from 'react';
import { shallow } from 'enzyme';
import BodyCopy from './BodyCopy';
import { SubHeading, CopyText } from './BodyCopy.style';

describe('BodyCopy', () => {
  const component = shallow(<BodyCopy />);

  it('should display a SubHeading', () => {
    const subHeading = component.find(SubHeading);

    expect(subHeading.length).toEqual(1);
  });

  it('should display a Copy', () => {
    const copy = component.find(CopyText);

    expect(copy.length).toEqual(1);
  });
});
