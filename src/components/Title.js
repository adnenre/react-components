import React, { Component } from 'react';
import styled from 'styled-components';
import color from './utility';

const Title = styled.h5`
  margin: 1rem;
  font-size: 1.5rem;
  color: ${({ primary, info, danger, warning, success, black }) => {
    if (primary) return color.primary;
    if (info) return color.info;
    if (danger) return color.danger;
    if (warning) return color.warning;
    if (success) return color.success;
    if (black) return color.black;

    return color.white;
  }};
`;

export default Title;
