import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';
import { color } from '../../../styles/noths.theme';

export const Wrapper = styled.div`
  margin-left: -15px;
  margin-right: -15px;

  ${media.tablet`
  display: none;
`}
`;

export const NavWrapper = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  padding: 22px 8px;
  box-sizing: border-box;
  background: #efefef;
`;

export const NavPill = styled.a`
  display: inline-block;
  background: ${({ selected }) => (selected ? '#939393' : '#00a3eb')};
  color: #fff;
  font-family: ${color.accent};
  font-size: 13px;
  line-height: 14px;
  padding: 11px 20px;
  border-radius: 18px;
  margin: 0 16px 0 0;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
`;
