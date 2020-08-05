import React from 'react';

import { storiesOf } from '@storybook/react';
import ImageCarousel from '../ImageCarousel';
import markdownNotes from './notes.md';
import { Container } from '../../../../styles/layout';
import '../../../../styles/scss/SlickTheme.scss';

const items = [
  {
    image: {
      desktop: {
        src:
          'https://cdn.notonthehighstreet.com/fs/10/36/10f1-0588-4b84-9945-e4155798f387/original_white-marble-and-copper-side-table.jpg',
        alt: 'side table',
      },
      mobile: {
        src:
          'https://cdn.notonthehighstreet.com/fs/10/36/10f1-0588-4b84-9945-e4155798f387/original_white-marble-and-copper-side-table.jpg',
        alt: 'side table',
      },
    },
    link: 'www.google.com',
  },
  {
    image: {
      desktop: {
        src:
          'https://cdn.notonthehighstreet.com/fs/2c/58/d022-a3ac-4f7e-9435-900e279d478a/original_round-turquoise-and-copper-display-shelf.jpg',
        alt: 'display shelf',
      },
      mobile: {
        src:
          'https://cdn.notonthehighstreet.com/fs/2c/58/d022-a3ac-4f7e-9435-900e279d478a/original_round-turquoise-and-copper-display-shelf.jpg',
        alt: 'display shelf',
      },
    },
    link: 'www.google.com',
  },
  {
    image: {
      desktop: {
        src:
          'https://cdn.notonthehighstreet.com/fs/f4/ce/6a24-053c-4a6f-9999-bc309aac5fbc/original_personalised-shopping-bag.jpg',
        alt: 'shopping bag',
      },
      mobile: {
        src:
          'https://cdn.notonthehighstreet.com/fs/f4/ce/6a24-053c-4a6f-9999-bc309aac5fbc/original_personalised-shopping-bag.jpg',
        alt: 'shopping bag',
      },
    },
    link: 'www.google.com',
  },
  {
    image: {
      desktop: {
        src:
          'https://cdn.notonthehighstreet.com/fs/a3/ff/8cfc-26a5-4df8-87e9-1d103fcaf564/original_kitt-motion-dial-watch.jpg',
        alt: 'watch',
      },
      mobile: {
        src:
          'https://cdn.notonthehighstreet.com/fs/a3/ff/8cfc-26a5-4df8-87e9-1d103fcaf564/original_kitt-motion-dial-watch.jpg',
        alt: 'watch',
      },
    },
    link: 'www.google.com',
  },
];

storiesOf('ImageCarousel', module).add(
  'ImageCarousel',
  () => (
    <Container>
      <ImageCarousel items={[...items, ...items]} />
    </Container>
  ),
  {
    notes: { markdown: markdownNotes },
  }
);
