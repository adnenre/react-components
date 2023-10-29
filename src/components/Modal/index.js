import React, { createContext, useState, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  WrapperContainer,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalStyledResizeIcon,
} from './Modal.styled';
import CloseButton from '../CloseButton';

import useFullScreen from '../../hooks/useFullScreen';
import useClickOutside from '../../hooks/useClickOutside';
import MemoizedPortal from '../../hooks/usePortal';
import FullScreenIcon from '../FullScreenIcon';
import useEscape from '../../hooks/useEscape';

const ModalResizeIcon = ({ onMouseDown }) => {
  return (
    <ModalStyledResizeIcon onMouseDown={onMouseDown}>
      <svg width="15" height="15">
        <g>
          <ellipse ry="2" rx="2" cy="7.59375" cx="12.625" fill="#546E7A" />
          <ellipse ry="2" rx="2" cy="2.25" cx="12.75" fill="#546E7A" />
          <ellipse ry="2" rx="2" cy="12.75" cx="7.25" fill="#546E7A" />
          <ellipse ry="2" rx="2" cy="7.6875" cx="7.375" fill="#546E7A" />
          <ellipse ry="2" rx="2" cy="12.75" cx="12.625" fill="#546E7A" />
          <ellipse ry="2" rx="2" cy="12.875" cx="2.25" fill="#546E7A" />
        </g>
      </svg>
    </ModalStyledResizeIcon>
  );
};

ModalResizeIcon.propTypes = {
  onMouseDown: PropTypes.func,
};

// modal context
const ModalContext = createContext();

// modal component
const Modal = ({
  onToggleModal,
  resizable,
  draggable,
  dialog,
  show,
  fullscreen,
  children,
  ...restProps
}) => {
  // profider
  const { Provider } = ModalContext;
  // modalContainer ref
  const modalContainer = useRef(null);
  // modal min size
  const modalMinSize = { minWidth: 500, minHeight: 150 };

  // fullscreen support usefull to display/not the button
  const [supportFullScreen] = useState(fullscreen);
  // fullscreen state
  const [isFullscreen, setIsFullscreen] = useFullScreen(modalContainer);
  // modal type dialog
  const [isDialog] = useState(dialog);

  // dragging state
  const [isDragging, setDragging] = useState(false);
  // cordinate
  const [size, setSize] = useState(null);
  // resize state
  const [resize, setResize] = useState(false);
  // draggin position
  const [position, setPosition] = useState(null);
  // fullscreen toggle function
  const onToggleFullScreen = () =>
    isFullscreen ? document.exitFullscreen() : setIsFullscreen();

  useClickOutside(modalContainer, onToggleModal);
  useEscape(modalContainer, onToggleModal);
  //################       Drag logic    ####################
  const onDragingStart = (e) => {
    if (!draggable) return;
    if (isDragging) return;
    e.stopPropagation();
    e.preventDefault();

    // event
    const { clientX, clientY } = e;

    // current modal
    const element = modalContainer.current;

    const initialX = clientX - element.offsetLeft;
    const initialY = clientY - element.offsetTop;
    const maxDrag = { w: window.innerWidth, h: window.innerHeight - 100 };
    // state of the modal
    setDragging(true);

    const onDragging = (e) => {
      // keep mouse 'move' while moving
      document.body.style.cursor = 'move';

      const { clientX, clientY } = e;
      let left = clientX - initialX;
      let top =
        clientY - initialY > 0
          ? clientY - initialY > maxDrag.h
            ? maxDrag.h
            : clientY - initialY
          : 0;

      // set position while moving the modal
      setPosition({ left, top });
    };

    const onDraggingStop = () => {
      setDragging(false);

      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', onDragging);
      document.removeEventListener('mouseup', onDraggingStop);
    };
    document.addEventListener('mousemove', onDragging);
    document.addEventListener('mouseup', onDraggingStop);
  };
  //################       End Drag logic    ################
  //################       resize logic    ##################

  const onResizeStart = (e) => {
    // prevent bubeling
    e.stopPropagation();
    // prevent double reresizing
    if (resize) return;
    // container Ref
    const element = modalContainer.current;
    // min Size
    const { minWidth, minHeight } = modalMinSize;
    // resizing is active
    setResize(true);

    // start resizing
    const onResizing = (e) => {
      e.stopPropagation();
      // event cordinate
      const { clientX, clientY } = e;
      // set cursor while resizing
      document.body.style.cursor = 'nw-resize';
      // width
      let w =
        clientX - element.offsetLeft > minWidth
          ? clientX - element.offsetLeft
          : minWidth;
      // height
      let h =
        clientY - element.offsetTop > minHeight
          ? clientY - element.offsetTop
          : minHeight;
      // set new size
      setSize({ w, h });
    };

    const onStopResize = () => {
      setResize(false);
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', onResizing);
      document.removeEventListener('mouseup', onStopResize);
    };
    document.addEventListener('mousemove', onResizing);
    document.addEventListener('mouseup', onStopResize);
  };
  // ############### end resize logic ##############################

  // Close Modal on click outside

  return (
    <Provider
      value={{
        onToggleModal,
        onToggleFullScreen,
        onDragingStart,
        draggable,
        supportFullScreen,
      }}
    >
      {show && (
        <MemoizedPortal id="modal-root">
          <WrapperContainer dialog={isDialog}>
            <ModalContainer
              dialog={isDialog}
              ref={modalContainer}
              $position={position}
              size={size}
              {...restProps}
            >
              {children}
              {resizable && <ModalResizeIcon onMouseDown={onResizeStart} />}
            </ModalContainer>
          </WrapperContainer>
        </MemoizedPortal>
      )}
    </Provider>
  );
};
//##### propsTypes
Modal.propTypes = {
  children: PropTypes.any.isRequired,
  onToggleModal: PropTypes.func.isRequired,
  lg: PropTypes.bool,
  draggable: PropTypes.bool,
  fullscreen: PropTypes.bool,

  dialog: PropTypes.bool,
  resizable: PropTypes.bool,
  show: PropTypes.bool.isRequired,
};
//##### default PropTypes
Modal.defaultProps = {
  fullscreen: false,
  draggable: false,
};
//#################################################
//###########      Title         ##################
//#################################################

const Title = (props) => <h3 {...props}>{props.title}</h3>;
Title.propTypes = {
  title: PropTypes.any.isRequired,
};
//#################################################
//###########       Header     ####################
//#################################################

const Header = (props) => {
  const { title, ...rest } = props;
  const {
    onToggleModal,
    onToggleFullScreen,
    draggable,
    onDragingStart,
    supportFullScreen,
  } = useContext(ModalContext);

  return (
    <ModalHeader draggable={draggable} onMouseDown={onDragingStart} {...rest}>
      <Title title={title} />
      <div style={{ display: 'flex' }}>
        {supportFullScreen && <FullScreenIcon onClick={onToggleFullScreen} />}
        <CloseButton role="closeButton" onClick={onToggleModal} />
      </div>
    </ModalHeader>
  );
};

//#################################################
//###########       Body         ##################
//#################################################

const Body = (props) => <ModalBody {...props}>{props.children}</ModalBody>;

//#################################################
//###########       Footer       ##################
//#################################################

const Footer = (props) => (
  <ModalFooter {...props}>{props.children}</ModalFooter>
);

// static
Modal.Header = Header;
Modal.Title = Title;
Modal.Body = Body;
Modal.Footer = Footer;
Header.propTypes = {
  title: PropTypes.any,
  draggable: PropTypes.bool,
};
Body.propTypes = {
  children: PropTypes.any,
};
Footer.propTypes = {
  children: PropTypes.any,
  resizable: PropTypes.bool,
};

export default Modal;
