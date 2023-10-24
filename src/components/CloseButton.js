import React from 'react';
import PropTypes from 'prop-types';
const CloseButton = ({ onClick, ...rest }) => {
  return (
    <div
      style={{ cursor: 'pointer', height: '24px', width: '24px' }}
      onClick={onClick}
      role="closeButton"
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z"
          fill="gray"
        />
      </svg>
    </div>
  );
};
CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;