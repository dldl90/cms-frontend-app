import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';

export const CopyWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: ${props => props.theme.space.M};
  ${media.tablet`
    margin-bottom: ${props => props.theme.space.L};
  `}
`;

export const SubHeading = styled.h2`
  font-family: ${props => props.theme.font.family.primary};
  font-size: ${props => props.theme.font.size.M};
  font-style: normal;
  line-height: 1.1;
  color: ${props => props.theme.color.primaryDark};
  margin: 0 0 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${media.tablet`
    font-size: ${props => props.theme.font.size.XL};
    color: ${props => props.theme.color.accentDarkest};
  `}
`;

export const CopyText = styled.p`
  font-family: ${props => props.theme.font.family.primary};
  font-size: ${props => props.theme.font.size.XS};
  line-height: 16px;
  margin-bottom: 0;
  color: #555;
`;
