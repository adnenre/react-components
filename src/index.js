import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main';
import SideBarre from './SideBarre';

import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import Toggler from './components/Toggler';

const App = () => {
  const [isActive, setActive] = useState(false);
  const activateSideBar = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <SideBarre active={isActive} />
        <Main active={isActive} />
        <Toggler onClick={activateSideBar} />
      </div>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
