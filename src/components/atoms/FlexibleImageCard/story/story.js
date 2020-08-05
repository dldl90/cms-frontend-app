import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import FlexibleImageCard from '../FlexibleImageCard';
import markdownNotes from './notes.md';

const image = {
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
};

const StoryWrapper = styled.div`
  max-width: 33.33%;
`;

storiesOf('FlexibleImageCard', module)
  .addDecorator(withKnobs)
  .add(
    'Flexible template style',
    () => (
      <StoryWrapper>
        <FlexibleImageCard
          image={image}
          uppercaseHeader={select('uppercaseHeader', [true, false], false)}
          alignText={select('alignText', ['left', 'center', 'right'], 'left')}
          lightText={select('lightText', [true, false], false)}
          header={text('header', 'Sed ut perspiciatis')}
          copy={text(
            'copy',
            'Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
          )}
          link={text('link', undefined)}
          withBorder={select('withBorder', [true, false], false)}
        />
      </StoryWrapper>
    ),
    {
      notes: { markdown: markdownNotes },
    }
  )
  .add(
    'RecentlyViewedCarousel style',
    () => (
      <StoryWrapper>
        <FlexibleImageCard
          image={image}
          uppercaseHeader={select('uppercaseHeader', [true, false], false)}
          alignText={select('alignText', ['left', 'center', 'right'], 'left')}
          lightText={select('lightText', [true, false], false)}
          header={text('header', undefined)}
          copy={text(
            'copy',
            'Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
          )}
          link={text('link', undefined)}
        />
      </StoryWrapper>
    ),
    {
      notes: { markdown: markdownNotes },
    }
  );
