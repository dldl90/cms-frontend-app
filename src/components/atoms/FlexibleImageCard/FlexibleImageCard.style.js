import styled from 'styled-components';
import { CardHeader } from '../CardText/CardText';

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  background: ${({ theme }) => theme.color.white};
  border: ${({ withBorder, theme }) => withBorder && `1px solid ${theme.color.primaryLight}`};
  cursor: ${({ isLink }) => isLink && 'pointer'};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius};

  :hover {
    ${CardHeader} {
      text-decoration: ${({ isLink }) => isLink && 'underline'};
    }
  }
`;

export const Picture = styled.picture`
  ${Wrapper}:hover & {
    opacity: ${({ isLink }) => isLink && 0.9};
  }
`;
