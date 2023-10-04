import styled from 'styled-components';
import theme from '../theme';

const Title = styled.h5`
  font-size: 1.5rem;
  color: ${({ $primary, $info, $danger, $warning, $success, $black }) => {
    if ($primary) return theme.colors.$primary;
    if ($info) return theme.colors.$$info;
    if ($danger) return theme.colors.$$danger;
    if ($warning) return theme.colors.$$warning;
    if ($success) return theme.colors.$$success;
    if ($black) return theme.colors.$$black;

    return theme.colors.$white;
  }};
`;

export default Title;
