import styled from 'styled-components';
import theme from '../../theme';

const AlertContainer = styled.div`
  align-items: center;
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  background: ${theme.color.$black};
  border-radius: 4px;
  border-left: ${({ $primary, $info, $danger, $warning, $success, $black }) => {
    if ($primary) return 'solid 5px ' + theme.color.$primary;
    if ($info) return 'solid 5px ' + theme.color.$info;
    if ($danger) return 'solid 5px ' + theme.color.$danger;
    if ($warning) return 'solid 5px ' + theme.color.$warning;
    if ($success) return 'solid 5px ' + theme.color.$success;
    if ($black) return 'solid 5px ' + theme.color.$black;
    return 'solid 5px ' + theme.color.$danger;
  }};
  color: ${({ primary, info, danger, warning, success, black }) => {
    if (primary) return theme.color.$primary;
    if (info) return theme.color.$info;
    if (danger) return theme.color.$danger;
    if (warning) return theme.color.$warning;
    if (success) return theme.color.$success;
    if (black) return theme.color.$black;
    return theme.color.$danger;
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
