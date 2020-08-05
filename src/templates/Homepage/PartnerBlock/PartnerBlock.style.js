import styled from 'styled-components';
import { SubTitle } from '../../../styles/global';
import { media } from '../../../styles/breakpoints';

export const PartnerSubTitle = styled(SubTitle)`
  margin: 6px 0 50px 0;
  color: ${props => props.theme.color.primary};
`;

export const PartnersRow = styled.div`
  margin: 0 -10px;
`;

export const PartnersBlock = styled.div`
  margin: 0 12px 30px;
  width: 100%;

  :last-child {
    margin-bottom: 0;
  }

  ${media.tablet`
    width: 100%;
    margin: 0 12px 0;
  `}
`;
export const PartnersImages = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  display: flex;
`;

export const PartnersColumn = styled.div`
  margin-top: 1px;
  margin-left: 0px;
  width: 100%;

  ${media.tablet`


    margin-top: 0px;
    margin-left: 2px;

  `}
`;

export const PartnersLargeImage = styled.a`
  display: block;
  width: 100%;
  height: 66vw;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('${props => props.bgMobile || ''}');
  overflow: hidden;

  ${media.tablet`
    background-image: url('${props => props.bgDesktop || ''}');
    height: 330px;

    :hover {
      opacity: 0.9;
    }
  `}

  > span {
    position: absolute;
    width: 0;
    height: 0;
    left: -99999px;
    overflow: hidden;
  }
`;

export const PartnersSmallImage = styled.a`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('${props => props.background || ''}');
  background-position: center;
  width: 50%;
  height: 44vw;
  overflow: hidden;

  :hover {
    opacity: 1;
  }
 

  ${media.tablet`
    width: 100%;
    height: 164px;
    
    + a {
      margin-top: 2px;
      margin-left: 0px;
    }

    :hover {
      opacity: 0.9;
    }
  }

  > span {
    position: absolute;
    width: 0;
    height: 0;
    left: -99999px;
    overflow: hidden;
  }
`}`;
