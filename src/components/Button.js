import styled from 'styled-components';
import { getBgColor, getBorderColor, getHoverEffect } from './utility';

const Button = styled.button`
  z-index: 0;
  display: ${({ $fullwidth }) => ($fullwidth ? 'block' : 'inline')};
  width: ${({ $fullwidth }) => ($fullwidth ? '100%' : 'initial')};
  padding: 0.5em 1rem;
  outline: none;
  position: relative;

  cursor: pointer;
  ${getHoverEffect}
  ${getBorderColor}
  ${getBgColor}
`;

export default Button;
