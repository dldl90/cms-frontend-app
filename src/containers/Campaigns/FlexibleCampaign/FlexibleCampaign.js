import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPage } from '../../../redux/actions/pageActions';
import { campaignStack } from '../../../utils/contentstackAuth';
import { flexibleTemplateData } from '../../../templates/transformers';
import { FlexibleTemplate, NotFound } from '../../../templates';
import { nothsTheme } from '../../../styles/noths.theme';

export class FlexibleCampaign extends Component {
  static propTypes = {
    route: PropTypes.shape({}).isRequired,
    page: PropTypes.shape({}),
    fetchData: PropTypes.func,
    loading: PropTypes.bool,
    error: PropTypes.shape({}),
    location: PropTypes.shape({}).isRequired,
  };

  static defaultProps = {
    page: null,
    loading: false,
    error: null,
    fetchData: () => null,
  };

  componentDidMount() {
    const { page, fetchData, location, route } = this.props;
    if (!page) {
      fetchData(location.pathname, route.contentType);
    }
  }

  render() {
    const { loading, page, error } = this.props;

    if (loading) {
      return error ? <NotFound /> : null;
    }

    if (!page) {
      return error && error.status === 404 ? <NotFound /> : null;
    }

    return <FlexibleTemplate page={page} wide backgroundColor={nothsTheme.color.background} />;
  }
}

const fetchData = (path, contentType) =>
  fetchPage(campaignStack, contentType, path, flexibleTemplateData);

const mapStateToProps = state => ({
  page: state.page.data,
  loading: state.page.loading,
  error: state.page.error,
});

const mapDispatchToProps = dispatch => bindActionCreators({ fetchData }, dispatch);

const loadData = (path, contentType) => fetchData(path, contentType);

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(FlexibleCampaign),
  loadData,
};
