import React from 'react';
import PropTypes from 'prop-types';
import { StyledSectionTitle, Title } from './SectionTitle.style';

const SectionTitle = ({ header }) => (
  <StyledSectionTitle>
    <Title>{header}</Title>
  </StyledSectionTitle>
);

SectionTitle.propTypes = {
  header: PropTypes.string.isRequired,
};

export default SectionTitle;
