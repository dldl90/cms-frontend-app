import { seoData } from './global';

const announcementData = data => {
  return {
    pageTitle: data.title,
    seo: seoData(data.seo, data.url),
    contentBlock: {
      heading: data.main_content.title,
      copy: data.main_content.copy,
    },
    buttonBlock: data.buttons.map(button => {
      return {
        ctaLink: button.link,
        ctaTitle: button.title,
      };
    }),
  };
};

export default announcementData;
