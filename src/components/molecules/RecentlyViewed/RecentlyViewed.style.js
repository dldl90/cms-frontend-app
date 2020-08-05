import styled, { keyframes } from 'styled-components';
import { media } from '../../../styles/breakpoints';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const FadeIn = styled.div`
  animation: ${fadeIn} 3s;
`;

// Override center alignment when there are less than 6 slides
// https://github.com/kenwheeler/slick/pull/2966#issuecomment-326016232
export const SliderOverride = styled.div`
  overflow: hidden;

  & .slick-slider {
    padding-right: 50px;
  }

  & .slick-list {
    overflow: visible;
  }

  & .slick-track {
    margin: 0;
  }

  ${media.tablet`
    overflow: visible;

    & .slick-slider {
      padding-right: 0;
    }

    & .slick-list {
      overflow: hidden;
    }
  `}
`;
