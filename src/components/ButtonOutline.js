import React, { Component } from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { getBgColor } from './utility';

const border = 'solid 1px ';
const ButtonOutline = styled.button`
  z-index: 0;
  display: ${({ $fullwidth }) => ($fullwidth ? 'block' : 'inline')};
  width: ${(props) => (props.$fullwidth ? '100%' : 'initial')};
  padding: 0.5em 1rem;

  outline: none;
  position: relative;
  border: ${({ $primary, $info, $danger, $warning, $success, $black }) => {
    if ($primary) return border + theme.colors.$primary;
    if ($info) return border + theme.colors.$info;
    if ($danger) return border + theme.colors.$danger;
    if ($warning) return border + theme.colors.$warning;
    if ($success) return border + theme.colors.$success;
    if ($black) return border + theme.colors.$black;
    return border + theme.colors.$default;
  }};

  cursor: pointer;
  color: ${({ $primary, $info, $danger, $warning, $success, $black }) => {
    if ($primary || $info || $danger || $warning || $success || $black)
      return theme.colors.$default;
    return theme.colors.$black;
  }};

  ${getBgColor}

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
    color: ${({ $primary, $info, $danger, $warning, $success, $black }) => {
      if ($primary) return theme.colors.$primary;
      if ($info) return theme.colors.$info;
      if ($danger) return theme.colors.$danger;
      if ($warning) return theme.colors.$warning;
      if ($success) return theme.colors.$success;
      if ($black) return theme.colors.$black;

      return theme.colors.$black;
    }};
    &:hover::before {
      width: 100%;
    }
  }
`;

export default ButtonOutline;
