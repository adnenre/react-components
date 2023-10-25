import React from 'react';
import PropTypes from 'prop-types';
import { SButton } from './Button.styled';

const Button = ({ children, label, disabled, ...rest }) => {
  return (
    <SButton
      role="button"
      aria-label={label}
      aria-disabled={disabled}
      disabled={disabled}
      {...rest}
    >
      {children || label}
    </SButton>
  );
};
Button.defaultProps = {
  label: 'Button',
};
Button.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node,
  disabled: PropTypes.bool,
};
export default Button;
