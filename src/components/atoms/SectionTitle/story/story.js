import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import SectionTitle from '../SectionTitle';
import markdownNotes from './notes.md';

storiesOf('SectionTitle', module)
  .addDecorator(withKnobs)
  .add('SectionTitle', () => <SectionTitle header={text('copy', 'Sit amet, consectetur')} />, {
    notes: { markdown: markdownNotes },
  });
