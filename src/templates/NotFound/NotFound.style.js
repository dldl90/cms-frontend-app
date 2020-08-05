import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: ${props => props.theme.space.L};
  margin: 0 auto;
  ${media.tablet`
    width: 760px;
  `}
`;

export const DropShadowCard = styled.div`
  background: none;
  ${media.tablet`
    box-sizing: content-box;
    width: auto;
    height: auto;
    margin-bottom: ${props => props.theme.space.XL};
    padding: ${props => props.theme.space.M};;
    box-shadow: 3px 3px 0 #d6d2ce;
    background: ${props => props.theme.color.ebb};
  `}
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CategoryBlock = styled.a`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: flex-start;
  width: 100%;
  text-decoration: none;
  border-bottom: 1px solid #ddd;
  background-color: #e9e8e8;

  > img {
    display: block;
    width: 88px;
    height: 88px;
    line-height: 0;
    margin-right: 10px;
  }

  > h3 {
    font-family: ${props => props.theme.font.family.primary};
    font-size: 14px;
    line-height: 88px;
    text-align: left;
    text-decoration: none;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    > span {
      color: #555;
      text-decoration: none;
    }
  }

  ${media.tablet`
    display: block;
    width: 25%;
    border-bottom: 0;
    background-color: none;
    position: relative;

    > img {
      display: block;
      width: 100%;
      height: auto;
      line-height: 0;
    }

    > h3 {
      position: absolute;
      bottom: 0;
      box-sizing: border-box;
      display: block;
      width: 100%;
      padding: 5px;
      margin: 0;
      font-size: 13px;
      line-height: normal;
      text-align: center;
      text-decoration: none;

      > span {
        display: block;
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 5px;
        background-color: white;
        color: #555;
      }
    }
    &:hover > h3 > span {
      background-color: #0ca6d4;
      color: white;
    }
  `}
`;
