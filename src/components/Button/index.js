import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getBgColor, getBorderColor, getHoverEffect } from '../utility';
import theme from '../../theme';

// const Button = styled.button`
//   z-index: 0;

//   position: relative;

//   cursor: pointer;
//   ${getHoverEffect}
//   ${getBorderColor}
//   ${getBgColor}
// `;

const border = 'solid 1px ';
const SButton = styled.button`
  z-index: 0;
  display: ${({ $fullwidth }) => ($fullwidth ? 'block' : 'inline')};
  width: ${({ $fullwidth }) => ($fullwidth ? '100%' : 'fit-content')};
  user-select: none;
  padding: 0.5em 1rem;
  outline: none;
  padding: 0.5em 1rem;

  overflow: hidden;
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
  color: ${({
    $outline,
    $primary,
    $info,
    $danger,
    $warning,
    $success,
    $black,
  }) => {
    if (
      ($primary || $info || $danger || $warning || $success || $black) &&
      !$outline
    )
      return theme.colors.$default;
    if ($outline) {
      if ($primary) return theme.colors.$primary;
      if ($info) return theme.colors.$info;
      if ($danger) return theme.colors.$danger;
      if ($warning) return theme.colors.$warning;
      if ($success) return theme.colors.$success;
      if ($black) return theme.colors.$black;
    }
    return theme.colors.$black;
  }};

  background: ${({
    $outline,
    $primary,
    $info,
    $danger,
    $warning,
    $success,
    $black,
  }) => {
    if (!$outline) {
      if ($primary) return theme.colors.$primary;
      if ($info) return theme.colors.$info;
      if ($danger) return theme.colors.$danger;
      if ($warning) return theme.colors.$warning;
      if ($success) return theme.colors.$success;
      if ($black) return theme.colors.$black;
    }

    return theme.colors.$default;
  }};
  border-radius: ${({ $pill, $rounded }) => {
    if ($pill) return theme.borderRadius.$pill;
    if ($rounded) return theme.borderRadius.$rounded;
    return theme.borderRadius$default;
  }};
  &::before {
    content: '';
    position: absolute;
    display: ${(props) => (props.disabled ? 'none' : 'block')};
    top: 0;
    left: 0;
    width: 0px;
    height: 100%;
    background: ${({
      $outline,
      $primary,
      $info,
      $danger,
      $warning,
      $success,
      $black,
    }) => {
      if ($outline) {
        if ($primary) return theme.colors.$primary;
        if ($info) return theme.colors.$info;
        if ($danger) return theme.colors.$danger;
        if ($warning) return theme.colors.$warning;
        if ($success) return theme.colors.$success;
        if ($black) return theme.colors.$black;
      }
      return theme.colors.$default;
    }};
    z-index: -1;
    transition: 0.2s;
    border-radius: ${({ $pill, $rounded }) => {
      if ($pill) return theme.borderRadius.$pill;
      if ($rounded) return theme.borderRadius.$rounded;
      return theme.borderRadius$default;
    }};
  }
  &:hover {
    color: ${({
      $outline,
      $primary,
      $info,
      $danger,
      $warning,
      $success,
      $black,
    }) => {
      if (!$outline) {
        if ($primary) return theme.colors.$primary;
        if ($info) return theme.colors.$info;
        if ($danger) return theme.colors.$danger;
        if ($warning) return theme.colors.$warning;
        if ($success) return theme.colors.$success;
        if ($black) return theme.colors.$black;
      }
      return theme.colors.$default;
    }};
    &:hover::before {
      width: 100%;
    }
  }

  ${(props) => {
    if (props.disabled) {
      return `
      cursor : not-allowed;
      color : ${theme.colors.$gray};
      background : ${theme.colors.$grayLight};
      border : solid 1px ${theme.colors.$gray};
      
      &:hover{
       
      
       color : ${theme.colors.$gray};
      }
      `;
    }
  }};
`;

const Button = ({ ...props }) => <SButton {...props}>{props.children}</SButton>;
Button.propTypes = {
  children: PropTypes.node,
};
export default Button;
