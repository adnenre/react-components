import styled from 'styled-components';

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipText = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 0.5rem;
  font-size: 0.8rem;

  white-space: nowrap;
  z-index: 1;
  opacity: 0.8;

  display: ${({ $isHovered }) => ($isHovered ? 'block' : 'none')};

  &::after {
    content: '';
    position: absolute;
    border-top: solid 5px #333;
    border-left: solid 5px #333;
    border-right: solid 5px transparent;
    border-bottom: solid 5px transparent;
    transform: rotateZ(45deg);
    top: -5px;
    left: calc(50% - 5px);
  }
`;
