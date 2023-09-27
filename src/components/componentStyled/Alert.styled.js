import styled from 'styled-components';
import color from '../utility';

const AlertContainer = styled.div`
  align-items: center;
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  background: ${color.black};
  border-radius: 4px;
  border-left: ${({ primary, info, danger, warning, success, black }) => {
    if (primary) return 'solid 5px ' + color.primary;
    if (info) return 'solid 5px ' + color.info;
    if (danger) return 'solid 5px ' + color.danger;
    if (warning) return 'solid 5px ' + color.warning;
    if (success) return 'solid 5px ' + color.success;
    if (black) return 'solid 5px ' + color.black;
    return 'solid 5px ' + color.danger;
  }};
  color: ${({ primary, info, danger, warning, success, black }) => {
    if (primary) return color.primary;
    if (info) return color.info;
    if (danger) return color.danger;
    if (warning) return color.warning;
    if (success) return color.success;
    if (black) return color.black;
    return color.danger;
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
