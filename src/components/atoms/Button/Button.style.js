import styled from 'styled-components';

export const BaseButton = styled.button`
  background-color: ${props => props.bgColor};
  border-radius: 4px;
  color: #fff;
  display: inline-block;
  width: auto;
  padding: 15px;
  font-size: 0.875rem;
  min-width: 88px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-weight: 500;
  font-family: 'NOTHS2', 'Helvetica Neue', 'HelveticaNeue', Arial, sans-serif;
  line-height: 1.4em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  border: none;
  :hover {
    opacity: 0.9;
  }
`;
