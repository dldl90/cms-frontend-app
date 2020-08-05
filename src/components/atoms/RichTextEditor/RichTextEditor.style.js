import styled, { css } from 'styled-components';
import { media } from '../../../styles/breakpoints';

export const RichTextEditorStyle = styled.div`
  max-width: 100%;

  ${({ theme, smallText, copyColor }) => css`
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${copyColor || theme.color.primary};

    h2 {
      font-family: ${theme.font.family.secondary};
      font-size: ${theme.font.size.M};
      line-height: ${smallText ? 'normal' : '30px'};
      font-weight: 600;
      margin: 0;
    }

    h3 {
      font-family: ${theme.font.family.secondary};
      font-size: ${theme.font.size.S};
      margin: 16px 0;
      font-weight: 400;
    }

    p,
    li,
    table {
      font-family: ${smallText ? theme.font.family.primary : theme.font.family.secondary};
      font-size: ${smallText ? theme.font.size.XS : theme.font.size.S};
      line-height: ${smallText ? 'normal' : '24px'};
      margin: ${smallText ? '0px 0px 18px' : '0 0 10px 0'};
      font-weight: 400;
    }

    p:last-child {
      margin-bottom: 0;
    }

    a {
      color: #00a3eb;

      &:hover {
        color: ${theme.color.primaryDarker};
      }
    }

    .tandc {
      font-size: 12px;
      line-height: 14px;
      margin-bottom: 5px;
    }

    ul,
    ol {
      padding-left: 20px;
    }

    table {
      box-sizing: border-box;
      border-collapse: collapse;
      border-spacing: 0;
    }

    thead td {
      padding: 10px 5px;
      background: ${theme.color.primaryLighter};
      display: none;

      ${media.tablet`
        display: table-cell;
      `}
    }

    tbody tr td:first-child {
      background: ${theme.color.primaryLighter};
      ${media.tablet`
        background: none;
      `}
    }

    tbody tr:last-child td:last-child {
      border-bottom-width: 1px;
    }

    td {
      padding: 5px;
      vertical-align: middle;
      display: block;
      border-style: solid;
      border-color: ${theme.color.primaryLight};
      border-width: 1px 1px 0px 1px;

      ${media.tablet`
        display: table-cell;
        border-width: 1px;
      `}
    }

    .button {
      font-family: ${theme.font.family.primary};
      background-color: ${theme.color.cerulean};
      color: ${theme.color.white};
      text-transform: uppercase;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: auto;
      cursor: pointer;
      touch-action: manipulation;
      white-space: nowrap;
      text-decoration: none;
      letter-spacing: 0.8px;
      background-repeat: no-repeat;
      border-radius: 3px;
      box-sizing: border-box;
      padding: 0 18px;
      font-size: ${theme.font.size.S};
      line-height: ${theme.font.size.L};
      height: 47px;

      &:hover,
      &:focus,
      &:active {
        backface-visibility: hidden;
      }
      &:disabled {
        cursor: not-allowed;
        background: ${theme.color.silver};
        color: ${theme.color.silverChalice};
      }
      &::-moz-focus-inner {
        border: 0;
        padding: 0;
      }
    }
  `}
`;
