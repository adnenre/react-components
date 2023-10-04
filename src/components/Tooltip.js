import React, { useState } from 'react';
import { TooltipContainer, TooltipText } from './Tooltip.styled';
import PropTypes from 'prop-types';

const Tooltip = ({ text, children }) => {
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
      <TooltipText isHovered={isHovered}>{text}</TooltipText>
    </TooltipContainer>
  );
};
Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Tooltip;
