const useImageOrColor = heroBlock => {
  if (heroBlock.hero_banner_option === 'Solid Background Color') {
    return {
      backgroundColor: heroBlock.solid_background_color,
      backgroundImage: '',
      overlay: null,
    };
  }
  const imageGroup = heroBlock.background_image_group;
  return {
    backgroundColor: '',
    backgroundImage: {
      desktop: imageGroup.desktop_image && imageGroup.desktop_image.url,
      mobile: imageGroup.mobile_image && imageGroup.mobile_image.url,
      alt: imageGroup.alt_text,
    },
    overlay: heroBlock.background_image_group.optional_overlay.include_overlay
      ? {
          color: heroBlock.background_image_group.optional_overlay.overlay_color,
          transparency: heroBlock.background_image_group.optional_overlay.semi_transparent,
        }
      : null,
  };
};

const heroBannerdata = data => {
  if (data.hero_banner_option !== 'none') {
    const titleImageGroup = data.hero_content.title_image;

    return {
      ...useImageOrColor(data),
      alignment: data.hero_content.content_alignment,
      titleImage: {
        desktop: titleImageGroup.desktop_image && titleImageGroup.desktop_image.url,
        mobile: titleImageGroup.mobile_image && titleImageGroup.mobile_image.url,
        alt: titleImageGroup.alt_text,
      },
      copy: data.hero_content.copy,
      copyColor: data.hero_content.copy_color,
    };
  }
  return null;
};

export default heroBannerdata;
