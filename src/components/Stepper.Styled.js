import styled from 'styled-components';

const StepperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: 0 auto;
`;

const Step = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ $active }) => ($active ? '#0074d9' : '#ccc')};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
`;

export { StepperContainer, Step };
