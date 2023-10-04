import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalWrapper,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
} from './componentStyled/Modal.styled';
import Button from './Button';
import CloseButton from './CloseButton';

// Create the Modal component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader $primary>
          <CloseButton onClick={onClose} />
        </ModalHeader>
        <ModalBody> {children}</ModalBody>

        <ModalFooter>
          {/** need to be changed for success handler */}
          <Button $primary onClick={onClose}>
            Accept
          </Button>
          <Button $danger onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
};
export default Modal;
