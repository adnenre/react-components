import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Toggle = ({ children }) => {
  const [active, setActive] = useState(false);

  const toggle = () => setActive(!active);

  return (
    <>
      <Button $black onClick={toggle} width={100}>
        {'VIEW CODE'}
      </Button>
      {active && children}
    </>
  );
};
Toggle.propTypes = {
  children: PropTypes.node,
};
export default Toggle;
