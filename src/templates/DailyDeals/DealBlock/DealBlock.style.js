import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';

export const SaleRow = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-bottom: 12px;
  padding-top: 20px;
  line-height: 0;
  background-color: ${props => props.theme.color.white};
  ${media.tablet`
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
    flex-direction: row;

    &:nth-child(odd) {
      flex-direction: row-reverse;
    }

  `}
`;

export const ThumbnailWrapper = styled.a`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  line-height: 0;
  overflow: hidden;
  order: 2;
  margin: 0;
  padding: 0;
  position: relative;
  text-decoration: none;
  > div img {
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: auto;
    padding: 0 40px;
  }

  ${media.tablet`
    width: 50%;
    height: auto;
    margin: 0;
    position: relative;
    > div img { padding: 0; }
  `}
`;

export const ProductDetails = styled.div`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: auto;
  padding: 12px 40px 18px;
  margin-bottom: 0;
  backdrop-filter: blur(25px);
  background-color: rgba(255, 255, 255, 0.65);

  > p {
    font-family: ${props => props.theme.font.family.primary};
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 18px;
    letter-spacing: normal;
    margin: 0;
    color: ${props => props.theme.color.primaryDark};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    > strong {
      font-family: ${props => props.theme.font.family.secondary};
    }
  }

  ${media.tablet`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 0;
    margin-right: auto;
    margin-left: auto;
    padding: 12px 16px;

    > p {
      font-size: 16px;
      line-height: 20px;
    }
  `}
`;

export const ButtonMobile = styled.span`
  display: block;
  padding: 12px 17px;
  border-radius: 3px;
  border: solid 1px ${props => props.theme.color.accent};

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
  margin: 0 20px 24px;

  ${media.tablet`
    display: none;
  `}
`;

export const SaleBadge = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 120px;
  opacity: 0.9;
  background-color: #c20c15;
  text-align: center;
  position: absolute;
  top: 15px;
  right: 54px;
  z-index: 0;
  > span {
    position: absolute;
    top: 12px;
    left: 0;
    right: 0;
    opacity: 1;
    margin-left: auto;
    margin-right: auto;
    font-family: ${props => props.theme.font.family.secondary};
    font-size: 14px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 14px;
    letter-spacing: normal;
    color: #ffffff;
    text-align: center;
    text-transform: uppercase;
  }
  ${media.tablet`
    width: 70px;
    height: 70px;
    right: 25px;
    top: 16px;
    > span {
      font-size: 18px;
      line-height: 18px;
      top: 18px;
    }
  `}
`;

export const SaleColor = styled.span`
  color: #c20c15;
`;

export const QuoteWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  padding-right: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  order: 1;
  ${media.tablet`
    width: 50%;
    height: auto;
    padding: 30px;
  `}
`;

export const Quote = styled.div`
  overflow: hidden;
  display: block;
  width: auto;
  max-width: 330px;
  height: auto;
  border-left: 1px solid ${props => props.theme.color.primary};
  margin-bottom: 16px;
  padding-left: 10px;
  padding-right: 25px;

  > h2 {
    font-family: ${props => props.theme.font.family.secondary};
    font-size: ${props => props.theme.font.size.M};
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    text-align: left;
    text-decoration: none;
    line-height: 24px;
    letter-spacing: normal;
    color: ${props => props.theme.color.primary};
    margin: 0 0 10px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  > p {
    font-family: ${props => props.theme.font.family.primary};
    font-size: ${props => props.theme.font.size.XS};
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    text-align: left;
    text-decoration: none;
    line-height: normal;
    letter-spacing: normal;
    color: ${props => props.theme.color.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
  }

  > a {
    display: none;
  }

  ${media.tablet`
    text-align: left;
    padding-left: 20px;
    margin-bottom: 0;
    > h2 {
      font-size: ${props => props.theme.font.size.XL};
        margin: 0 0 16px;
    }

    > p {
      font-size: ${props => props.theme.font.size.S};
      margin-bottom: 24px;
    }
    > a {
      display: inline-block;
      padding: 12px 17px;
      border-radius: 3px;
      border: solid 1px ${props => props.theme.color.accent};

      font-family: ${props => props.theme.font.family.primary};
      font-size:  ${props => props.theme.font.size.XS};
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: 14px;
      letter-spacing: normal;
      text-decoration: none;
      color: ${props => props.theme.color.accent};
    }
  `}
`;

export const CopyWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const IndexQuote = styled.span`
  font-family: ${props => props.theme.font.family.secondary};
  width: 40px;
  text-align: right;
  font-size: 32px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 30px;
  letter-spacing: normal;
  color: ${props => props.theme.color.primary};
  float: left;
  margin-right: 10px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${media.tablet`
    margin-right: 20px;
    font-size: 48px;
    line-height: 46px;
  `}
`;
