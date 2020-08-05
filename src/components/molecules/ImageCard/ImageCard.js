import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image } from '../../index';
import { CardLink, CardTitle } from './ImageCard.style';

export default class ImageCard extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
    link: PropTypes.string.isRequired,
    plainStyle: PropTypes.bool,
    trackGtmEvent: PropTypes.func,
  };

  static defaultProps = {
    alt: '',
    plainStyle: false,
    trackGtmEvent: () => {},
  };

  render() {
    const { title, link, image, alt, plainStyle, trackGtmEvent } = this.props;

    return (
      <CardLink key={title} href={link} plainStyle={plainStyle} onMouseDown={trackGtmEvent}>
        <Image src={image} alt={alt} fullWidth />
        {title && (
          <CardTitle plainStyle={plainStyle}>
            <span>{title}</span>
          </CardTitle>
        )}
      </CardLink>
    );
  }
}
