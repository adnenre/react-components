import React from 'react';
import PropTypes from 'prop-types';
import { SButton, SIButton } from './Button.styled';

const Button = ({ children, label, disabled, role, icon, ...rest }) => {
  if (icon) {
    return (
      <SIButton
        role={role || 'iconButton'}
        aria-label={'icon'}
        aria-disabled={disabled}
        disabled={disabled}
        {...rest}
      >
        {icon}
      </SIButton>
    );
  }
  return (
    <SButton
      role={role || 'button'}
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
  role: 'Button',
};
Button.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node,
  icon: PropTypes.node,
  role: PropTypes.string,
  disabled: PropTypes.bool,
};
export default Button;
