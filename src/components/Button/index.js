import React from 'react';
import PropTypes from 'prop-types';
import { SButton } from './Button.styled';

const Button = ({ ...props }) => {
  return (
    <SButton {...props}>{props.children || props.label || 'Button'}</SButton>
  );
};
Button.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node,
};
export default Button;
