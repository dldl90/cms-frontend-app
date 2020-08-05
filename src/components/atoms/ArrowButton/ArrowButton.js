/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components';

const StyledArrowButton = styled.button`
  & .slick-disabled {
    opacity: 0.5;
  }

  ${({ shouldRotate, translate }) => {
    const translateValue = translate ? `translate(0, ${translate}%)` : 'translate(0, -100%)';
    const rotateValue = shouldRotate ? 'rotate(180deg) !important' : undefined;
    return css`
      transform: ${translateValue} ${rotateValue};
    `;
  }}
`;

const ArrowButton = ({
  rotate = false,
  translate = '-200',
  className = '',
  onClick = () => {},
}) => {
  return (
    <StyledArrowButton
      className={className}
      shouldRotate={rotate}
      translate={translate}
      onClick={onClick}
    >
      <svg width="13" height="22" viewBox="0 0 13 22">
        <g fill="none" fillRule="evenodd">
          <path
            fill="#555"
            fillRule="nonzero"
            d="M.75 19.032L8.322 11 .75 2.967 3.081.5 13 11 3.081 21.5z"
          />
          <path d="M-15-10h42v42h-42z" />
        </g>
      </svg>
    </StyledArrowButton>
  );
};

export default ArrowButton;
