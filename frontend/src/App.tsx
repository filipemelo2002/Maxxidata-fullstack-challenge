import React from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import themeMain from './styles/theme-main';
import Login from './pages/Login';
const App: React.FC = () => {
  return (
    <ThemeProvider theme={themeMain}>
      <Login />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
