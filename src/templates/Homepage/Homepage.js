/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { fetchHomepage } from '../../redux/actions/pageActions';
import { trackHeroBlockClick, trackCarouselProductClick } from './homepageTracking';
import { color } from '../../styles/noths.theme';

import {
  Seo,
  Carousel,
  UspBanner,
  ImageCard,
  RichTextEditor,
  RecentlyViewed,
} from '../../components';
import PartnerBlock from './PartnerBlock/PartnerBlock';
import HeroBanner from './HeroBanner/HeroBanner';
import Banner from './Banner/Banner';

import { Heading, Section, BorderLine, BorderWrapper } from '../../styles/global';
import { Container, Column, Row } from '../../styles/layout';

import { PageTitle, HeroCtaWrapper, CarouselWrapper, InfoSection } from './Homepage.style';

const testName = 'Homepage';
export class Homepage extends Component {
  static propTypes = {
    page: PropTypes.shape({
      pageTitle: PropTypes.string,
      uspBanner: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
      heroBanner: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
      heroBlocks: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
      slider: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
      partners: PropTypes.shape({}),
      banner: PropTypes.shape({}),
      infoSection: PropTypes.shape({}),
      recentlyViewed: PropTypes.shape({}),
    }),
    loadHomepage: PropTypes.func,
    loading: PropTypes.bool,
    location: PropTypes.shape({}).isRequired,
  };

  static defaultProps = {
    page: null,
    loadHomepage: () => null,
    loading: false,
  };

  componentDidMount() {
    const { page, loadHomepage, location } = this.props;

    if (!page) loadHomepage(location.pathname);
  }

  render() {
    const { page, loading } = this.props;

    if (loading || !page) return null;

    const {
      pageTitle,
      seo,
      uspBanner,
      heroBanner,
      heroBlocks,
      slider,
      partners,
      banner,
      infoSection,
      recentlyViewed,
    } = page;

    return (
      <BorderWrapper>
        <Container wide>
          <Seo {...seo} />

          <PageTitle>{pageTitle}</PageTitle>

          <Section>
            <UspBanner slides={uspBanner} />
          </Section>

          <Section id="section-1">
            <HeroBanner {...heroBanner} testName={testName} />
          </Section>

          <Section id="section-2">
            <HeroCtaWrapper>
              <Row>
                {heroBlocks.map((block, blockIndex) => (
                  <Column columns={{ phone: 6, tablet: 3 }} key={block.title}>
                    <ImageCard
                      key={block.title}
                      title={block.title}
                      image={block.image}
                      link={block.link}
                      trackGtmEvent={() =>
                        trackHeroBlockClick({
                          sectionId: 2,
                          blockIndex,
                          ctaText: block.title,
                          link: block.link,
                        })
                      }
                      doublePadding
                      border
                      titleCenter
                      uppercase
                    />
                  </Column>
                ))}
              </Row>
            </HeroCtaWrapper>
          </Section>

          <BorderLine />

          <Section id="section-3" data-testid={`${testName}-SectionThree`}>
            <Heading>{slider.heading}</Heading>
            <CarouselWrapper>
              <Carousel
                renderSlideComponents={() =>
                  slider.slides.map((slide, slideIndex) => (
                    <ImageCard
                      key={slide.title}
                      title={slide.title}
                      image={slide.image}
                      link={slide.link}
                      trackGtmEvent={() => {
                        trackCarouselProductClick({
                          sectionId: 3,
                          slideIndex,
                          ctaText: slide.title,
                          link: slide.link,
                          sectionTitle: slider.heading,
                        });
                      }}
                      doublePadding
                      border
                      titleCenter
                      uppercase
                    />
                  ))
                }
              />
            </CarouselWrapper>
          </Section>

          <RecentlyViewed sectionId="section-4" heading={recentlyViewed.heading} hasBorderline />

          <BorderLine />

          <Section id="section-5" doublePadding>
            <PartnerBlock {...partners} sectionId="5" />
          </Section>

          <BorderLine />

          <Section id="section-6">
            <Banner {...banner} sectionId="6" />
          </Section>

          <Section>
            <InfoSection>
              <Heading customHeading>{infoSection.heading}</Heading>
              <RichTextEditor smallText copyColor={color.black} html={infoSection.copy} />
            </InfoSection>
          </Section>
        </Container>
      </BorderWrapper>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page.data,
  loading: state.page.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadHomepage: fetchHomepage,
    },
    dispatch
  );

const loadData = path => fetchHomepage(path);

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(Homepage),
  loadData,
};
