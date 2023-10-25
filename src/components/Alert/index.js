import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AlertContainer,
  AlertInfo,
  AlertTitle,
  AlertDescription,
} from './Alert.styled';
import CloseButton from '../CloseButton';

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
        <CloseButton $light onClick={close} />
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
