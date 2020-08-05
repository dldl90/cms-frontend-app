/* eslint-disable camelcase */
const imageGalleryBlockData = data => {
  return {
    imageItems: data.image_items.map(imageItem => {
      const { desktop_image, mobile_image, copy, header } = imageItem;
      return {
        image: {
          desktop: {
            src: desktop_image.image && desktop_image.image.url,
            alt: desktop_image.alt_text,
          },
          mobile: {
            src: mobile_image.image && mobile_image.image.url,
            alt: mobile_image.alt_text,
          },
        },
        header,
        copy,
      };
    }),
  };
};

export default imageGalleryBlockData;
