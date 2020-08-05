import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import RichTextEditor from './RichTextEditor';
import { nothsTheme } from '../../../styles/noths.theme';

describe('<RichTextEditor />', () => {
  let component;

  const mockProps = {
    html: 'Test string',
  };

  it('should render with the correct text', () => {
    component = shallow(
      <ThemeProvider theme={nothsTheme}>
        <RichTextEditor {...mockProps} />
      </ThemeProvider>
    );
    expect(component.html()).toContain('Test string');
  });
});
