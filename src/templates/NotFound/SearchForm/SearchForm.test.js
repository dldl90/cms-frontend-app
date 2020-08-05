import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';
import { SearchInput, DepartmentSelect, Form } from './SearchForm.style';

describe('SearchForm', () => {
  const component = shallow(<SearchForm />);
  const PageForm = component.find(Form);
  const searchInput = component.find(SearchInput);

  it('display a search form', () => {
    expect(PageForm.length).toEqual(1);
  });

  it('display a search input', () => {
    expect(searchInput.length).toEqual(1);
  });

  it('displays a departments dropdown', () => {
    const dropdown = component.find(DepartmentSelect);
    expect(dropdown.length).toEqual(1);
  });

  it('reads and sets input value', () => {
    searchInput.simulate('change', { target: { value: 'cats' } });
    const newSearchInput = component.find(SearchInput);
    expect(newSearchInput.prop('value')).toEqual('cats');
  });
});
