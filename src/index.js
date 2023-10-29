import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import theme from './theme';

import routes from './routes';

const router = createHashRouter(routes);
const App = () => {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  );
};

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);
