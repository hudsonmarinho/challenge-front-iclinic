import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { AppProvider } from './hooks/AppContext';

import { themeDefault } from './styles/themes';

import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <ThemeContext.Provider value={themeDefault}>
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </AppProvider>
  </ThemeContext.Provider>
);

export default App;
