import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RichTextEditor from '../../atoms/RichTextEditor/RichTextEditor';

const CopyBlockWrapper = styled.div`
  text-align: center;
`;

const CopyBlock = ({ html }) => {
  return (
    <CopyBlockWrapper>
      <RichTextEditor html={html} />
    </CopyBlockWrapper>
  );
};

export default CopyBlock;

CopyBlock.propTypes = {
  html: PropTypes.string.isRequired,
};
