import React from 'react';
import styled from 'styled-components';
import color from './utility';
const style = {
  primary: `background:${color.primary} !important; `,
  info: `background:${color.info} !important; `,
  success: `background:${color.success} !important; `,
  danger: `background:${color.danger} !important; `,
  warning: `background:${color.warning} !important; `,
  black: `background:${color.black} !important; `,
  pill: `border-radius: 10px;`,
};
const Badge = styled.span`
  display: inline-block;
  min-width: 10px;
  padding: 4px 7px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  line-height: 1;
  vertical-align: middle;
  white-space: nowrap;
  text-align: center;
  margin: 0.2rem;
  background-color: #eee;

  ${({ primary }) => primary && style.primary};
  ${({ info }) => info && style.info};
  ${({ success }) => success && style.success};
  ${({ danger }) => danger && style.danger};
  ${({ warning }) => warning && style.warning};
  ${({ black }) => black && style.black};
  ${({ pill }) => pill && style.pill};
`;

export default Badge;
