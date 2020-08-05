import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { RichTextEditor, Seo } from '../../components';
import { Container, Column, Row } from '../../styles/layout';
import { InfoHeading, BorderWrapper } from '../../styles/global';
import { color } from '../../styles/noths.theme';

export default class TextTemplate extends Component {
  static propTypes = {
    page: PropTypes.shape({}).isRequired,
  };

  render() {
    const {
      page: { seo, heading, copy },
    } = this.props;

    return (
      <BorderWrapper>
        <Seo {...seo} />
        <Container>
          <Row justify="center">
            <Column columns={{ phone: 12, tablet: 9 }} direction="column">
              <InfoHeading data-testid="TextTemplate-InfoHeading">{heading}</InfoHeading>
              <RichTextEditor smallText html={copy} copyColor={color.black} />
            </Column>
          </Row>
        </Container>
      </BorderWrapper>
    );
  }
}
