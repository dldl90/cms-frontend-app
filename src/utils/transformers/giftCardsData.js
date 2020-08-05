import { seoData } from './global';

const giftCardsData = data => {
  return {
    seo: seoData(data.seo, data.url),
    pageTitle: data.title,
    pageUrl: data.url,
    heading: {
      image: data.sub_title.url,
      imageAlt: data.sub_title.title,
      contentType: data.sub_title.content_type,
    },
    contentBlock: {
      copy: data.paragraph,
      buttonLinks: data.button_links.map(button => {
        return {
          ctaLink: button.link,
          ctaTitle: button.title,
        };
      }),
      mainAsset: {
        asset: data.main_image.url,
        altText: data.main_image.title,
        contentType: data.main_image.content_type,
      },
    },
  };
};

export default giftCardsData;
