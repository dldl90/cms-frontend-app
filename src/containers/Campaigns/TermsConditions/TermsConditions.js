import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPage } from '../../../redux/actions/pageActions';
import textTemplateData from '../../../utils/transformers/textTemplateData';
import { campaignStack } from '../../../utils/contentstackAuth';
import NotFound from '../../../templates/NotFound/NotFound';

import { TextTemplate } from '../../../templates';

export class TermsConditions extends Component {
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

    if (loading) return null;

    if (!page) {
      if (error && error.status === 404) {
        return <NotFound />;
      }

      return null;
    }

    return <TextTemplate page={page} />;
  }
}

const fetchData = (path, contentType) =>
  fetchPage(campaignStack, contentType, path, textTemplateData);

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
  )(TermsConditions),
  loadData,
};
