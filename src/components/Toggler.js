import React from 'react';
import PropTypes from 'prop-types';
import { TogglerContainer } from './componentStyled/SideBarre.styled';

const Toggler = ({ onClick }) => {
  return (
    <TogglerContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        onClick={onClick}
      >
        <circle cx="25" cy="25" r="20" fill="#fff" />
        <rect x="12" y="15" width="25" height="4" rx="3" fill="#fff" />
        <rect x="12" y="23" width="25" height="4" rx="3" fill="#fff" />
        <rect x="12" y="31" width="25" height="4" rx="3" fill="#fff" />
      </svg>
    </TogglerContainer>
  );
};

Toggler.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Toggler;
