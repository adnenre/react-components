import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import Main from './pages/Main';
import SideBarre from './SideBarre';

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
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <SideBarre active={isActive} />
          <Main active={isActive} />
          <Toggler onClick={activateSideBar} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
