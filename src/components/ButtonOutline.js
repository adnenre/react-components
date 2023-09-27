import React, { Component } from 'react';
import styled from 'styled-components';
import color from './utility';

const border = 'solid 1px ';
const ButtonOutline = styled.button`
  z-index: 0;
  display: ${({ fullwidth }) => (fullwidth ? 'block' : 'inline')};
  width: ${(props) => (props.fullwidth ? '100%' : 'initial')};
  padding: 0.5em 1rem;

  outline: none;
  position: relative;
  border: ${({ primary, info, danger, warning, success, black }) => {
    if (primary) return border + color.primary;
    if (info) return border + color.info;
    if (danger) return border + color.danger;
    if (warning) return border + color.warning;
    if (success) return border + color.success;
    if (black) return border + color.black;
    return border + color.default;
  }};

  cursor: pointer;
  color: ${({ primary, info, danger, warning, success, black }) => {
    if (primary || info || danger || warning || success || black)
      return color.default;
    return color.black;
  }};

  background: ${({ primary, info, danger, warning, success, black }) => {
    if (primary) return color.primary;
    if (info) return color.info;
    if (danger) return color.danger;
    if (warning) return color.warning;
    if (success) return color.success;
    if (black) return color.black;

    return color.default;
  }};
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    height: 100%;
    background: white;
    z-index: -1;
    transition: 0.2s;
  }
  &:hover {
    color: ${({ primary, info, danger, warning, success, black }) => {
      if (primary) return color.primary;
      if (info) return color.info;
      if (danger) return color.danger;
      if (warning) return color.warning;
      if (success) return color.success;
      if (black) return color.black;

      return color.black;
    }};
    &:hover::before {
      width: 100%;
    }
  }
`;

export default ButtonOutline;
