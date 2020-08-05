import React, { PureComponent } from 'react';
import { renderRoutes } from 'react-router-config';
import { ThemeProvider } from 'styled-components';
import { GlobalDataContext, Navigation } from '@noths/global-components-v2';

import { nothsTheme } from './styles/noths.theme';
import routes from './routes';
import './styles/scss/SlickTheme.scss';

class App extends PureComponent {
  render() {
    return (
      <GlobalDataContext.Consumer>
        {({ navData }) => (
          <ThemeProvider theme={nothsTheme}>
            <React.Fragment>
              <Navigation navData={navData} />
              {renderRoutes(routes)}
            </React.Fragment>
          </ThemeProvider>
        )}
      </GlobalDataContext.Consumer>
    );
  }
}

export default App;
