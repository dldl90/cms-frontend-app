import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledVideo = styled.video`
  display: block;
  max-width: 100%;
  height: auto;
`;

const Video = ({ src, contentType }) => {
  return (
    <StyledVideo autoPlay="autoPlay" loop muted controls="">
      <source src={src} type={contentType} />
    </StyledVideo>
  );
};

Video.defaultProps = {
  contentType: 'video/mp4',
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
  contentType: PropTypes.string,
};

export default Video;
