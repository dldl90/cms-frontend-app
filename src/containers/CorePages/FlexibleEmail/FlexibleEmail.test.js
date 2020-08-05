import React from 'react';
import { shallow } from 'enzyme';
import { FlexibleEmail } from './FlexibleEmail';
import { FlexibleTemplate, NotFound } from '../../../templates';

describe('Flexible Campaign Container', () => {
  describe('when rendering a Flexible Email page without successfully loaded content', () => {
    let component;

    const mockProps = {
      loading: true,
      page: null,
      error: null,
      location: { pathname: '/email/flexi' },
      route: { contentType: 'flexible_email' },
    };

    component = shallow(<FlexibleEmail {...mockProps} />);

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

      component = shallow(<FlexibleEmail {...newProps} />);
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

  describe('When rendering a Flexible Campaign page and have successfully loaded content', () => {
    const mockProps = {
      loading: false,
      page: {
        pageTitle: 'hello world',
      },
      error: null,
      location: { pathname: '/email/flexi' },
    };

    const expectedPage = {
      pageTitle: 'hello world',
    };

    const component = shallow(<FlexibleEmail {...mockProps} />);

    it('should render FlexibleTemplate', () => {
      expect(component.find(FlexibleTemplate).length).toEqual(1);
    });

    it('should pass correct props', () => {
      expect(component.find(FlexibleTemplate).props().page).toEqual(expectedPage);
    });
  });
});
