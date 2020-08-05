const buttonData = data => {
  return {
    link: data.file ? data.file.url : data.url,
    bgColor: data.background_colour,
    title: data.text,
  };
};

export default buttonData;
