import React from 'react';
import PropTypes from 'prop-types';
import { ContainerFluid } from '../../../styles/layout';
import { BlockQuote, Quote, QuoteWrapper, Author, ImageWrapper } from './QuoteBlock.style';
import Image from '../Image/Image';

const QuoteBlock = ({ backgroundColor, image, copyColor, quotationColor, copy, author }) => {
  return (
    <ContainerFluid>
      <BlockQuote backgroundColor={backgroundColor} copyColor={copyColor}>
        <ImageWrapper>{image.src && <Image src={image.src} alt={image.alt} />}</ImageWrapper>
        <QuoteWrapper quotationColor={quotationColor}>
          <Quote>{copy}</Quote>
        </QuoteWrapper>
        {author && <Author>{`- ${author}`}</Author>}
      </BlockQuote>
    </ContainerFluid>
  );
};

QuoteBlock.defaultProps = {
  author: '',
  image: {
    src: '',
    alt: '',
  },
};

QuoteBlock.propTypes = {
  author: PropTypes.string,
  backgroundColor: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  copyColor: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  quotationColor: PropTypes.string.isRequired,
};

export default QuoteBlock;
