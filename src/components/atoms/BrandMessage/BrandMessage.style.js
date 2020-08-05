import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1060px;
  margin: 0 -10px;

  ${media.tablet`
    flex-direction: row;
  `}
`;

export const ContentImg = styled.div`
  margin: 0 auto;
  padding: 5px 10px 0;
  min-height: 100%;

  ${media.tablet`
    width: 37%;
  `}
`;

export const ButtonWrapper = styled.div`
  margin: ${props => `${props.theme.space.M} 0`};
`;

export const ContentBlock = styled.div`
  display: block;
  margin-top: 20px;
  padding: 0 10px;
  text-align: left;

  ${media.tablet`{
    width: 63%;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}
`;
