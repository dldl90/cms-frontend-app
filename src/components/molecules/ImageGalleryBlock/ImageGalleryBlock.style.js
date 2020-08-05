import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';

export const Wrapper = styled.div`
  max-width: 100%;
  margin-top: ${({ theme, isFirstCard }) => (isFirstCard ? 0 : theme.space.XS)};
  padding: ${({ theme }) => `${theme.space.L} ${theme.space.M} 0`};
  background: ${({ theme }) => theme.color.white};

  ${media.tablet`
    margin-top: 0;
    padding: ${({ theme }) => `${theme.space.M} ${theme.space.S} 0`}
`};
`;
