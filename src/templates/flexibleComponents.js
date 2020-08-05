import {
  BrandMessage,
  SectionTitle,
  QuoteBlock,
  ImageCarousel,
  ImageGalleryBlock,
  CopyBlock,
  Videoblock,
  Button,
  CategoryBlock,
  Image,
} from '../components';

import {
  sectionTitleData,
  brandMessageData,
  quoteBlockData,
  imageCarouselData,
  imageGalleryBlockData,
  copyBlockData,
  videoBlockData,
  buttonData,
  categoryBlockData,
  imageData,
} from '../components/dataTransformers';

const flexibleComponents = {
  brandMessageBlock: { component: BrandMessage, dataTransformer: brandMessageData },
  sectionTitle: { component: SectionTitle, dataTransformer: sectionTitleData },
  quoteBlock: { component: QuoteBlock, dataTransformer: quoteBlockData },
  carouselBlock: { component: ImageCarousel, dataTransformer: imageCarouselData },
  imageGalleryBlock: { component: ImageGalleryBlock, dataTransformer: imageGalleryBlockData },
  copyBlock: { component: CopyBlock, dataTransformer: copyBlockData },
  videoBlock: { component: Videoblock, dataTransformer: videoBlockData },
  ctaButton: { component: Button, dataTransformer: buttonData },
  downloadButton: { component: Button, dataTransformer: buttonData },
  categoryBlock: { component: CategoryBlock, dataTransformer: categoryBlockData },
  imageSectionTitle: { component: Image, dataTransformer: imageData },
};

export default flexibleComponents;
