/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Seo, RichTextEditor, Button } from '../../components';
import { fetchAnnouncementData } from '../../redux/actions/pageActions';
import { Container, Column, Row } from '../../styles/layout';
import {
  UnsubscribeWrapper,
  RichTextEditorWrapper,
  InfoHeading,
  ButtonBlock,
} from './Announcement.style';
import { BorderWrapper } from '../../styles/global';

export class Announcement extends Component {
  static propTypes = {
    page: PropTypes.shape({
      pageTitle: PropTypes.string,
      pageUrl: PropTypes.string,
      seo: PropTypes.shape({
        title: PropTypes.string,
        metaDesc: PropTypes.string,
        canonical: PropTypes.string,
      }),
      contentBlock: PropTypes.shape({
        heading: PropTypes.string,
        copy: PropTypes.string,
      }),
      buttonBlock: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.func]),
    }),
    fetchData: PropTypes.func,
    loading: PropTypes.bool,
    location: PropTypes.shape({}).isRequired,
  };

  static defaultProps = {
    page: null,
    loading: false,
    fetchData: () => null,
  };

  componentDidMount() {
    const { page, fetchData, location } = this.props;
    if (!page) {
      fetchData(location.pathname);
    }
  }

  render() {
    const { page, loading } = this.props;
    if (loading || !page) return null;
    const { buttonBlock, contentBlock, seo } = page;

    return (
      <BorderWrapper>
        <Container>
          <Seo {...seo} />
          <Row justify="center">
            <Column columns={{ phone: 12, tablet: 9 }} direction="column">
              <UnsubscribeWrapper>
                <InfoHeading data-testid="Heading">{contentBlock.heading}</InfoHeading>
                <RichTextEditorWrapper>
                  <RichTextEditor html={contentBlock.copy} data-testid="RichTextEditor" />
                  <ButtonBlock>
                    {buttonBlock.map(button => (
                      <Button
                        data-testid="Button"
                        href={button.ctaLink}
                        key={button.ctaTitle}
                        link={button.ctaLink}
                        title={button.ctaTitle}
                      />
                    ))}
                  </ButtonBlock>
                </RichTextEditorWrapper>
              </UnsubscribeWrapper>
            </Column>
          </Row>
        </Container>
      </BorderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    page: state.page.data,
    loading: state.page.loading,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchData: fetchAnnouncementData,
    },
    dispatch
  );

const loadData = path => fetchAnnouncementData(path);

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(Announcement),
  loadData,
};
