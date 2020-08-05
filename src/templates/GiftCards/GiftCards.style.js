import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  padding: ${props => props.theme.space.XL} 10px 70px;
  max-width: 700px;
  min-height: 500px;
  text-align: center;
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.font.family.secondary};
  font-size: ${props => props.theme.font.size.XXL};
  font-weight: 400;
  line-height: 1.20588em;
  text-transform: uppercase;
  margin-bottom: 0;
  color: ${props => props.theme.color.black};
`;

export const ButtonBlock = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin: 0 -5px;
  }
`;

export const Button = styled.a`
  font-family: ${props => props.theme.font.family.secondary};
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${props => props.theme.color.accentDark};
  line-height: 1.4em;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.color.white};
  display: block;
  width: 100%;
  padding: 15px;
  min-width: 88px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  text-transform: uppercase;
  margin: 10px 0px;
  text-decoration: none;
  cursor: pointer;
  border: none;

  :hover {
    opacity: 1;
    background-color: rgb(7, 110, 144);
  }

  @media (min-width: 768px) {
    margin: 5px;
  }
`;

export const SubTitle = styled.div`
  max-width: 238px;
  margin: 0 auto;
`;

export const Paragraph = styled.p`
  margin: 20px 0;
  line-height: 1.46429em;
  font-family: ${props => props.theme.font.family.secondary};
  font-size: ${props => props.theme.font.size.S};
  font-style: normal;
`;

export const MainImage = styled.div`
  margin: 30px 0;
`;
