import React, { useState } from 'react';
import PropTypes from 'prop-types';
import View from './View';
import Viewoff from './Viewoff';

const ToggleView = ({ onClick }) => {
  const [active, setActive] = useState(false);
  const toggle = (e) => {
    e.stopPropagation();
    setActive(!active);
    onClick(e);
  };
  return (
    <span style={{ cursor: 'pointer' }} onClick={toggle}>
      {active ? <Viewoff /> : <View />}
    </span>
  );
};

ToggleView.propTypes = {
  onClick: PropTypes.func,
};
export default ToggleView;
