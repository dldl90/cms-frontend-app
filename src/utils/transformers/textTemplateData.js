import { seoData } from './global';

const textTemplateData = data => {
  return {
    pageTitle: data.title,
    seo: seoData(data.seo, data.url),
    heading: data.heading,
    copy: data.copy,
  };
};

export default textTemplateData;
