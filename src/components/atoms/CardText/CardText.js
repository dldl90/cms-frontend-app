import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';

export const TextWrapper = styled.div`
  text-align: ${({ alignText }) => alignText};
  margin: ${({ theme, hasContent }) => hasContent && `${theme.space.M} 0}`};
  -webkit-font-smoothing: antialiased;
`;

export const CardHeader = styled.h3`
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-size: ${({ theme }) => theme.font.size.M};
  text-transform: ${({ uppercaseHeader }) => uppercaseHeader && 'uppercase'};
  font-weight: ${({ lightText }) => lightText && 'normal'};
  color: ${({ theme }) => theme.color.primary};
  margin: ${({ hasCopy, theme }) => (hasCopy ? `0 0 ${theme.space.S}` : 0)};

  ${media.tablet`
    font-size: ${({ theme }) => theme.font.size.M};
  `};
`;

export const CardCopy = styled.p`
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size.S};
  color: ${({ theme }) => theme.color.primary};
  margin: 0;
  line-height: 1.3;
`;
