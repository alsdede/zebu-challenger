import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core';
import GlobalStyle from './styles/global';
import Routes from './routes';

const theme = createMuiTheme();

const App: React.FC = () => (
  <>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </MuiThemeProvider>
  </>
);

export default App;
