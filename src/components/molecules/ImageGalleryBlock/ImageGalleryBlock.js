import React from 'react';
import PropTypes from 'prop-types';
import { Row, Column } from '../../../styles/layout';
import { FlexibleImageCard } from '../../index';
import { Wrapper } from './ImageGalleryBlock.style';

const ImageGalleryBlock = ({ imageItems }) => {
  const columns = 12 / imageItems.length;
  return (
    <Row>
      {imageItems.map(({ header, copy, image }, index) => {
        return (
          <Column columns={{ phone: 12, tablet: columns }} key={header}>
            <Wrapper>
              <FlexibleImageCard
                image={image}
                header={header}
                copy={copy}
                isFirstCard={index === 0}
              />
            </Wrapper>
          </Column>
        );
      })}
    </Row>
  );
};

ImageGalleryBlock.defaultProps = {
  imageItems: [
    {
      copy: '',
      header: '',
      image: {
        desktop: {
          src: '',
          alt: '',
        },
      },
    },
  ],
};

ImageGalleryBlock.propTypes = {
  imageItems: PropTypes.arrayOf(
    PropTypes.shape({
      copy: PropTypes.string,
      header: PropTypes.string,
      image: PropTypes.shape({
        desktop: PropTypes.shape({
          alt: PropTypes.string,
          src: PropTypes.string,
        }),
        mobile: PropTypes.shape({
          alt: PropTypes.string,
          src: PropTypes.string,
        }).isRequired,
      }),
    })
  ),
};

export default ImageGalleryBlock;
