import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

describe('<ErrorBoundary />', () => {
  const MockChild = () => <div>Mock child component</div>;

  describe('with an error', () => {
    const component = shallow(
      <ErrorBoundary>
        <MockChild />
      </ErrorBoundary>
    );

    const error = new Error('test error');
    component.find(MockChild).simulateError(error);

    it('should set state with hasError true', () => {
      expect(component.state().hasError).toEqual(true);
    });

    it('should render null', () => {
      expect(component.type()).toEqual(null);
    });
  });

  describe('with no error', () => {
    const component = shallow(
      <ErrorBoundary>
        <MockChild />
      </ErrorBoundary>
    );
    it('should set state with hasError false', () => {
      expect(component.state().hasError).toEqual(false);
    });

    it('should render children', () => {
      expect(component.find(MockChild)).toHaveLength(1);
    });
  });
});
