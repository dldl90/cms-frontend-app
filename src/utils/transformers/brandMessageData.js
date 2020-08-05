import { seoData } from './global';

const brandMessageData = data => {
  return {
    seo: seoData(data.seo, data.url),
    pageTitle: data.title,
    pageUrl: data.url,
    heading: {
      image: data.heading.title_image.url,
      imageAlt: data.heading.title_image_alt_text,
      contentType: data.heading.title_image.content_type,
    },
    contentBlock: {
      copy: data.content_block.copy,
      ctaLink: data.content_block.cta_link.href,
      ctaTitle: data.content_block.cta_link.title,
      ctaColor: data.content_block.cta_background_colour,
      mainAsset: {
        asset: data.content_block.main_asset.url,
        altText: data.content_block.asset_alt_text,
        contentType: data.content_block.main_asset.content_type,
      },
    },
  };
};

export default brandMessageData;
