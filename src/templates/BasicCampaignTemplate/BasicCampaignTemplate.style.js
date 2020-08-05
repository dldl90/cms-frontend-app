import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

export const Heading = styled.div`
  margin: 30px auto 24px;
  ${media.tablet`
    max-width: 50%;
    flex-direction: row;
    margin: 50px auto;
  `};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1060px;
  margin: 0;
  ${media.tablet`
    flex-direction: row;
  `}
`;

export const ContentImg = styled.div`
  ${media.tablet`
    padding: 8px 16px 0 0;
    width: 329px;
  `}
`;

export const ButtonWrapper = styled.div`
  margin: ${props => `${props.theme.space.M} 0`};
`;

export const ContentBlock = styled.div`
  display: block;
  padding: 0;
  margin-top: 20px;
  text-align: left;
  ${media.tablet`{
    width: 60%;
    margin-top: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}
`;
