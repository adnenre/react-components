import React, { useState } from 'react';
import routes from './routes';
import Toggler from './components/Toggler';
import Main from './pages/Main';
import SideBarre from './components/SideBarre';
import './styles.css';

const Application = () => {
  const [isActive, setActive] = useState(false);
  const activateSideBar = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };
  return (
    <div className="App">
      <SideBarre routes={routes} active={isActive} />
      <Main active={isActive} />

      <Toggler
        onClick={activateSideBar}
        withTooltip
        text="Click here to Toggle sidebar"
      />
    </div>
  );
};

export default Application;
