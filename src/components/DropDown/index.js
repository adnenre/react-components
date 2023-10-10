/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import {
  DropDownContainer,
  DropDownHeader,
  DropDownHeaderContent,
  DropDownMenu,
  DropDownItem,
  DropDownCarretStyled,
} from './DropDown.styled';
import PropTypes from 'prop-types';
import useClickOutside from '../../hooks/useClickOutslide';

const DropDownCarret = ({ isOpen }) => {
  const style = { transform: isOpen ? 'rotatez(90deg)' : 'rotatez(0deg)' };
  return (
    <DropDownCarretStyled $isOpen={isOpen}>
      <svg
        style={style}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path d="M8 11.172l-4.293-4.293a1 1 0 1 1 1.414-1.414L8 8.344l3.88-3.879a1 1 0 0 1 1.415 1.414L8 11.172z" />
      </svg>
    </DropDownCarretStyled>
  );
};

DropDownCarret.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  });

  return keyPressed;
};
const DropDown = ({ items, onSelectedItem, active }) => {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState(items[0]);
  const [cursor, setCursor] = useState(0);
  const [keyPressed, setKeyPressed] = useState(false);
  const downPress = useKeyPress('ArrowDown');
  const upPress = useKeyPress('ArrowUp');
  const enterPress = useKeyPress('Enter');
  const containerRef = useRef(null);
  const myRef = useRef(null);
  const handleSelected = (id) => (e) => {
    e.preventDefault();
    setSelected(items.find((item) => item.id === id));
    // close dropdown menu
    handleToggle();
    onSelectedItem(id);
  };
  const resetKeyPressed = () => setKeyPressed(false);
  const closeDropDown = () => setToggle(false);
  const handleToggle = () => {
    setToggle(!toggle);
    setCursor(0);

    // eslint-disable-next-line no-unused-expressions
    toggle === false ? resetKeyPressed() : null;
  };
  useEffect(() => {
    if (toggle && items.length && downPress) {
      setCursor((prevState) =>
        prevState < items.length - 1 ? prevState + 1 : prevState
      );
      setKeyPressed(true);
      myRef.current.scrollTo(0, myRef.current.scrollTop + 50);
    }
  }, [downPress]);
  useEffect(() => {
    if (toggle && items.length && upPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
      setKeyPressed(true);
      myRef.current.scrollTo(0, myRef.current.scrollTop - 50);
    }
  }, [upPress]);
  useEffect(() => {
    if (toggle && items.length && enterPress) {
      setSelected(items[cursor]);
      handleToggle();
      onSelectedItem(items[cursor].id);
    }
  }, [cursor, enterPress]);
  useClickOutside(containerRef, closeDropDown);
  return (
    <div ref={containerRef}>
      <DropDownContainer>
        <DropDownHeader onClick={handleToggle} $active={active}>
          <DropDownHeaderContent>{selected.title}</DropDownHeaderContent>
          <DropDownCarret isOpen={active} />
        </DropDownHeader>
        {toggle && (
          <DropDownMenu ref={myRef}>
            {items.map((item, i) => (
              <DropDownItem
                key={i}
                id={item.id}
                onClick={handleSelected(item.id)}
                $active={i === cursor && keyPressed}
                selected={selected.id === item.id}
              >
                {item.title}
              </DropDownItem>
            ))}
          </DropDownMenu>
        )}
      </DropDownContainer>
    </div>
  );
};
DropDown.defaultProps = {
  items: [{ id: 1, title: 'first item' }],
  onSelectedItem: () => {},
  active: false,
};
DropDown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onSelectedItem: PropTypes.func,
  active: PropTypes.bool,
};

export default DropDown;
