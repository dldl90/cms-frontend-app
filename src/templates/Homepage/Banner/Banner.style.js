import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';

export const BannerLink = styled.a`
  text-decoration: none;
  display: block;

  :hover {
    opacity: 0.9;
  }
`;

export const BannerImage = styled.div`
  display: block;
  width: 100%;
  height: auto;
  margin: 30px 0 0;

  > img {
    width: 100%;
    height: auto;

    :first-child {
      display: none;
    }
    :last-child {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  ${media.tablet`
    margin: 0;

    > img:first-child {
      display: block;
    }
    > img:last-child {
      display: none;
    }
  `}
`;

export const BannerHeading = styled.div`
  width: 100%;
  flex-direction: column;
  background: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: center;
  padding: 20px;
  border-radius: 0 0 3px 3px;

  ${media.tablet`
    padding: 20px 0 18px;
    border-radius: 0;
  `}
`;
