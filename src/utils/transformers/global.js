export const slides = (title, link, image, alt) => {
  return {
    title,
    link,
    image,
    alt,
  };
};

export const seoData = (seo = {}, url = '') => {
  return {
    title: seo.title || '',
    metaDesc: seo.meta_description || '',
    metaTags: seo.meta_tags || '',
    metaRobots: seo.meta_robots || '',
    canonical: `https://www.notonthehighstreet.com${url}`,
  };
};
