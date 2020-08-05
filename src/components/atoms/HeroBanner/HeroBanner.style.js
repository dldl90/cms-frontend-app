import styled, { css } from 'styled-components';
import { media } from '../../../styles/breakpoints';

const alignmentOptions = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
};

export const ImageWrapper = styled.div`
  position: relative;
  ${({ backgroundImage, backgroundColor }) => {
    if (backgroundImage) {
      return css`
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-image: url(${backgroundImage.mobile
          ? backgroundImage.mobile
          : backgroundImage.desktop});
      `;
    }
    return `background: ${backgroundColor}`;
  }};
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  justify-content: ${({ alignment }) => alignmentOptions[alignment]};
  align-items: center;
  z-index: 0;

  ${media.tablet`
    background-image: ${({ backgroundImage }) =>
      backgroundImage && `url(${backgroundImage.desktop})`};
  `}
`;

export const HeroContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  z-index: 1;

  ${media.tablet`
    ${({ alignment }) =>
      alignment !== 'full width' &&
      css`
        width: 50%;
      `}
  `}

  ${({ backgroundImage, color, transparency }) =>
    backgroundImage &&
    css`
      &:before {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        background: ${color || 'transparent'};
        opacity: 0.5;
        z-index: -1;

        ${media.tablet`
          opacity: ${transparency ? 0.5 : 1};
        `}
      }
    `}
`;

export const HeroContent = styled.div`
  z-index: 1;
  height: 100%;
  min-height: ${({ noImage }) => noImage && '359px'};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: ${({ theme }) => theme.space.L};
  z-index: 2;

  > img {
    max-width: 100%;
    margin: 16px 0;
  }
`;
