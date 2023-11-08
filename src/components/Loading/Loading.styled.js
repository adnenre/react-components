import styled, { keyframes } from 'styled-components';
import theme from '../../theme';
import { getProperty } from '../utility';
const bounce1 = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-15px);
  }
`;

const bounce2 = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const bounce3 = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-15px);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  > div {
    ${(props) => getProperty('background', props)}
  }
`;

const Dot = styled.div`
  width: 15px;
  height: 15px;
  // Color of the dots
  border-radius: 50%;
  margin: 0 5px; // Adjust the spacing between dots
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;

const Dot1 = styled(Dot)`
  animation-name: ${bounce1};
  animation-delay: 0s;
`;

const Dot2 = styled(Dot)`
  animation-name: ${bounce2};
  animation-delay: 0.2s;
`;

const Dot3 = styled(Dot)`
  animation-name: ${bounce3};
  animation-delay: 0.4s;
`;

export { LoadingContainer, Dot1, Dot2, Dot3 };
