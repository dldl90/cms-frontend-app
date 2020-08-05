const imageData = data => {
  return {
    src: data.image.url,
    alt: data.alt_text,
  };
};

export default imageData;
