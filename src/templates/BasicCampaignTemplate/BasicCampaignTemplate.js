/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Seo, Image, Video, RichTextEditor, Button } from '../../components';
import { trackCampaignClick } from './basicCampaignTracking';
import { Container } from '../../styles/layout';
import {
  Row,
  ContentImg,
  ContentBlock,
  Heading,
  ButtonWrapper,
} from './BasicCampaignTemplate.style';
import { color } from '../../styles/noths.theme';

export default class BasicCampaignTemplate extends Component {
  static propTypes = {
    page: PropTypes.shape({
      pageTitle: PropTypes.string,
      pageUrl: PropTypes.string,
      heading: PropTypes.shape({
        image: PropTypes.string,
        imageAlt: PropTypes.string,
        contentType: PropTypes.string,
      }),
      contentBlock: PropTypes.shape({
        copy: PropTypes.string,
        ctaLink: PropTypes.string,
        ctaTitle: PropTypes.string,
        ctaColor: PropTypes.string,
      }),
      mainAsset: PropTypes.shape({
        asset: PropTypes.string,
        altText: PropTypes.string,
        contentType: PropTypes.string,
      }),
      seo: PropTypes.shape({
        title: PropTypes.string,
        metaDesc: PropTypes.string,
        canonical: PropTypes.string,
      }),
    }),
  };

  static defaultProps = {
    page: null,
  };

  renderMedia = mainAsset => {
    const { contentType, asset, altText } = mainAsset;
    if (contentType === 'video/mp4') {
      return (
        <Video src={asset} contentType={contentType} autoPlay="autoPlay" loop muted controls="" />
      );
    }

    return <Image src={asset} alt={altText} />;
  };

  render() {
    const {
      page: { heading, contentBlock, seo, pageTitle },
    } = this.props;

    return (
      <Container>
        <Seo {...seo} />

        <Heading>
          <Image src={heading.image} alt={heading.imageAlt} />
        </Heading>
        <Row>
          <ContentImg>{this.renderMedia(contentBlock.mainAsset)}</ContentImg>
          <ContentBlock>
            <RichTextEditor html={contentBlock.copy} copyColor={color.black} />
            <ButtonWrapper>
              <Button
                handleMouseDown={() =>
                  trackCampaignClick({
                    eventLabel: contentBlock.ctaTitle,
                    destinationUrl: contentBlock.ctaLink,
                    eventCategory: pageTitle,
                  })
                }
                link={contentBlock.ctaLink}
                bgColor={contentBlock.ctaColor}
                // eslint-disable-next-line react/jsx-one-expression-per-line
                title={<>{contentBlock.ctaTitle}&nbsp;&raquo;</>}
              />
            </ButtonWrapper>
          </ContentBlock>
        </Row>
      </Container>
    );
  }
}
