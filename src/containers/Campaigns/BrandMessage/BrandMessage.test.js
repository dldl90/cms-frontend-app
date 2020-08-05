import React from 'react';
import { shallow } from 'enzyme';
import { BrandMessage } from './BrandMessage';
import { BasicCampaignTemplate, NotFound } from '../../../templates';
import { mockedTextTemplateProps } from '../../../utils/tests/mockedTextTemplateProps';

describe('Brand Message', () => {
  describe('when rendering a Brand Message page without successfully loaded content', () => {
    let component;

    const mockProps = {
      loading: true,
      page: null,
      error: null,
      location: { pathname: '/campaign/internation-womens-day' },
      route: { contentType: 'brand_message' },
    };

    component = shallow(<BrandMessage {...mockProps} />);

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

      component = shallow(<BrandMessage {...newProps} />);
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

  describe('When rendering a Brand Message page and have successfully loaded content', () => {
    const mockProps = {
      loading: false,
      page: mockedTextTemplateProps,
      error: null,
      location: { pathname: '/campaign/terms-and-conditions/wemissyou15' },
    };
    const component = shallow(<BrandMessage {...mockProps} />);

    it('should render BasicCampaignTemplate', () => {
      expect(component.find(BasicCampaignTemplate).length).toEqual(1);
    });

    it('should pass correct props', () => {
      expect(component.find(BasicCampaignTemplate).props().page).toEqual(mockedTextTemplateProps);
    });
  });
});
