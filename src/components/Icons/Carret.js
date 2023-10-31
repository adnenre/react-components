import React from 'react';
import PropTypes from 'prop-types';
const Carret = ({ $isOpen }) => {
  const style = { transform: $isOpen ? 'rotatez(90deg)' : 'rotatez(0deg)' };
  return (
    <svg
      style={style}
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"></path>
    </svg>
  );
};

Carret.propTypes = {
  $isOpen: PropTypes.bool,
};

export default Carret;
