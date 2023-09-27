import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import color from './utility';

const ToggleButton = styled.button`
  padding: 0.5em 1rem;
  background: white;
  outline: none;
  display: block;
  position: relative;
  width: 100%;
  border: none;
  color: ${color.warning};
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
`;

const Toggle = ({ children }) => {
  const [active, setActive] = useState(false);

  const toggle = () => setActive(!active);

  return (
    <ToggleButton onClick={toggle}>
      {'VIEW CODE'}
      {active && children}
    </ToggleButton>
  );
};
Toggle.propTypes = {
  children: PropTypes.node,
};
export default Toggle;
