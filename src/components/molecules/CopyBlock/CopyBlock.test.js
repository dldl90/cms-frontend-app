import React from 'react';
import { shallow } from 'enzyme';
import CopyBlock from './CopyBlock';
import RichTextEditor from '../../atoms/RichTextEditor/RichTextEditor';

const mockProps = {
  html: 'Test String',
};

describe('<CopyBlock />', () => {
  let component;

  beforeAll(() => {
    component = shallow(<CopyBlock {...mockProps} />);
  });

  it('should display a Rich Text Editor', () => {
    expect(component.find(RichTextEditor)).toHaveLength(1);
  });

  it('should pass correct props to Rich Text Editor', () => {
    expect(component.find(RichTextEditor).props().html).toEqual('Test String');
  });
});
