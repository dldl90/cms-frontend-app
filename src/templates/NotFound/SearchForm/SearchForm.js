import React, { Component } from 'react';
import { departmentsAndIDS } from '../NotFoundUtils';
import {
  SearchInput,
  DepartmentSelectWrapper,
  FormContainer,
  DepartmentSelect,
  SubmitButton,
  Form,
  Select,
} from './SearchForm.style';

const SelectArrow = () => (
  <svg width="10" height="5">
    <path d="M0 0 L10 0 L5 5 Z" />
  </svg>
);

class SearchForm extends Component {
  state = { termValue: '' };

  handleTermChange = event => {
    this.setState({ termValue: event.target.value });
  };

  render() {
    const { termValue } = this.state;

    return (
      <div>
        <Form action="/search" method="GET" data-testid="NotFound-Form">
          <FormContainer>
            <SearchInput
              data-testid="NotFound-SearchInput"
              autoComplete="off"
              placeholder="enter search term"
              name="term"
              value={termValue}
              onChange={this.handleTermChange}
            />
            <DepartmentSelectWrapper data-testid="NotFound-DepartmentSelectWrapper">
              <DepartmentSelect name="filter[category_id]" data-testid="NotFound-DepartmentSelect">
                {departmentsAndIDS.map(departmentAndID => {
                  const { id, name } = departmentAndID;
                  return (
                    <option value={id} key={id}>
                      {name}
                    </option>
                  );
                })}
              </DepartmentSelect>
              <Select>
                <SelectArrow />
              </Select>
            </DepartmentSelectWrapper>
            <SubmitButton type="submit" value="Find" data-testid="NotFound-SubmitButton" />
          </FormContainer>
        </Form>
      </div>
    );
  }
}

export default SearchForm;
