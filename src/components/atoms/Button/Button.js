import React from 'react';
import PropTypes from 'prop-types';
import { BaseButton } from './Button.style';

const Button = ({ title, bgColor, link, handleMouseDown }) => {
  return (
    <BaseButton
      as={link ? 'a' : 'button'}
      bgColor={bgColor}
      data-testid="Button"
      href={link}
      onMouseDown={handleMouseDown}
    >
      {title}
    </BaseButton>
  );
};

Button.defaultProps = {
  link: undefined,
  bgColor: '#09b8ec',
  handleMouseDown: undefined,
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  link: PropTypes.string,
  handleMouseDown: PropTypes.func,
};

export default Button;
