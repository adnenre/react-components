import styled from 'styled-components';
import theme from '../../theme';

const StepperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  width: 50%;
  margin: 0 auto;
`;
const StepContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
`;

const Step = styled.div`
  background-color: ${({ $active }) =>
    $active ? theme.color.$primary : theme.color.$grayLight};
  border-radius: 50%;
  margin: 3px;
  width: 28px;
  height: 28px;
  border-width: 1px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  position: relative;
  z-index: 1;
  overflow: visible;
  transition-property: color, background-color, border-color;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
  border-color: ${theme.color.$primary};
  &::after {
    border-radius: 100%;
    content: '';
    border-width: 1px;
    border-style: solid;
    border-color: inherit;
    pointer-events: none;
    display: ${({ $active }) => ($active ? 'block' : 'none')};
    position: absolute;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
    z-index: 2;
  }
`;

export { StepperContainer, StepContainer, Step };
