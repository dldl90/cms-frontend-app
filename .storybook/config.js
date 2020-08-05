import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import { ThemeProvider } from 'styled-components';
import { nothsTheme } from '../src/styles/noths.theme';

addDecorator(story => <ThemeProvider theme={nothsTheme}>{story()}</ThemeProvider>);
addDecorator(
  withInfo({
    source: false, // Don't include story source
  })
);
addDecorator(withA11y);
// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
