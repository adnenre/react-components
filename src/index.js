import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import Application from './Application';

const App = () => {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Application />
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  );
};

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);
