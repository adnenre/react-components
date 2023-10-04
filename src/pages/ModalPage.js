import { Title } from '../components/Portlet/Portlet.Styled';
import React, { useState } from 'react';

import {
  Portlet,
  PortletHeader,
  PortletBody,
  PortletFooter,
} from '../components/Portlet/Portlet.Styled';
import Modal from '../components/Modal';

import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';
import Button from '../components/Button';
const ModalPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <Portlet>
      <PortletHeader>
        <Title>Table component</Title>
      </PortletHeader>
      <PortletBody>
        <Button $primary onClick={openModal}>
          Open Modal
        </Button>
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <h2>Modal Content</h2>
          <p>This is a simple modal example.</p>
        </Modal>
      </PortletBody>
      <PortletFooter>
        <Toggle>
          <PrismCode component="pre" className="language-markup" target>
            {`
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
            `}
          </PrismCode>
        </Toggle>
      </PortletFooter>
    </Portlet>
  );
};

export default ModalPage;
