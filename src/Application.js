import React, { useState } from 'react';
import { childrenRoutes } from './routes';
import Toggler from './components/Toggler';
import Main from './pages/Main';
import SideBarre from './components/SideBarre';
import { Outlet } from 'react-router-dom';
import './styles.css';

const Application = () => {
  const [isActive, setActive] = useState(false);
  const activateSideBar = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };
  return (
    <div className="App">
      <SideBarre routes={childrenRoutes} active={isActive} />
      <Main active={isActive}>
        <Outlet />
      </Main>
      <Toggler
        onClick={activateSideBar}
        withTooltip
        text="Click here to Toggle sidebar"
      />
    </div>
  );
};

export default Application;
