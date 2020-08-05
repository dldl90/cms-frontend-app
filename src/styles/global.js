import styled, { css } from 'styled-components';
import { media } from './breakpoints';

export const Heading = styled.h2`
  font-family: ${props => props.theme.font.family.secondary};
  font-size: ${props => props.theme.font.size.L};
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.color.primaryDark};
  margin: 0;
  padding-top: ${props => props.theme.space.XXL};
  padding-bottom: ${props => props.theme.space.XXL};
  -webkit-font-smoothing: antialiased;

  ${props =>
    props.withSubHeading &&
    css`
      padding-bottom: 0;
    `}

  ${props =>
    props.customHeading &&
    css`
      padding-top: ${props.theme.space.XL};
      padding-bottom: ${props.theme.space.L};
    `}
`;

export const SubTitle = styled.p`
  font-size: ${props => props.theme.font.size.S};
  font-weight: 400;
  font-style: italic;
  text-align: center;
  color: ${props => (props.negativeColours ? props.theme.color.white : props.theme.color.primary)};
  font-family: ${props => props.theme.font.family.tertiary};
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
`;

export const InfoHeading = styled.h1`
  color: ${props => props.theme.color.accentDarkest};
  font-family: ${props => props.theme.font.family.secondary};
  font-size: ${props => props.theme.font.size.XL};
  line-height: normal;
  font-weight: 400;
  margin: ${props => `${props.theme.space.L} 0 ${props.theme.space.M} 0`};
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;

  ${media.tablet`
    font-size: ${props => props.theme.font.size.XXL};
  `}

  ${media.desktop`
  font-size: ${props => props.theme.font.size.XXXL};
    line-height: 40px;
  `}
`;

export const InfoHeadingSubTitle = styled.h2`
  color: ${props => props.theme.color.accentDarkest};
  font-family: ${props => props.theme.font.family.secondary};
  font-size: ${props => props.theme.font.size.XL};
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  margin: 0 0 16px 0;
  padding: 0;

  ${media.tablet`
    font-size: ${props => props.theme.font.size.XL};
  `}

  ${media.desktop`
  font-size: ${props => props.theme.font.size.XL};
  `}
`;

export const Title = styled.h3`
  font-family: ${props => props.theme.font.family.primary};
  font-size: ${props => props.theme.font.size.M};
  text-align: center;
  color: ${props =>
    props.negativeColours ? props.theme.color.white : props.theme.color.primaryDarker};
  margin-bottom: ${props => props.theme.space.S};
  margin-top: ${({ topMargin }) => topMargin || '0'};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
`;

export const BorderLine = styled.span`
  display: block;
  height: ${props => props.theme.space.L};
  margin: 0 ${({ noGutter }) => (noGutter ? '0' : '-15px')};
  background: ${props => props.theme.color.background};

  ${media.tablet`
    display: none;
  `}
`;

export const Section = styled.section`
  padding: 0 0 ${props => props.theme.space.L} 0;
  display: ${({ isHidden }) => isHidden && 'none'};

  ${media.tablet`
    padding-bottom: ${props => (props.doublePadding ? '65px' : props.theme.space.L)};
  `}
`;

export const BorderWrapper = styled.div`
  ${media.tablet`
    border-top: 1px solid #eeeeee;
  `}
`;
