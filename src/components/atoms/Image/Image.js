import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledImage = styled.img`
  display: inline-block;
  height: auto;
  max-width: 100%;
  ${({ fullWidth }) =>
    fullWidth &&
    `
    width: 100%;
  `}
`;

const Image = ({ src, alt, fullWidth }) => {
  return <StyledImage src={src} alt={alt} fullWidth={fullWidth} />;
};

Image.defaultProps = {
  fullWidth: false,
  alt: '',
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  fullWidth: PropTypes.bool,
};

export default Image;
