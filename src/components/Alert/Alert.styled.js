import styled from 'styled-components';
import theme from '../../theme';
import { getProperty } from '../utility';

const alertBorder = theme.components.alert['border-left'];
const AlertContainer = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  align-items: center;
  width: 100%;
  margin: 0.25rem 0;
  padding: 0.5em;
  font-size: 1rem;
  background: ${theme.color.$black};
  ${(props) => getProperty('border-radius', props)}
  ${(props) => getProperty('color', props)}
  border-left: ${({ $primary, $info, $danger, $warning, $success, $black }) => {
    if ($primary) return alertBorder + theme.color.$primary;
    if ($info) return alertBorder + theme.color.$info;
    if ($danger) return alertBorder + theme.color.$danger;
    if ($warning) return alertBorder + theme.color.$warning;
    if ($success) return alertBorder + theme.color.$success;
    if ($black) return alertBorder + theme.color.$black;
    return alertBorder + theme.color.$primary;
  }};

  display: flex;
  justify-content: space-between;
`;
const AlertInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AlertTitle = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1rem;

  text-align: left;
  color: white;
`;
const AlertDescription = styled.h5`
  font-size: 0.8rem;
  color: white;
  text-align: left;
`;

export { AlertContainer, AlertInfo, AlertTitle, AlertDescription };
