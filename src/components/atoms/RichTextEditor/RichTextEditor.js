import React from 'react';
import PropTypes from 'prop-types';

import { RichTextEditorStyle } from './RichTextEditor.style';

const RichTextEditor = ({ html, smallText, copyColor }) => {
  return (
    <RichTextEditorStyle
      dangerouslySetInnerHTML={{ __html: html }}
      data-testid="RichTextEditor"
      smallText={smallText}
      copyColor={copyColor}
    />
  );
};

RichTextEditor.defaultProps = {
  html: null,
  smallText: false,
  copyColor: undefined,
};

RichTextEditor.propTypes = {
  html: PropTypes.string,
  smallText: PropTypes.bool,
  copyColor: PropTypes.string,
};

export default RichTextEditor;
