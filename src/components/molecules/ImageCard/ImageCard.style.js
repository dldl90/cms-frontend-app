import styled from 'styled-components';

import { media } from '../../../styles/breakpoints';

export const CardLink = styled.a`
  display: block;
  border: ${({ plainStyle }) => (plainStyle ? '0' : '1px solid #e0e0e0')};
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  text-decoration: none;
  outline: none;
  margin: 0 5px 10px;
  color: ${props => props.theme.color.primaryDark};
  :hover {
    opacity: 0.9;
    text-decoration: underline;
  }

  > img {
    border-radius: ${({ plainStyle }) => (plainStyle ? '3px' : '0')};
  }

  ${media.tablet`
    margin: 0 10px;

    a:hover {
      opacity: 1;
    }`}
`;

export const CardTitle = styled.p`
  font-family: ${props => props.theme.font.family.primary};
  color: ${props => props.theme.color.primaryDark};
  display: ${({ plainStyle }) => (plainStyle ? 'block' : 'flex')};
  align-items: center;
  justify-content: center;
  height: ${({ plainStyle }) => (plainStyle ? 'auto' : '50px')};
  padding: ${({ plainStyle }) => (plainStyle ? '10px 0' : '0 10px')};
  margin: 0;
  text-align: ${({ plainStyle }) => (plainStyle ? 'left' : 'center')};
  -webkit-font-smoothing: antialiased;
  font-size: ${({ plainStyle }) => (plainStyle ? '16px' : '14px')};
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-transform: ${({ plainStyle }) => (plainStyle ? 'lowercase' : 'uppercase')};
  line-height: normal;

  ${media.tablet`
    font-size: 16px;
    height: ${({ plainStyle }) => (plainStyle ? 'auto' : '60px')};
  `}
`;
