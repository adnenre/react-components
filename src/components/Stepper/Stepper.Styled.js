import styled from 'styled-components';
import theme from '../../theme';

const StepperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
  }
`;
const StepperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
  }
`;
const StepContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    > p {
      margin: 0 0.5rem 0 0.2rem;
    }
  }
`;
const StepperButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  @media (max-width: 768px) {
  }
`;
const Step = styled.div`
  background-color: ${({ $active }) =>
    $active ? theme.color.$primary : theme.color.$grayLight};
  border-radius: 50%;
  margin: 5px;
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
  @media (max-width: 768px) {
  }
`;

export {
  StepperWrapper,
  StepperContainer,
  StepContainer,
  Step,
  StepperButtonContainer,
};
