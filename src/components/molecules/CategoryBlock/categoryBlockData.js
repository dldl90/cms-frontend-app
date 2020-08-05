/* eslint-disable camelcase */
const categoryBlockData = data => {
  return {
    categoryBlocks: data.category_blocks.map(block => {
      const { text, image, link } = block;
      return {
        image: {
          src: image.image.url,
          alt: image.alt_text,
        },
        text,
        link,
      };
    }),
  };
};

export default categoryBlockData;
