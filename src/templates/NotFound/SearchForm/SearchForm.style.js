import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';

export const Form = styled.form`
  display: block;
  width: 100%;
  height: auto;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 3px;
  margin-bottom: ${props => props.theme.space.M};
  ${media.tablet`
    flex-wrap: no-wrap;
    height: 41px;
    margin-bottom: 0px;
  `}
`;

export const SearchInput = styled.input`
  order: 1;
  flex-grow: 1;
  width: auto;
  height: 39px;
  margin: 0 15px 10px 0;
  padding: 0 10px;
  border: 1px solid ${props => props.theme.color.accentLightest};
  border-radius: 3px;
  font-size: 14px;
  color: ${props => props.theme.color.primary};
  box-shadow: none;
  background-color: #fff;

  ${media.tablet`
    flex-grow: 0;
    width: 206px;
    margin: 0;
    border-radius: 0;
    border-top: 1px solid ${props => props.theme.color.accentLightest};
    border-left: 1px solid ${props => props.theme.color.accentLightest};
    border-bottom: 1px solid ${props => props.theme.color.accentLightest};
    border-right: 0;
    background: white;
  `}

  &:focus {
    outline: none;
  }
`;

export const DepartmentSelectWrapper = styled.div`
  order: 3;
  width: 100%;

  box-shadow: inset 0 0 1px 0 rgba(0, 0, 0, 0.26);
  background-color: #fff;

  position: relative;

  ${media.tablet`
    order: 2;
    width: 150px;
    height: 39px;
    padding-right: 0;
    margin-right: 8px;
    border: 1px solid ${props => props.theme.color.accentLightest};
    background-position: 100%;
    background-size: 12px 12px;
  `}
`;

export const DepartmentSelect = styled.select`
  width: 100%;
  height: 38px;
  margin: 0;
  padding: 0 9px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  background-color: rgb(248, 248, 248);
  color: ${props => props.theme.color.suvaGrey};
  line-height: 20px;
  font-size: 14px;
  vertical-align: middle;
  ${media.tablet`

    width: 146px;
    height: 41px;
    margin: 0;
    padding-right: 0;
    background-color: transparent;
    color: ${props => props.theme.color.suvaGrey};
    border: none;
    outline: none;
    background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: window;
    line-height: 20px;
  `}
`;

export const Select = styled.div`
  display: none;
  ${media.desktop`
    display: block;
    position: absolute;
    right: 10px;
    top: 10px;
    height: 5px;
    width: 10px;
    pointer-events: none;
  `}
`;

export const SubmitButton = styled.input`
  order: 2;
  width: 87px;
  margin-bottom: 10px;
  margin-top: 1px;
  border: 1px solid #056582;
  box-shadow: inset 0 1px 0 #3ab4d9, 0 1px 1px rgba(0, 0, 0, 0.3);
  background-color: #0a89af;
  background-repeat: no-repeat;
  filter: none;
  color: #fff;
  padding: 10px 16px 8px;
  font-size: 14px;
  border-radius: 5px;
  line-height: 18px;
  height: 38px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  text-transform: uppercase;
  font-family: ${props => props.theme.font.family.secondary};

  &:hover {
    opacity: 0.95;
    color: white;
    background-color: #0b9bc6;
    outline: none;
  }
  &:active {
    outline: none;
    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }
  &:focus {
    outline: none;
  }

  ${media.desktop`
    order: 3;
  `}
`;
