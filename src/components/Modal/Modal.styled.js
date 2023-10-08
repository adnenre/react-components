import styled from 'styled-components';
import theme from '../../theme';

// Define your styled-components for the modal
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const ModalHeader = styled.div`
  display: flex;
  border-bottom: solid 1px ${theme.colors.$grayLight};
  padding: 0.5rem;
  justify-content: right;

  background: ${({ $primary }) =>
    $primary ? theme.colors.$primary : theme.colors.$dark};
  color: white;
`;
const ModalBody = styled.div`
  padding: 2rem;
  display: ${({ flex }) => {
    if (flex) return 'flex';
    return 'block';
  }};
  flex-direction: ${({ flex, flexColumn }) => {
    if (flex) return 'row';
    if (flexColumn) return 'column';
    return 'none';
  }};
  flex-wrap: wrap;
`;
const ModalContent = styled.div`
  background-color: #fff;

  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
const ModalFooter = styled.div`
  display: flex;
  padding: 0.5rem;
  border-top: solid 1px ${theme.colors.$grayLight};

  flex-direction: ${({ flex, flexColumn }) => {
    if (flex) return 'row';
    if (flexColumn) return 'column';
    return 'none';
  }};
  flex-wrap: wrap;
  justify-content: ${({ center, spaceBetween }) => {
    if (center) return 'center';
    if (spaceBetween) return 'space-between';
    return 'right';
  }};
  align-items: 'right';
  button:first-child {
    margin-right: 5px;
  }
`;

export { ModalWrapper, ModalHeader, ModalContent, ModalBody, ModalFooter };
