import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { ImageCard, WithImpression } from '../../index';
import ArrowButton from '../../atoms/ArrowButton/ArrowButton';
import { localStorageKey } from '../../../utils/constants';
import { SliderOverride, FadeIn } from './RecentlyViewed.style';
import { CarouselWrapper } from '../../../templates/Homepage/Homepage.style';
import { Heading, Section, BorderLine } from '../../../styles/global';
import { sizes } from '../../../styles/breakpoints';
import GTM from '../../../utils/tracking';
import { getRelativeUrl } from '../../../utils/helpers/stringHelpers';

const desktopDisplaySlides = 6;
const desktopSlidesToScroll = 6;
const mobileDisplaySlides = 2;
const mobileSlidesToScroll = 2;

const settings = {
  slidesToShow: desktopDisplaySlides,
  slidesToScroll: desktopSlidesToScroll,
  infinite: false,
  dots: false,
  arrows: true,
  nextArrow: <ArrowButton />,
  prevArrow: <ArrowButton rotate />,
  lazyLoad: false,
  responsive: [
    {
      breakpoint: sizes.tablet,
      settings: {
        lazyLoad: false,
        slidesToShow: mobileDisplaySlides,
        slidesToScroll: mobileSlidesToScroll,
        arrows: false,
      },
    },
  ],
};

const testName = 'RecentlyViewedCarousel';
export default class RecentlyViewed extends PureComponent {
  static propTypes = {
    heading: PropTypes.string,
    sectionId: PropTypes.string.isRequired,
    hasBorderline: PropTypes.bool,
  };

  static defaultProps = {
    heading: 'My recently viewed items',
    hasBorderline: false,
  };

  state = {
    recentlyViewedProducts: null,
    trackedProducts: [],
  };

  componentDidMount() {
    this.setState({ recentlyViewedProducts: this.getProducts() });
  }

  getProducts = () => {
    const isClient = global.window;

    if (isClient) {
      const content = window.localStorage.getItem(localStorageKey);
      if (content) {
        try {
          const products = JSON.parse(content);
          if (products && Array.isArray(products)) {
            const sortByViewedAt = (a, b) => b.viewed_at - a.viewed_at;
            return products.sort(sortByViewedAt);
          }
        } catch (e) {
          console.error(`Invalid content in localStorageKey "${localStorageKey}": \n`, e); //eslint-disable-line
        }
      }
    }
    return [];
  };

  trackImpressions = (heading, nextVisibleProductsStart, nextVisibleProductsEnd) => {
    const { recentlyViewedProducts, trackedProducts } = this.state;

    const alreadyTracked = product =>
      trackedProducts.some(trackedProduct => trackedProduct.product_id === `${product.id}`);

    const nextVisibleProducts = recentlyViewedProducts.slice(
      nextVisibleProductsStart,
      nextVisibleProductsEnd
    );

    const impressions = nextVisibleProducts
      .filter(product => {
        return !alreadyTracked(product) && product;
      })
      .map((product, productIndex) => {
        // Handle cases where legacy products in localStorage have no tracking data
        const productTracking = product.tracking
          ? product.tracking
          : { product_name: product.title, product_id: `${product.id}` };

        return {
          ...productTracking,
          list_name: heading,
          position: productIndex + 1 + nextVisibleProductsStart,
          list_id: 'n/a',
        };
      });

    if (impressions.length > 0) {
      GTM.pushToDataLayer({
        event: 'recently_viewed_impressions',
        eventCategory: heading,
        eventAction: 'Product Impressions',
        ecommerce: { impressions },
      });

      this.setState(prevState => {
        return { trackedProducts: [...prevState.trackedProducts, ...impressions] };
      });
    }
  };

  trackGtmVisibleProducts = heading => {
    const isDesktop = global.window.innerWidth > sizes.tablet;
    const nextVisibleProductsStart = 0;
    const nextVisibleProductsEnd = isDesktop ? desktopDisplaySlides : mobileDisplaySlides;

    this.trackImpressions(heading, nextVisibleProductsStart, nextVisibleProductsEnd);
  };

  trackGtmSlide = (heading, firstSlideIndex) => {
    const isDesktop = global.window.innerWidth > sizes.tablet;
    const nextVisibleProductsStart = firstSlideIndex;

    const nextVisibleProductsEnd =
      nextVisibleProductsStart + (isDesktop ? desktopSlidesToScroll : mobileSlidesToScroll);

    this.trackImpressions(heading, nextVisibleProductsStart, nextVisibleProductsEnd);
  };

  trackGtmProduct = ({ heading, url, position, tracking }) => {
    GTM.pushToDataLayer({
      event: 'recently_viewed_product_clicks',
      eventCategory: heading,
      eventAction: 'Product Click',
      eventLabel: undefined,
      destinationUrl: url,
      ecommerce: {
        click: {
          ...tracking,
          list_id: 'n/a',
          list_name: heading,
          position,
        },
      },
    });
  };

  render() {
    const { recentlyViewedProducts } = this.state;
    const { heading, sectionId, hasBorderline } = this.props;
    const displayRecentlyViewed = recentlyViewedProducts && recentlyViewedProducts.length > 0;

    return (
      <Section id={sectionId} isHidden={!displayRecentlyViewed}>
        {hasBorderline && <BorderLine />}

        {displayRecentlyViewed && (
          <div data-testid={testName}>
            <Heading topPadding={40} bottomPadding={40}>
              {heading}
            </Heading>
            <CarouselWrapper>
              <WithImpression once onImpression={() => this.trackGtmVisibleProducts(heading)}>
                <FadeIn>
                  <SliderOverride data-testid={`${testName}-slider`}>
                    <Slider
                      {...settings}
                      beforeChange={(oldIndex, firstSlideIndex) =>
                        this.trackGtmSlide(heading, firstSlideIndex)
                      }
                    >
                      {recentlyViewedProducts.map((product, productIndex) => {
                        const { title, image, url, tracking } = product;
                        return (
                          <ImageCard
                            key={title}
                            title={title}
                            image={image}
                            link={url}
                            plainStyle
                            trackGtmEvent={() =>
                              this.trackGtmProduct({
                                heading,
                                url: getRelativeUrl(url),
                                position: productIndex + 1,
                                tracking,
                              })
                            }
                          />
                        );
                      })}
                    </Slider>
                  </SliderOverride>
                </FadeIn>
              </WithImpression>
            </CarouselWrapper>
          </div>
        )}
      </Section>
    );
  }
}
