import React from 'react';
import PropTypes from 'prop-types';

import { Image, Video, RichTextEditor, Button } from '../../index';
import { trackCampaignClick } from './brandMessageTracking';
import { Row, ContentImg, ContentBlock, ButtonWrapper } from './BrandMessage.style';
import { color } from '../../../styles/noths.theme';

const renderMedia = assets => {
  const { fileType, filePath, altText } = assets;
  if (fileType === 'video/mp4') {
    return (
      <Video src={filePath} contentType={fileType} autoPlay="autoPlay" loop muted controls="" />
    );
  }

  return <Image src={filePath} alt={altText} />;
};

const BrandMessage = ({ pageTitle, copy, cta, media }) => {
  return (
    <Row>
      <ContentImg>{renderMedia(media)}</ContentImg>

      <ContentBlock>
        <RichTextEditor html={copy} copyColor={color.primary} />

        {cta.title && (
          <ButtonWrapper>
            <Button
              handleMouseDown={() =>
                trackCampaignClick({
                  eventLabel: cta.title,
                  destinationUrl: cta.link,
                  eventCategory: pageTitle,
                })
              }
              link={cta.link}
              bgColor={cta.color}
              // eslint-disable-next-line react/jsx-one-expression-per-line
              title={<>{cta.title}&nbsp;&raquo;</>}
            />
          </ButtonWrapper>
        )}
      </ContentBlock>
    </Row>
  );
};

BrandMessage.defaultProps = {
  pageTitle: '',
  cta: {
    title: '',
    link: '',
    color: color.accent,
  },
};

BrandMessage.propTypes = {
  pageTitle: PropTypes.string,
  copy: PropTypes.string.isRequired,
  cta: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    color: PropTypes.string,
  }),
  media: PropTypes.shape({
    filePath: PropTypes.string.isRequired,
    fileType: PropTypes.string.isRequired,
    altText: PropTypes.string,
  }).isRequired,
};

export default BrandMessage;
