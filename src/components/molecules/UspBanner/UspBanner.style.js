import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  background: ${props => props.theme.color.background};
  padding: 10px 0 0;
  text-align: center;
  border-radius: ${props => props.theme.borderRadius};
  min-height: 60px;

  @media (min-width: 769px) {
    padding: 10px 10px 10px 5px;
  }
`;

const DesktopView = `
  visibility: visible;

  @media (max-width: 768px) {
    display: none;
    visibility: hidden;
  }
`;

const MobileView = `
  visibility: visible;
  display: block;

  @media (min-width: 769px) {
    display: none;
    visibility: hidden;
  }
`;

export const ResponsiveView = styled.div`
  display: flex;
  align-content: space-around;
  justify-content: space-between;
  padding: 0 12px;

  ${props => (props.desktop ? DesktopView : null)}
  ${props => (props.mobile ? MobileView : null)}
`;

export const SlideWrapper = styled.div`
  outline: none;
`;

export const Slide = styled.div`
  display: flex;
  align-content: space-around;
  justify-content: center;
  padding: 0 10px;

  @media (min-width: 769px) {
    justify-content: space-between;
  }
`;

export const Icon = styled.div`
  width: 41px;
  margin-right: 10px;
`;

export const Title = styled.p`
  font-family: ${props => props.theme.font.family.primary};
  font-size: ${props => props.theme.font.size.XS};
  line-height: ${props => props.theme.font.size.XS};
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0.3px;
  text-align: left;
  color: ${props => props.theme.color.primaryDark};
  margin-bottom: 0;
  margin-top: 0;
  -webkit-font-smoothing: antialiased;
`;

export const Copy = styled.p`
  font-family: ${props => props.theme.font.family.primary};
  font-size: ${props => props.theme.font.size.XXS};
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: ${props => props.theme.font.size.XXS};
  letter-spacing: normal;
  color: ${props => props.theme.color.primary};
  text-align: left;
  margin: 4px 0 0;
  -webkit-font-smoothing: antialiased;
`;

export const TextBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  padding: 0;
`;
