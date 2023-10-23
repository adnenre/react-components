import styled from 'styled-components';
import theme from '../../theme';

const TogglerIcon = styled.div`
  height: 38px;
  width: 50px;
`;
const TogglerContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;

  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  svg {
    position: fixed;
    bottom: 20px;
    right: 20px;
    transition: all ease-in-out 500ms;
    cursor: pointer;

    > circle {
      fill: ${theme.color.$primary};
    }
    > rect {
      fill: ${theme.color.$white};
    }
  }
`;

export { TogglerContainer, TogglerIcon };
