import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  VideoBlockWrapper,
  VideoWrapper,
  VideoPlayer,
  VideoThumbnail,
  IframeStyle,
} from './VideoBlock.style';
import { TextWrapper, CardHeader, CardCopy } from '../CardText/CardText';

const YoutubeIframe = ({ youtube }) => {
  return (
    <IframeStyle
      title={youtube}
      src={`//www.youtube.com/embed/${youtube}?rel=0&autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&showinfo=0`}
      frameBorder="0"
      allowFullScreen=""
    />
  );
};

YoutubeIframe.propTypes = {
  youtube: PropTypes.string.isRequired,
};

export class VideoBlock extends Component {
  static defaultProps = {
    header: '',
    copy: '',
  };

  static propTypes = {
    youtubeId: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    header: PropTypes.string,
    copy: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      renderVideo: false,
    };
  }

  handleEvent = () => {
    const { renderVideo } = this.state;
    const currentState = renderVideo;
    this.setState({ renderVideo: !currentState });
  };

  render() {
    const { youtubeId, thumbnail, header, copy } = this.props;

    const { renderVideo } = this.state;
    return (
      <VideoBlockWrapper>
        <VideoWrapper>
          <VideoPlayer className="youtube-container" data-id={youtubeId}>
            {renderVideo === true ? (
              <YoutubeIframe youtube={youtubeId} />
            ) : (
              <VideoThumbnail
                className="videocover"
                src={thumbnail}
                onMouseDown={this.handleEvent}
              />
            )}
          </VideoPlayer>
          <TextWrapper hasContent={header || copy}>
            {header && <CardHeader hasCopy={!!copy}>{header}</CardHeader>}
            {copy && <CardCopy>{copy}</CardCopy>}
          </TextWrapper>
        </VideoWrapper>
      </VideoBlockWrapper>
    );
  }
}

export default VideoBlock;
