import React from 'react';
import styled from 'styled-components';
import { getProperty, getButtonStyle, getButtonIconStyle } from '../utility';

const SButton = styled.button`
  z-index: 0;
  display: ${({ $fullwidth }) => ($fullwidth ? 'block' : 'inline')};
  width: ${({ $fullwidth }) => ($fullwidth ? '100%' : 'fit-content')};
  user-select: none;
  outline: none;
  padding: 0.5em 1rem;
  min-width: 90px;
  overflow: hidden;
  position: relative;

  cursor: pointer;

  ${getButtonStyle}
  ${(props) => getProperty('border-radius', props)};
`;

const SIButton = styled.button`
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  outline: none;
  min-width: fit-content;
  overflow: hidden;
  position: relative;

  cursor: pointer;

  ${getButtonIconStyle}

  ${(props) => getProperty('border-radius', props)};
  &:active {
    transform: scale(1, 0.99);
  }
`;

export { SButton, SIButton };
