import React from 'react';
import { shallow } from 'enzyme';
import { HeroBanner } from '../../components';
import { DailyDeals } from './DailyDeals';
import DealBlock from './DealBlock/DealBlock';
import DealEnded from './DealEnded/DealEnded';
import { HeadingSection, CustomBackground } from './DailyDeals.styles';
import mockedDailydealsProps from '../../utils/tests/mockedDailydealsProps';

describe('when rendering Daily Deals without successfully loaded content', () => {
  let component;

  it('should render null if page is loading', () => {
    const mockProps = {
      loading: true,
      page: null,
      route: {
        contentType: 'daily_deals',
      },
      location: { pathname: '/campaign/daily-wonders' },
    };

    component = shallow(<DailyDeals {...mockProps} />);

    expect(component.type()).toEqual(null);
  });

  it('should call fetchData to fetch page data', () => {
    const fetchData = jest.fn();
    const mockProps = {
      loading: false,
      page: null,
      route: {
        contentType: 'daily_deals',
      },
      location: { pathname: '/campaign/daily-wonders' },
      fetchData,
    };
    component = shallow(<DailyDeals {...mockProps} />);
    expect(fetchData).toHaveBeenCalledTimes(1);
  });
});

describe('When rendering the Daily Deals template and have successfully loaded content', () => {
  describe('When End Sale is not true', () => {
    const mockProps = {
      loading: false,
      location: { pathname: '/campaign/daily-wonders' },
      page: { ...mockedDailydealsProps, endSale: false },
    };
    let component;

    beforeAll(() => {
      component = shallow(<DailyDeals {...mockProps} />);
    });

    it('should not display the Ended Sale message', () => {
      expect(component.find(DealEnded)).toHaveLength(0);
    });

    it('should display the hero block', () => {
      expect(component.find(HeroBanner)).toHaveLength(1);
    });

    it('should display the subheading after hero block', () => {
      const expectedTitle = 'Featured';
      expect(component.find(HeadingSection)).toHaveLength(1);
      expect(component.find(HeadingSection).text()).toEqual(expectedTitle);
    });

    it('should display gradient background', () => {
      expect(component.find(CustomBackground)).toHaveLength(1);
    });

    describe('DealBlock', () => {
      component = shallow(<DailyDeals {...mockProps} />);
      const dealBlocks = component.find(DealBlock);

      it('should display three DealBlocks', () => {
        expect(dealBlocks).toHaveLength(3);
      });

      it('should pass the correct props to DealBlock', () => {
        const dealBlockOne = dealBlocks.at(0);
        const dealBlockTwo = dealBlocks.at(1);
        const dealBlockThree = dealBlocks.at(2);

        expect(dealBlockOne.prop('sale')).toEqual(mockedDailydealsProps.saleGroup[0]);
        expect(dealBlockOne.prop('eventCategory')).toEqual(mockedDailydealsProps.pageTitle);

        expect(dealBlockOne.prop('number')).toEqual(1);
        expect(dealBlockTwo.prop('number')).toEqual(2);
        expect(dealBlockThree.prop('number')).toEqual(3);
      });
    });
  });

  describe('When End Sale is true', () => {
    const mockProps = {
      loading: false,
      location: { pathname: '/daily-wonders' },
      page: { ...mockedDailydealsProps, endSale: true },
    };

    let component;
    beforeAll(() => {
      component = shallow(<DailyDeals {...mockProps} />);
    });

    it('should display the Ended Sale message', () => {
      expect(component.find(DealEnded)).toHaveLength(1);
    });

    it('should not display the daily deals page', () => {
      expect(component.find(HeroBanner)).toHaveLength(0);
      expect(component.find(CustomBackground)).toHaveLength(0);
    });
  });
});
