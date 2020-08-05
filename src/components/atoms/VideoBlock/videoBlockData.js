const videoBlockData = data => {
  return {
    youtubeId: data.youtube_id,
    thumbnail: data.thumbnail.url,
    header: data.header,
    copy: data.copy,
  };
};

export default videoBlockData;
