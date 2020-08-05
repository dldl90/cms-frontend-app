import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchGiftCards } from '../../redux/actions/pageActions';

import { Image, Seo } from '../../components';

import {
  Container,
  Title,
  SubTitle,
  Paragraph,
  Button,
  ButtonBlock,
  MainImage,
} from './GiftCards.style';

export class GiftCards extends Component {
  static propTypes = {
    page: PropTypes.shape({}),
    loadGiftCards: PropTypes.func,
    loading: PropTypes.bool,
    location: PropTypes.shape({}).isRequired,
  };

  static defaultProps = {
    page: null,
    loadGiftCards: () => null,
    loading: false,
  };

  componentDidMount() {
    const { page, loadGiftCards, location } = this.props;
    if (!page) loadGiftCards(location.pathname);
  }

  render() {
    const { page, loading } = this.props;
    if (loading || !page) return null;

    const { pageTitle, heading, contentBlock, seo } = page;

    return (
      <Container>
        <Seo {...seo} />

        <Title>{pageTitle}</Title>

        <SubTitle>
          <Image alt={heading.imageAlt} src={heading.image} />
        </SubTitle>

        <Paragraph>{contentBlock.copy}</Paragraph>

        <ButtonBlock>
          {contentBlock.buttonLinks.map(button => (
            <Button href={button.ctaLink} key={button.ctaTitle}>
              {button.ctaTitle}
            </Button>
          ))}
        </ButtonBlock>

        <MainImage>
          <Image alt={contentBlock.mainAsset.altText} src={contentBlock.mainAsset.asset} />
        </MainImage>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page.data,
  loading: state.page.loading,
});

const mapDispatchToProps = {
  loadGiftCards: fetchGiftCards,
};

const loadData = path => fetchGiftCards(path);

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(GiftCards),
  loadData,
};
