import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, color, boolean, object } from '@storybook/addon-knobs';
import HeroBanner from '../HeroBanner';
import markdownNotes from './notes.md';

const copyString =
  '<p style="text-align: center;">Enjoy <strong>30% off</strong> unique jewellery, made for the most precious people in your life.</p>';

storiesOf('HeroBanner', module)
  .addDecorator(withKnobs)
  .add(
    'HeroBanner with background colour',
    () => {
      const titleImageSrc = text(
        'titleImage',
        'https://images.contentstack.io/v3/assets/blt6bafcfc1e383981d/bltf153b9a1cb9a4b74/5d1f4e78e802da1244b245d0/new-daily-wonders-title.png'
      );
      return (
        <HeroBanner
          backgroundImage={undefined}
          backgroundColor={color('backgroundColor', '#ffD3a4')}
          alignment={select('alignment', ['full width', 'left', 'center', 'right'], 'center')}
          copy={text('copy', copyString)}
          copyColor={text('copyColor', '#484848')}
          overlay={undefined}
          titleImage={{ desktop: titleImageSrc }}
        />
      );
    },
    {
      notes: { markdown: markdownNotes },
      knobs: {
        escapeHTML: false,
      },
    }
  )
  .add(
    'HeroBanner with background image',
    () => {
      const overlayColor = text('overlay color', '#FFD3A4');
      const overlayTransparency = boolean('overlay transparency', true);
      const titleImageSrc = text(
        'titleImage',
        'https://images.contentstack.io/v3/assets/blt6bafcfc1e383981d/bltf153b9a1cb9a4b74/5d1f4e78e802da1244b245d0/new-daily-wonders-title.png'
      );

      return (
        <HeroBanner
          backgroundImage={object('backgroundImage', {
            desktop:
              'https://cdn.notonthehighstreet.com/fs/33/f0/82ab-ab40-4055-a447-0ed643848c58/original_gifts-departmentpage-desktop-06.jpg',
            mobile: '',
          })}
          backgroundColor={undefined}
          alignment={select('alignment', ['full width', 'left', 'center', 'right'], 'center')}
          copy={text('copy', '<h2 style="text-align: center;">Storybook test hero copy</h2>')}
          copyColor={text('copyColor', '#484848')}
          overlay={{
            color: overlayColor,
            transparency: overlayTransparency,
          }}
          titleImage={{ desktop: titleImageSrc }}
        />
      );
    },
    {
      notes: { markdown: markdownNotes },
      knobs: {
        escapeHTML: false,
      },
    }
  );
