import styled from 'styled-components';
import theme from '../../theme';

const TogglerContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  > svg {
    position: fixed;
    bottom: 20px;
    right: 20px;
    transition: all ease-in-out 500ms;
    cursor: pointer;

    > circle {
      fill: ${theme.colors.$primary};
    }
    > rect {
      fill: ${theme.colors.$default};
    }
    :hover {
      > rect {
        fill: ${theme.colors.$primary};
      }
      > circle {
        fill: ${theme.colors.$default};
      }
    }
  }
`;

export { TogglerContainer };
