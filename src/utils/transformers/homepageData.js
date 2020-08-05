import { slides, seoData } from './global';

const imageOp = image => `${image}?quality=70`;

const homepageData = data => {
  const mobileHeroBannerTitle = data.hero_banner.title.image_mobile
    ? imageOp(data.hero_banner.title.image_mobile.url)
    : imageOp(data.hero_banner.title.image.url);

  return {
    pageTitle: data.title,
    seo: seoData(data.seo),
    uspBanner: data.usp_banner.map(usp => {
      return {
        title: usp.title,
        subtitle: usp.sub_title,
        image: usp.icon.url,
        alt: usp.icon.title,
      };
    }),
    heroBanner: {
      titleImage: imageOp(data.hero_banner.title.image.url),
      titleImageMobile: mobileHeroBannerTitle,
      titleImageAlt: data.hero_banner.title.alt_text,
      bannerImage: {
        desktop: data.hero_banner.banner_image.desktop.url,
        mobile: data.hero_banner.banner_image.mobile.url,
      },
      link: data.hero_banner.cta_button.link,
      buttonTitle: data.hero_banner.cta_button.title,
      buttonColor: data.hero_banner.cta_button.cta_color,
      backgroundColor: data.hero_banner.cta_button.panel_background_colour,
      legalInfo: {
        display: data.hero_banner.terms_conditions.display,
        title: data.hero_banner.terms_conditions.title,
        link: data.hero_banner.terms_conditions.link,
      },
    },
    heroBlocks: data.hero_blocks.map(block => {
      return slides(block.title, block.link, imageOp(block.image.url), '');
    }),
    slider: {
      heading: data.slider_block.heading,
      subheading: data.slider_block.sub_heading,
      slides: data.slider_block.slides.map(block => {
        return slides(block.title, block.link, block.image.url, block.image.alt);
      }),
    },
    partners: {
      heading: data.partner_section.heading,
      subheading: data.partner_section.sub_heading,
      blocks: data.partner_section.partner_blocks.map(block => {
        return {
          title: block.title_partner_name,
          subtitle: block.subtitle_partner,
          link: block.partner_panel.link,
          largeImage: {
            title: block.partner_panel.title,
            image: {
              desktop: block.partner_panel.partner_image_desktop.url,
              mobile: block.partner_panel.partner_image_mobile.url,
            },
            link: block.partner_panel.link,
          },
          smallImages: [
            {
              title: block.top_product_panel.title,
              image: block.top_product_panel.image.url,
              link: block.top_product_panel.link,
              productCode: block.top_product_panel.product_code,
              productId: `${block.top_product_panel.product_code - 10000}`,
            },
            {
              title: block.bottom_product_panel.title,
              image: block.bottom_product_panel.image.url,
              link: block.bottom_product_panel.link,
              productCode: block.bottom_product_panel.product_code,
              productId: `${block.bottom_product_panel.product_code - 10000}`,
            },
          ],
        };
      }),
    },
    banner: {
      title: data.bottom_banner.title,
      subtitle: data.bottom_banner.subtitle,
      image: {
        desktop: data.bottom_banner.image.url,
        mobile: data.bottom_banner.mobile_image.url,
      },
      link: data.bottom_banner.link,
      backgroundColor: data.bottom_banner.background_colour,
    },
    infoSection: {
      heading: data.copy_section.heading,
      copy: data.copy_section.copy,
    },
    recentlyViewed: {
      heading: data.recently_viewed.heading,
    },
  };
};

export default homepageData;
