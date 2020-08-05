import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import { BaseButton } from './Button.style';

describe('<Button />', () => {
  describe('when no link prop is passed', () => {
    const buttonProps = {
      bgColor: 'blue',
      handleMouseDown: () => {},
    };

    const component = shallow(<Button {...buttonProps}>Button</Button>);

    it('should render a button tag', () => {
      const expectedString = '<button';
      expect(component.html()).toContain(expectedString);
    });

    describe('with the correct prop types', () => {
      const button = component.find(BaseButton);
      it('should include a valid handleMouseDown prop', () => {
        expect(button.props().onMouseDown).toBeDefined();
        expect(button.props().onMouseDown).toBeInstanceOf(Function);
      });

      it('should not include a href prop', () => {
        expect(button.props().href).toBeUndefined();
      });
    });
  });

  describe('when link prop is passed', () => {
    const linkProps = {
      bgColor: 'blue',
      link: 'test href',
    };
    const component = shallow(<Button {...linkProps}>Link</Button>);

    it('should render a link tag', () => {
      const expectedString = '<a';
      expect(component.html()).toContain(expectedString);
    });

    describe('with the correct prop types', () => {
      const button = component.find(BaseButton);

      it('should include a valid href prop', () => {
        expect(button.props().href).toBeDefined();
        expect(typeof button.props().href).toBe('string');
        expect(button.props().href).toEqual('test href');
      });
    });
  });

  it('should render a title', () => {
    const mockProps = {
      bgColor: 'blue',
      handleMouseDown: () => {},
      title: 'Click me',
    };
    const component = shallow(<Button {...mockProps} />);
    expect(component.text()).toEqual('Click me');
  });
});
