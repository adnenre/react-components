import React, { Component } from 'react';
import styled from 'styled-components';
import color from './utility';

const border = 'solid 1px ';
const Button = styled.button`
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
`;

export default Button;
