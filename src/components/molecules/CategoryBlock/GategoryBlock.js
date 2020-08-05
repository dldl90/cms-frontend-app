import React from 'react';
import PropTypes from 'prop-types';
import { Row, Column } from '../../../styles/layout';
import { FlexibleImageCard } from '../../index';
import { Wrapper } from './CategoryBlock.style';

const CategoryBlock = ({ categoryBlocks }) => {
  const columns = 12 / categoryBlocks.length;
  return (
    <Row>
      {categoryBlocks.map(({ text, image, link }, index) => {
        const transformedImageData = {
          mobile: {
            ...image,
          },
        };
        return (
          <Column columns={{ phone: 12, tablet: columns }} key={text}>
            <Wrapper>
              <FlexibleImageCard
                image={transformedImageData}
                header={text}
                link={link}
                withBorder
                lightText
                alignText="center"
                isFirstCard={index === 0}
              />
            </Wrapper>
          </Column>
        );
      })}
    </Row>
  );
};

CategoryBlock.propTypes = {
  categoryBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

export default CategoryBlock;
