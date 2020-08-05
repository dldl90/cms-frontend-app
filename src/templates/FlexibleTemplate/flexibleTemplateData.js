/* eslint-disable camelcase */
import { seoData } from '../../utils/transformers/global';
import { toCamel } from '../../utils/helpers/stringHelpers';
import flexibleComponents from '../flexibleComponents';
import { heroBannerData } from '../../components/dataTransformers';

const componentSectionData = sections => {
  return sections
    .map(section => {
      const key = Object.keys(section);
      const sectionKey = toCamel(key.toString());

      if (flexibleComponents[sectionKey]) {
        // flexible component exists
        const sectionDataTransformer = flexibleComponents[sectionKey].dataTransformer;
        const data = sectionDataTransformer && sectionDataTransformer(section[key]);

        return { sectionKey, data };
      }

      // flexible component does not exist
      return null;
    })
    .filter(section => section !== null);
};

const flexibleTemplateData = data => {
  const { seo, title, url, hero_banner, sections } = data;

  return {
    seo: seoData(seo, url),
    pageTitle: title || '',
    heroBanner: hero_banner && heroBannerData(hero_banner),
    pageUrl: url || '',
    componentSections: sections ? componentSectionData(sections) : [],
  };
};

export default flexibleTemplateData;
