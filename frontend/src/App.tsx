import React from 'react';
import GlobalStyle from './styles/global';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import themeMain from './styles/theme-main';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeMain}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
        <ToastContainer />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
