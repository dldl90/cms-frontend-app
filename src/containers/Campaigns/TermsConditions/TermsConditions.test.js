import React from 'react';
import { shallow } from 'enzyme';
import { TermsConditions } from './TermsConditions';
import NotFound from '../../../templates/NotFound/NotFound';
import TextTemplate from '../../../templates/TextTemplate/TextTemplate';
import { mockedTextTemplateProps } from '../../../utils/tests/mockedTextTemplateProps';

describe('Terms and Conditions', () => {
  describe('when rendering a Terms and Conditions page without successfully loaded content', () => {
    let component;

    const mockProps = {
      loading: true,
      page: null,
      error: null,
      location: { pathname: '/campaign/terms-and-conditions/wemissyou15' },
      route: { contentType: 'terms_and_conditions' },
    };

    component = shallow(<TermsConditions {...mockProps} />);

    it('should render null if page is loading', () => {
      expect(component.type()).toEqual(null);
    });

    it('should call loadData with correct args to fetch data', () => {
      const loadData = jest.fn();
      const newProps = {
        ...mockProps,
        loading: false,
        fetchData: loadData,
      };

      component = shallow(<TermsConditions {...newProps} />);
      expect(loadData).toHaveBeenCalledTimes(1);
      expect(loadData).toBeCalledWith(mockProps.location.pathname, mockProps.route.contentType);
    });

    it('should return null is page is not loading and error is null', () => {
      component.setProps({ loading: false, error: null, page: null });
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

  describe('When rendering a Terms and Conditions page and have successfully loaded content', () => {
    const mockProps = {
      loading: false,
      page: mockedTextTemplateProps,
      error: null,
      location: { pathname: '/campaign/terms-and-conditions/wemissyou15' },
    };
    const component = shallow(<TermsConditions {...mockProps} />);

    it('should render TextTemplate', () => {
      expect(component.find(TextTemplate).length).toEqual(1);
    });

    it('should pass correct props', () => {
      expect(component.find(TextTemplate).props().page).toEqual(mockedTextTemplateProps);
    });
  });
});
