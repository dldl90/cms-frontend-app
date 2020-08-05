import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

export const LinkBlock = styled.a`
  text-decoration: none;
  margin-top: ${props => props.theme.space.XL};

  ${media.tablet`
    opacity: 0.9;
  `}
`;

export const PageTitle = styled.h1`
  display: block;
  position: absolute;
  width: 1px;
  height: 1px;
  top: -99999px;
  left: -99999px;
`;

export const HeroCtaWrapper = styled.div`
  margin: 0 -5px;

  ${media.tablet`
    margin: 0 -10px;
  `}
`;

export const HeroCtaBlock = styled.div`
  display: flex;
  width: 50%;
  margin: 0 0 10px;
`;

export const CarouselWrapper = styled.div`
  margin: 0 -15px 10px;

  .slick-track {
    left: 10px;
  }
  ${media.tablet`
    margin: 0 -10px;

    .slick-track {
      left: 0px;
    }
  `}
`;

export const InfoSection = styled.div`
  max-width: 860px;
  margin: 0 auto;

  ${media.tablet`
    margin-top: ${props => props.theme.space.L};
  `}
`;
