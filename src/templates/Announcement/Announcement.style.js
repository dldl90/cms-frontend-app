import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

export const UnsubscribeWrapper = styled.div`
  min-height: 550px;
`;

export const RichTextEditorWrapper = styled.div`
  max-width: 550px;
  margin: 0 auto;
`;

export const InfoHeading = styled.h1`
  color: ${props => props.theme.color.accentDarker};
  font-family: ${props => props.theme.font.family.secondary};
  font-size: ${props => props.theme.font.size.XL};
  line-height: normal;
  font-weight: 400;
  margin: 30px auto;
  text-transform: uppercase;
  text-align: center;
  -webkit-font-smoothing: antialiased;

  ${media.tablet`
    font-size: 32px;
  `}

  ${media.desktop`
    font-size: 44px;
    line-height: 55px;
    margin: 80px 0 31px 0;
  `}
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: ${props => `${props.theme.space.M} 0`};
`;
