import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPage } from '../../../redux/actions/pageActions';
import textTemplateData from '../../../utils/transformers/textTemplateData';
import { corePagesStack } from '../../../utils/contentstackAuth';

import { TextTemplate } from '../../../templates';

class About extends Component {
  static propTypes = {
    route: PropTypes.shape({}).isRequired,
    page: PropTypes.shape({}),
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
    const { page, fetchData, location, route } = this.props;
    if (!page) {
      fetchData(location.pathname, route.contentType);
    }
  }

  render() {
    const { loading, page } = this.props;

    if (loading || !page) return null;

    return <TextTemplate page={page} />;
  }
}

const fetchData = (path, contentType) =>
  fetchPage(corePagesStack, contentType, path, textTemplateData);

const mapStateToProps = state => ({
  page: state.page.data,
  loading: state.page.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ fetchData }, dispatch);

const loadData = (path, contentType) => fetchData(path, contentType);

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(About),
  loadData,
};
