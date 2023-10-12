import React from 'react';
import PropTypes from 'prop-types';
import SBadge from './Badge.Styled';

const Badge = ({ ...props }) => {
  return <SBadge {...props}>{props.children || props.label}</SBadge>;
};

Badge.defaultProps = {
  label: 'Badge',
};
Badge.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node,
};
export default Badge;
