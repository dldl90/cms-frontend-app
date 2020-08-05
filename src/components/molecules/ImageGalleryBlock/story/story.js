import React from 'react';

import { storiesOf } from '@storybook/react';
import ImageGalleryBlock from '../ImageGalleryBlock';
import markdownNotes from './notes.md';
import { imageItems } from './mockData';

storiesOf('Image Gallery Block', module)
  .add('With four images', () => <ImageGalleryBlock imageItems={imageItems} />, {
    notes: { markdown: markdownNotes },
  })
  .add('With three images', () => <ImageGalleryBlock imageItems={imageItems.slice(0, 3)} />, {
    notes: { markdown: markdownNotes },
  })
  .add('With two images', () => <ImageGalleryBlock imageItems={imageItems.slice(0, 2)} />, {
    notes: { markdown: markdownNotes },
  });
