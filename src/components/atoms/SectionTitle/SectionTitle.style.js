import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';

export const StyledSectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.family.secondary};
  -webkit-font-smoothing: antialiased;
  font-size: ${({ theme }) => theme.font.size.L};
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;

  &:after,
  &:before {
    content: '';
    border-top: ${({ theme }) => `1px solid ${theme.color.primaryLight}`};
    margin: 0 20px 0 0;
    flex: 1 0 20px;
  }

  &:after {
    margin: 0 0 0 20px;
  }

  ${media.tablet`
    font-size: ${({ theme }) => theme.font.size.XL};
  `}
`;

export const Title = styled.span`
  max-width: 18em;
`;
