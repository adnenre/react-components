import React from 'react';
import styled from 'styled-components';
import { getProperty, getButtonStyle } from '../utility';

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

export { SButton };
