import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AlertContainer,
  AlertInfo,
  AlertTitle,
  AlertDescription,
} from './Alert.styled';
import Close from '../Icons/Close';
import Button from '../Button';

const Alert = ({ title, description, isOpen, ...rest }) => {
  const [isActive, setIsOpen] = useState(isOpen);
  const close = () => {
    setIsOpen(false);
  };
  if (isActive)
    return (
      <AlertContainer $isOpen={isActive} {...rest}>
        <AlertInfo>
          <AlertTitle data-testid="alert-title">{title}</AlertTitle>
          <AlertDescription data-testid="alert-description">
            {description}
          </AlertDescription>
        </AlertInfo>
        <Button $gray1 role="closeButton" icon={<Close />} onClick={close} />
      </AlertContainer>
    );

  return null;
};

Alert.defaultProps = {
  isOpen: true,
};
Alert.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Alert;
