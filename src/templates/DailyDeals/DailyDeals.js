import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Seo, HeroBanner } from '../../components';
import { fetchDailyDealsData } from '../../redux/actions/pageActions';
import { Container, Column, Row } from '../../styles/layout';
import { BorderWrapper } from '../../styles/global';
import DealBlock from './DealBlock/DealBlock';
import DealEnded from './DealEnded/DealEnded';
import { HeadingSection, CustomBackground } from './DailyDeals.styles';

export class DailyDeals extends Component {
  static propTypes = {
    route: PropTypes.shape({}).isRequired,
    page: PropTypes.shape({
      pageTitle: PropTypes.string,
      endSale: PropTypes.bool,
      pageUrl: PropTypes.string,
      seo: PropTypes.shape({
        title: PropTypes.string,
        metaDesc: PropTypes.string,
        canonical: PropTypes.string,
      }),
      backgroundColor: PropTypes.string,
      backgroundImage: PropTypes.string,
      alignment: PropTypes.string,
      imageTitle: PropTypes.string,
      heroCopy: PropTypes.string,
      saleGroup: PropTypes.arrayOf(PropTypes.object),
      saleEnded: PropTypes.shape({
        title: PropTypes.string,
        copy: PropTypes.string,
        buttons: PropTypes.arrayOf(PropTypes.object),
      }),
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
    const { page, fetchData, location, route } = this.props;
    if (!page) {
      fetchData(location.pathname, route.contentType);
    }
  }

  render() {
    const { page, loading, location } = this.props;
    if (loading || !page) return null;

    const { endSale, seo, heroBlock, heading, saleGroup, pageTitle, saleEnded } = page;

    const isFeatureTest = location.search === '?testSaleEnded=true';

    if (endSale || isFeatureTest) return <DealEnded seo={seo} saleEnded={saleEnded} />;

    return (
      <BorderWrapper>
        <Seo {...seo} />
        <Container noPadding wide>
          <HeroBanner {...heroBlock} />
        </Container>
        <CustomBackground>
          <Container>
            <Row justify="center">
              <Column columns={{ phone: 12, tablet: 12 }} direction="column">
                <HeadingSection data-testid="HeadingSection">{heading}</HeadingSection>
              </Column>
            </Row>
            <Row justify="center">
              <Column columns={{ phone: 12, tablet: 12 }} direction="column">
                {saleGroup.map((sale, saleIndex) => {
                  const index = saleIndex + 1;
                  return (
                    <DealBlock sale={sale} number={index} eventCategory={pageTitle} key={index} />
                  );
                })}
              </Column>
            </Row>
          </Container>
        </CustomBackground>
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
      fetchData: fetchDailyDealsData,
    },
    dispatch
  );

const loadData = (path, contentType) => fetchDailyDealsData(path, contentType);

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(DailyDeals),
  loadData,
};
