import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

export const CustomBackground = styled.div`
  display: block;
  width: 100%;
  height: auto;
  background: ${props => props.theme.color.background};
  ${media.tablet`
    background-image: linear-gradient(to top, #ffffff, #f4f6f6);
  `}
`;

export const HeadingSection = styled.h2`
  display: none;
  ${media.tablet`
    position: relative;
    display: inline-block;
    height: 40px;
    font-family: ${props => props.theme.font.family.secondary};
    font-size: ${props => props.theme.font.size.XL};
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.13;
    letter-spacing: normal;
    color: ${props => props.theme.color.primary};
    text-align: center;
    text-transform: uppercase;
    margin: 24px auto;
    &:after {
      content: '';
      display: block;
      position absolute;
      bottom: 0px;
      right: 0;
      left: 0;
      margin-right: auto;
      margin-left: auto;
      width: 52.1px;
      height: 3px;
      background-color: #c8d6da;
    }
  `}
`;
