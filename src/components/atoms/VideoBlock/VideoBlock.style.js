import styled from 'styled-components';

export const VideoBlockWrapper = styled.div`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const VideoWrapper = styled.div`
  display: block;
  max-width: 720px;
  height: auto;
  margin: 0 auto;
`;

export const VideoPlayer = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
  width: 100%;
  height: 100%;
  padding-bottom: 56.25%;
  cursor: pointer;
`;

export const IframeStyle = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const VideoThumbnail = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const VideoCopyWrapper = styled.div`
  > h2 {
    font-family: ${props => props.theme.font.family.secondary};
    font-size: 28px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.79;
    letter-spacing: normal;
    color: ${props => props.theme.color.primary};
  }

  > p {
    font-family: ${props => props.theme.font.family.primary};
    font-size: ${props => props.theme.font.size.S};
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${props => props.theme.color.primary};
  }
`;
