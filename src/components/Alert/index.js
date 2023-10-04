import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AlertContainer,
  AlertInfo,
  AlertTitle,
  AlertDescription,
  AlertButton,
} from './Alert.styled';
import CloseButton from '../CloseButton';
const Alert = ({ title, desc }) => {
  const [isOpen, setIsOpen] = useState(true);
  const close = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ width: '100%' }}>
      {isOpen && (
        <AlertContainer>
          <AlertInfo>
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{desc} </AlertDescription>
          </AlertInfo>
          <CloseButton onClick={close}>x</CloseButton>
        </AlertContainer>
      )}
    </div>
  );
};

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
export default Alert;
