const quoteBlockData = data => {
  return {
    backgroundColor: data.background_color,
    image: {
      src: data.quote_image.image && data.quote_image.image.url,
      alt: data.quote_image.alt_text,
    },
    copy: data.quote.copy,
    author: data.quote.author,
    copyColor: data.quote.color,
    quotationColor: data.quote.quotation_mark_color,
  };
};

export default quoteBlockData;
