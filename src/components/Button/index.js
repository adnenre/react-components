import React from 'react';
import PropTypes from 'prop-types';
import { SButton } from './Button.styled';

const Button = ({ children, label, ...rest }) => {
  return <SButton {...rest}>{children || label}</SButton>;
};
Button.defaultProps = {
  label: 'Button',
};
Button.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node,
};
export default Button;
