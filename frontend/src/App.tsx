import React from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import themeMain from './styles/theme-main';
import Routes from './routes';
const App: React.FC = () => {
  return (
    <ThemeProvider theme={themeMain}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
