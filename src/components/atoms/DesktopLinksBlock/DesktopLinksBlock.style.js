import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';

export const Wrapper = styled.div`
  padding: 24px 16px;
  margin: 0 16px 0 0;
  background: #f6f5f3;
  border: 1px solid #d6d2ce;

  ${media.desktop`
    padding-left: 24px;
    padding-right: 24px;
  `}
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.font.family.secondary};
  font-size: 20px;
  text-transform: uppercase;
  font-weight: normal;
  color: #333;
  margin: 0;
`;

export const SidebarLinks = styled.ul`
  list-style: none;
  margin: 16px 0 0;
  padding: 0;
`;

export const SidebarLink = styled.li`
  margin-top: 8px;
`;

export const Link = styled.a`
  font-family: ${props => props.theme.font.family.secondary};
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};

  font-size: 14px;
  text-decoration: none;
  color: #414141;

  :hover {
    color: #0ca6d4;
  }
`;
