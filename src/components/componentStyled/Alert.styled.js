import styled from 'styled-components';
import theme from '../../theme';

const AlertContainer = styled.div`
  align-items: center;
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  background: ${theme.colors.$black};
  border-radius: 4px;
  border-left: ${({ $primary, $info, $danger, $warning, $success, $black }) => {
    if ($primary) return 'solid 5px ' + theme.colors.$primary;
    if ($info) return 'solid 5px ' + theme.colors.$info;
    if ($danger) return 'solid 5px ' + theme.colors.$danger;
    if ($warning) return 'solid 5px ' + theme.colors.$warning;
    if ($success) return 'solid 5px ' + theme.colors.$success;
    if ($black) return 'solid 5px ' + theme.colors.$black;
    return 'solid 5px ' + theme.colors.$danger;
  }};
  color: ${({ primary, info, danger, warning, success, black }) => {
    if (primary) return theme.colors.$primary;
    if (info) return theme.colors.$info;
    if (danger) return theme.colors.$danger;
    if (warning) return theme.colors.$warning;
    if (success) return theme.colors.$success;
    if (black) return theme.colors.$black;
    return theme.colors.$danger;
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
