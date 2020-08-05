import React from 'react';
import { shallow } from 'enzyme';
import { NotFoundComponent } from './NotFound';
import BodyCopy from './BodyCopy/BodyCopy';
import SearchForm from './SearchForm/SearchForm';
import { InfoHeading } from '../../styles/global';
import { CategoryBlock } from './NotFound.style';

describe('NotFoundComponent', () => {
  const component = shallow(<NotFoundComponent />);
  const categoryBlocks = component.find(CategoryBlock);

  it('should display a heading', () => {
    const expectedHeading = 'WELL, THIS IS AWKWARD';
    const heading = component.find(InfoHeading);

    expect(heading.length).toEqual(1);
    expect(heading.text()).toEqual(expectedHeading);
  });

  it('should display a body copy', () => {
    const bodyCopy = component.find(BodyCopy);

    expect(bodyCopy.length).toEqual(1);
  });

  it('should display a search form', () => {
    const searchForm = component.find(SearchForm);

    expect(searchForm.length).toEqual(1);
  });

  it('should display eight category blocks', () => {
    expect(categoryBlocks.length).toEqual(8);
  });

  describe('category block', () => {
    const categoryBlockFirst = categoryBlocks.first();

    it('should have a href', () => {
      expect(categoryBlockFirst.prop('href')).toEqual('/gifts');
    });

    it('should have a label', () => {
      expect(categoryBlockFirst.text()).toEqual('gifts & cards');
    });

    it('should display an image', () => {
      expect(categoryBlockFirst.find('img').prop('src')).toEqual(
        'https://static-files.qa.noths.com/cms-frontend/img/gifts_and_cards.jpg'
      );
    });
  });
});
