import React from 'react';
import PropTypes from 'prop-types';
import { TogglerContainer, TogglerIcon } from './Toggler.Styled';
import Tooltip from '../Tooltip';

const Toggler = ({ onClick }) => {
  return (
    <TogglerContainer>
      <Tooltip text="Click here to Toggle sidebar" $left>
        <TogglerIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            onClick={onClick}
          >
            <circle cx="25" cy="25" r="20" />
            <rect x="12" y="17" width="25" height="2" rx="3" />
            <rect x="12" y="25" width="25" height="2" rx="3" />
            <rect x="12" y="32" width="25" height="2" rx="3" />
          </svg>
        </TogglerIcon>
      </Tooltip>
    </TogglerContainer>
  );
};

Toggler.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Toggler;
