import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { media } from './breakpoints';

const setBreakpointStyles = (styleProp, breakpoints) => {
  return Object.keys(breakpoints).map(breakpoint => {
    const style = breakpoints[breakpoint];
    return css`
      ${media[breakpoint]`
        ${styleProp}: ${style}
      `}
    `;
  });
};

const setWidth = columns => {
  return Object.keys(columns).map(breakpoint => {
    const columnWidth = (columns[breakpoint] / 12) * 100;
    const hideColumn = columns[breakpoint] === 0;

    return css`
      ${media[breakpoint]`
        display: ${hideColumn ? 'none' : 'flex'}
        width: ${columnWidth}%;
      `}
    `;
  });
};

export const Container = styled.div`
  max-width: ${props => (props.wide ? '1040px' : '960px')};
  padding: ${props => (props.noPadding ? 0 : '20px 15px 30px')};
  margin: 0 auto;
  min-height: 300px;
`;

const setJustify = ({ justify, noGutter }) => {
  if (justify) {
    return css`
      justify-content: ${justify};
    `;
  }
  if (!noGutter) {
    return css`
      justify-content: space-between;
    `;
  }
  return null;
};

export const ContainerFluid = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  ${({ align }) => align && `align-items: ${align};`}
  ${props => setJustify(props)}

  ${media.tablet`
  flex-wrap: nowrap`};
`;

Row.propTypes = {
  align: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
  noGutter: PropTypes.bool,
};

export const Column = styled.div`
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ columns }) => columns && setWidth(columns)}
  ${({ order }) => order && setBreakpointStyles('order', order)}
`;

const allowedGridValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

Column.propTypes = {
  columns: PropTypes.shape({
    phone: PropTypes.oneOf(allowedGridValues),
    tablet: PropTypes.oneOf(allowedGridValues),
    desktop: PropTypes.oneOf(allowedGridValues),
  }),
  direction: PropTypes.oneOf(['row', 'column']),
  order: PropTypes.shape({
    phone: PropTypes.number,
    tablet: PropTypes.number,
    desktop: PropTypes.number,
  }),
};
