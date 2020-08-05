import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, color } from '@storybook/addon-knobs';
import QuoteBlock from '../QuoteBlock';
import markdownNotes from './notes.md';
import { color as nothsColor } from '../../../../styles/noths.theme';
import placeholderImage from './avatar-placeholder.png';

const placeholder = {
  src: placeholderImage,
  alt: 'Avatar image',
};

storiesOf('QuoteBlock', module)
  .addDecorator(withKnobs)
  .add(
    'QuoteBlock',
    () => (
      <QuoteBlock
        copy={text(
          'copy',
          'Deserunt mollitia animi, id est laborum et dolorum. Fuga et harum quidem rerum facilis est et expedita distinctio'
        )}
        author={text('author', 'Fearne')}
        backgroundColor={color('backgroundColor', nothsColor.background)}
        copyColor={color('copyColor', nothsColor.primary)}
        quotationColor={color('quotationColor', nothsColor.primary)}
      />
    ),
    {
      notes: { markdown: markdownNotes },
    }
  )
  .add(
    'QuoteBlock with image',
    () => (
      <QuoteBlock
        copy={text(
          'copy',
          'Deserunt mollitia animi, id est laborum et dolorum. Fuga et harum quidem rerum facilis est et expedita distinctio'
        )}
        author={text('author', 'Fearne')}
        backgroundColor={color('backgroundColor', nothsColor.background)}
        copyColor={color('copyColor', nothsColor.primary)}
        quotationColor={color('quotationColor', nothsColor.primary)}
        image={placeholder}
      />
    ),
    {
      notes: { markdown: markdownNotes },
    }
  );
