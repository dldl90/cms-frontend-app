import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, color } from '@storybook/addon-knobs';
import Button from '../Button';
import markdownNotes from './notes.md';
import { color as nothsColor } from '../../../../styles/noths.theme';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add(
    'Button',
    () => (
      <Button
        title={text('title', 'Discover more')}
        link={text('url', 'www.noths.com')}
        bgColor={color('backgroundColor', nothsColor.accentLight)}
      />
    ),
    {
      notes: { markdown: markdownNotes },
    }
  );
