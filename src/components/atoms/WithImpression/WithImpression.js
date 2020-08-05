import React, { Component } from 'react';
import TrackVisibility from 'react-on-screen';
import PropTypes from 'prop-types';

export class ImpressionWrapper extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onImpression: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    const { onImpression } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    if (nextProps.isVisible && !this.props.isVisible) {
      onImpression();
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

const propTypes = {
  children: PropTypes.node.isRequired,
  onImpression: PropTypes.func.isRequired,
  once: PropTypes.bool,
  partialVisibility: PropTypes.bool,
};

const defaultProps = {
  once: false,
  partialVisibility: false,
};

const WithImpression = ({ children, onImpression, partialVisibility, once }) => (
  <TrackVisibility partialVisibility={partialVisibility} once={once}>
    {({ isVisible }) => (
      <ImpressionWrapper isVisible={isVisible} onImpression={onImpression}>
        {children}
      </ImpressionWrapper>
    )}
  </TrackVisibility>
);

WithImpression.propTypes = propTypes;
WithImpression.defaultProps = defaultProps;
export default WithImpression;
