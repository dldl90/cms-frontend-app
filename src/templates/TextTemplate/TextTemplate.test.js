import React from 'react';
import { shallow } from 'enzyme';
import TextTemplate from './TextTemplate';
import { mockedTextTemplateProps } from '../../utils/tests/mockedTextTemplateProps';
import { InfoHeading } from '../../styles/global';
import { RichTextEditor } from '../../components';
import NotFound from '../NotFound/NotFound';

describe('<TextTemplate />', () => {
  const mockProps = {
    page: mockedTextTemplateProps,
    location: { pathname: '/' },
    error: null,
    loading: false,
  };

  const component = shallow(<TextTemplate {...mockProps} />);

  it('should display a heading', () => {
    const expectedHeading = 'Customer Terms and Conditions';
    const heading = component.find(InfoHeading);

    expect(heading.length).toEqual(1);
    expect(heading.text()).toEqual(expectedHeading);
  });

  it('should display a copy', () => {
    const expectedCopy = '<p>Test customer terms and conditions</p>';
    const Editor = component.find(RichTextEditor);

    expect(Editor.length).toEqual(1);
    expect(Editor.prop('html')).toEqual(expectedCopy);
  });

  xdescribe('when fetching data', () => {
    it('should return null if loading is true', () => {
      component.setProps({ loading: true });
      expect(component.type()).toEqual(null);
    });

    it('should return null if page and error is null', () => {
      component.setProps({ loading: false, page: null });
      expect(component.type()).toEqual(null);
    });

    it('should render 404 page if loading is false and error has 404 status', () => {
      component.setProps({
        loading: false,
        page: null,
        error: { message: 'Error, no content found for entry', status: 404 },
      });

      expect(component.type()).toEqual(NotFound);
    });
  });
});
