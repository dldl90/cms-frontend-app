const brandMessageData = data => {
  return {
    copy: data.copy,
    cta: data.cta,
    media: {
      filePath: data.media.file.url,
      fileType: data.media.file.content_type,
      altText: data.media.alt_text,
    },
  };
};

export default brandMessageData;
