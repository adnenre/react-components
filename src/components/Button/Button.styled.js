import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { getButtonStyle } from '../utility';

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

  cursor: pointer;

  border-radius: ${({ $pill, $rounded }) => {
    if ($pill) return theme.borderRadius.$pill;
    if ($rounded) return theme.borderRadius.$rounded;
    return theme.borderRadius.$default;
  }};

  ${getButtonStyle}
`;

export { SButton };
