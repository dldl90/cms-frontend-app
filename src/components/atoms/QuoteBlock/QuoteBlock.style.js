import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';

export const BlockQuote = styled.blockquote`
  font-family: ${({ theme }) => theme.font.family.quote};
  -webkit-font-smoothing: antialiased;
  background: ${({ backgroundColor }) => backgroundColor};
  color: ${({ copyColor }) => copyColor};
  padding: ${({ theme }) => `${theme.space.L} ${theme.space.M}`};
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  quotes: '“' '”' '‘' '’';

  ${media.tablet`
    padding: ${({ theme }) => theme.space.XXL};
  `}
`;

export const Quote = styled.h3`
  font-size: ${({ theme }) => theme.font.size.L};
  color: ${({ copyColor }) => copyColor};
  margin: ${({ theme }) => theme.space.L};
  line-height: 1.3;
  font-weight: normal;
  text-align: center;

  ${media.tablet`
    font-size: ${({ theme }) => theme.font.size.XL};
    margin: ${({ theme }) => theme.space.L};
  `}
`;

export const QuoteWrapper = styled.div`
  max-width: 60em;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;

  &:before,
  &:after {
    font-weight: bold;
    line-height: 1;
    font-size: ${({ theme }) => theme.font.size.XXXL};
    color: ${props => props.quotationColor};
  }

  &:before {
    content: open-quote;
    align-self: flex-start;
  }

  &:after {
    content: close-quote;
    align-self: flex-end;
  }
`;

export const Author = styled.small`
  font-size: ${({ theme }) => theme.font.size.S};
`;

export const ImageWrapper = styled.div`
  max-width: 80px;
  min-height: 100%;

  ${media.tablet`
    max-width: 90px;
  `}
`;
