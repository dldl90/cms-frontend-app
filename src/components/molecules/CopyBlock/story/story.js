import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import CopyBlock from '../CopyBlock';
import markdownNotes from './notes.md';

storiesOf('Copy Block', module)
  .addDecorator(withKnobs)
  .add(
    'Copy Block',
    () => (
      <CopyBlock
        html={text(
          'copy',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        )}
      />
    ),
    {
      notes: { markdown: markdownNotes },
      knobs: {
        escapeHTML: false,
      },
    }
  );
