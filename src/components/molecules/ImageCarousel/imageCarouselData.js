const imageCarouselData = data => {
  return {
    items: data.carousel_items.map(item => {
      return {
        image: {
          mobile: {
            src: item.image.mobile_image.image && item.image.mobile_image.image.url,
            alt: item.image.mobile_image.alt_text,
          },
          desktop: {
            src: item.image.desktop_image.image && item.image.desktop_image.image.url,
            alt: item.image.desktop_image.alt_text,
          },
        },
        header: item.header,
        copy: item.copy,
        link: item.link,
        product_id: item.product_id,
      };
    }),
  };
};

export default imageCarouselData;
