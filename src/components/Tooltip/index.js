import React, { useState } from 'react';
import { TooltipContainer, TooltipText } from './Tooltip.styled';
import PropTypes from 'prop-types';

const Tooltip = ({ text, children, ...rest }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <TooltipContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isHovered && (
        <TooltipText $isHovered={isHovered} {...rest}>
          {text}
        </TooltipText>
      )}
    </TooltipContainer>
  );
};
Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Tooltip;
