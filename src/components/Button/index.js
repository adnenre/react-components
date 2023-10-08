import React from 'react';
import PropTypes from 'prop-types';
import { SButton } from './Button.styled';

const Button = ({ ...props }) => <SButton {...props}>{props.children}</SButton>;
Button.propTypes = {
  children: PropTypes.node,
};
export default Button;
