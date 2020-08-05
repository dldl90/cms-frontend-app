import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';

export const HeroBannerLink = styled.a`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  text-decoration: none;
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;

  ${media.tablet`
    flex-direction: row;
  `}
`;

export const HeroBannerButton = styled.span`
  font-family: ${props => props.theme.font.family.secondary};
  font-weight: 600;
  font-size: 14px;
  background: ${({ bgColor }) => bgColor};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.color.white};
  padding: 18px 25px;
  letter-spacing: normal;
  font-style: normal;
  font-stretch: normal;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;

  ${HeroBannerLink}:hover & {
    opacity: 0.9;
  }
`;

export const HeroBannerPromo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  width: 100%;
  background: ${({ bgColor }) => bgColor};

  > img {
    max-width: 100%;
    height: auto;
    margin: 0 auto ${props => props.theme.space.L};
  }
`;

export const TandCs = styled.div`
  width: 100%;
  text-align: center;
  > a {
    color: #fff;
    font-family: ${props => props.theme.font.family.secondary};
    font-size: ${props => props.theme.font.size.XXS};
    text-decoration: none;
  }
`;

export const HeroBannerImage = styled.div`
  background-image: url('${props => props.bgMobile}');
  background-repeat: none;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 60vw;

  ${media.tablet`
    background-image: url('${props => props.bgDesktop}');
    height: 300px;
  `}
`;

export const TitleImageDesktop = styled.img`
  display: none;

  ${media.tablet`
    display: block;
  `}
`;

export const TitleImageMobile = styled.img`
  ${media.tablet`
    display: none;
  `}
`;
