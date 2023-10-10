import styled from 'styled-components';
import { getBgColor } from '../utility';
import theme from '../../theme';
const border = 'solid 1px';
const SBadge = styled.span`
  display: inline-block;
  min-width: 1rem;
  padding: 0.25rem 0.25rem;
  font-size: 0.75rem;
  font-weight: 400;

  line-height: 1;
  vertical-align: middle;
  white-space: nowrap;
  text-align: center;
  margin: 0.2rem;
  border: ${({
    $outline,
    $primary,
    $info,
    $danger,
    $warning,
    $success,
    $black,
  }) => {
    if ($outline) {
      if ($primary) return border + theme.colors.$primary;
      if ($info) return border + theme.colors.$info;
      if ($danger) return border + theme.colors.$danger;
      if ($warning) return border + theme.colors.$warning;
      if ($success) return border + theme.colors.$success;
      if ($black) return border + theme.colors.$black;
    }
    return border + theme.colors.$default;
  }};
  color: ${({
    $outline,
    $primary,
    $info,
    $danger,
    $warning,
    $success,
    $black,
  }) => {
    if (
      ($primary || $info || $danger || $warning || $success || $black) &&
      !$outline
    )
      return theme.colors.$default;
    if ($outline) {
      if ($primary) return theme.colors.$primary;
      if ($info) return theme.colors.$info;
      if ($danger) return theme.colors.$danger;
      if ($warning) return theme.colors.$warning;
      if ($success) return theme.colors.$success;
      if ($black) return theme.colors.$black;
    }
    return theme.colors.$black;
  }};
  background: ${({
    $outline,
    $primary,
    $info,
    $danger,
    $warning,
    $success,
    $black,
  }) => {
    if (!$outline) {
      if ($primary) return theme.colors.$primary;
      if ($info) return theme.colors.$info;
      if ($danger) return theme.colors.$danger;
      if ($warning) return theme.colors.$warning;
      if ($success) return theme.colors.$success;
      if ($black) return theme.colors.$black;
    }

    return theme.colors.$default;
  }};
  border-radius: ${({ $pill, $rounded }) => {
    if ($pill) return theme.borderRadius.$pill;
    if ($rounded) return theme.borderRadius.$rounded;
    return theme.borderRadius.$default;
  }};
`;

export default SBadge;
