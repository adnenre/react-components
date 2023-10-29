import React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../../theme';

export const WrapperContainer = styled.div`
  position: ${({ dialog }) => (dialog ? 'absolute' : 'fixed')};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: ${({ dialog }) => (dialog ? '10px' : '100vh')};
  width: ${({ dialog }) => (dialog ? '100vw' : '100vw')};
  padding: 0;
  background: ${({ dialog }) => (dialog ? 'none' : 'rgba(0, 0, 0, 0.3)')};

  display: flex;
  flex-direction: column;
  z-index: 1050;
`;
const animateModal = keyframes`
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
`;

export const ModalContainer = styled.div`
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.3);
  max-width: calc(100vw - 80px);
  max-height: calc(100vh - 80px);
  min-width: ${({ dialog }) => (dialog ? '500px' : 'none')};
  min-height: ${({ dialog }) => (dialog ? 'min-content' : 'none')};
  margin: ${({ $position }) =>
    $position && $position.left ? '0px' : '50px auto'};
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  animation-name: ${animateModal};
  animation-duration: 0.6s;
  position: relative;
  left: ${({ $position }) =>
    $position && $position.left ? $position.left + 'px' : 0};
  top: ${({ $position }) =>
    $position && $position.top ? $position.top + 'px' : 0};
  width: ${({ size, lg }) =>
    size && size.w ? size.w + 'px' : lg ? '80%' : '50%'};
  height: ${({ size }) => (size && size.h ? size.h + 'px' : '')};
  // moblie media query
  @media screen and (max-width: 767px) {
    width: calc(100vw - 20px);
    height: calc(100vh - 20px);
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.color.$gray2};
  cursor: ${({ draggable }) => (draggable ? 'move' : 'auto')};
  padding: 1rem 1.5rem;
  text-align: left;
  font-size: 1.25rem;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.375;
  font-weight: 500;
  opacity: 1;
  text-transform: none;
  vertical-align: unset;
  text-decoration: none;
  color: ${theme.color.$darkBlue8};
  letter-spacing: 0.5px;
`;

export const ModalBody = styled.div`
  justify-content: flex-end;
  overflow: auto;
  padding: 1rem;
  flex: 1 1 auto;
  padding: 1rem 1.5rem;
  text-align: left;
  font-size: 1rem;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.375;
  font-weight: 300;
  opacity: 1;
  text-transform: none;
  vertical-align: unset;
  text-decoration: none;
  color: ${theme.color.$darkBlue10};
  letter-spacing: 0.5px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0.75rem 1rem;
  border-top: 1px solid ${theme.color.$gray2};
  > button {
    min-width: 100px;
  }
  > button ~ button {
    margin-left: 5px;
  }
`;

export const ModalStyledResizeIcon = styled.div`
  height: 18px;
  width: 18px;
  position: absolute;
  bottom: 3px;
  left: calc(100% - 20px);
  cursor: nw-resize;
`;
