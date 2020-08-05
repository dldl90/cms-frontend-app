import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';

export const WrapperBox = styled.div`
  display: block;
  width: auto;
  height: auto;
  margin: 20px 18px;
  padding: 35px 23px;
  border: solid 3px ${props => props.theme.color.accent};
  text-align: center;
  ${media.tablet`
    padding: 45px 35px;
  `}

  ${media.desktop`
    max-width: 650px;
    margin:  48px auto;
  `}
`;

export const Heading = styled.h2`
  position: relative;
  display: inline-block;
  font-size: ${props => props.theme.font.size.L};
  font-family: ${props => props.theme.font.family.secondary};
  color: ${props => props.theme.color.primary};
  text-transform: uppercase;
  margin: 0 auto 14px;
  padding-bottom: 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &:after {
    position: absolute;
    content: '';
    display: block;
    bottom: 0px;
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    width: 52.1px;
    height: 3px;
    background-color: ${props => props.theme.color.accent};
  }

  ${media.tablet`
    height: auto;
    font-size: ${props => props.theme.font.size.XXL};
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.13;
    letter-spacing: normal;
    text-align: center;
    text-transform: uppercase;
    margin: 0 auto;
    padding-bottom: 24px;
  `}
`;

export const SubHeading = styled.p`
  font-family: ${props => props.theme.font.family.primary};
  font-size: 14px;
  line-height: 19px;
  margin: 0px 0 24px;
  color: ${props => props.theme.color.primary};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${media.tablet`
    font-size: ${props => props.theme.font.size.L};
    line-height: 1.22;
    margin: 32px 0;
  `}
`;

export const ButtonsWrapper = styled.div`
  display: block;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const OutlineButton = styled.a`
  display: block;
  border-radius: 3px;
  border: solid 1px ${props => props.theme.color.accent};
  padding: 13px 22px;
  margin: 0 0 12px;
  font-family: ${props => props.theme.font.family.primary};
  font-size: ${props => props.theme.font.size.XS};
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 14px;
  letter-spacing: normal;
  text-decoration: none;
  text-align: center;
  color: ${props => props.theme.color.accent};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  :last-child {
    margin: 0;
  }

  ${media.tablet`
    display: inline-block;
    margin: 0 10px;
    font-size: ${props => props.theme.font.size.S};

    :last-child  {
      margin: 0 10px;
    }
  `}
`;
