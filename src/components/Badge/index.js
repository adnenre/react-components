import React from 'react';
import PropTypes from 'prop-types';
import SBadge from './Badge.Styled';

const Badge = ({ ...props }) => {
  return <SBadge {...props}>{props.children || props.label || 'Badge'}</SBadge>;
};
Badge.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node,
};
export default Badge;
