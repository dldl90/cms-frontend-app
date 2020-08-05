import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { VideoBlock } from '../VideoBlock';
import markdownNotes from './notes.md';

storiesOf('VideoBlock', module)
  .addDecorator(withKnobs)
  .add(
    'VideoBlock',
    () => (
      <VideoBlock
        youtubeId={text('youtube id', 'sqztb7WoHNM')}
        thumbnail={text(
          'videoThumbnail',
          'https://images.contentstack.io/v3/assets/blt6bafcfc1e383981d/blt4daae2f541388aeb/5d3ec685ff513f2188364ba5/sqztb7WoHNM.jpg'
        )}
        header={text('video Header', 'Main heading video Component')}
        copy={text(
          'video copy',
          'Ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.'
        )}
      />
    ),
    {
      notes: { markdown: markdownNotes },
    }
  );
