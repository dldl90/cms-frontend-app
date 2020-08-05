import React from 'react';

import { storiesOf } from '@storybook/react';
import CategoryBlock from '../GategoryBlock';
import markdownNotes from './notes.md';
import { categoryBlocks } from './mockData';

storiesOf('Category Block', module).add(
  'With four images',
  () => <CategoryBlock categoryBlocks={categoryBlocks} />,
  {
    notes: { markdown: markdownNotes },
  }
);
