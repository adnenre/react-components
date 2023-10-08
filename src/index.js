import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import routes from './routes';
import { ThemeProvider } from 'styled-components';

import Main from './pages/Main';
import SideBarre from './components/SideBarre';

import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import Toggler from './components/Toggler';
import theme from './theme';

const App = () => {
  const [isActive, setActive] = useState(false);
  const activateSideBar = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <SideBarre routes={routes} active={isActive} />
            <Main active={isActive} />
            <Toggler onClick={activateSideBar} />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  );
};

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);
