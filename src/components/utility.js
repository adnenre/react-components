// utils.js

import { css } from 'styled-components';
import theme from '../theme';

export const getBgColor = ({ theme, ...props }) => {
  const colorProps = Object.keys(theme.colors);

  const defaultColor = theme.colors.$default;
  for (const prop of colorProps) {
    if (props[prop]) {
      const color = theme.colors[prop];
      return css`
        background-color: ${color};
        color: ${defaultColor};
      `;
    }
  }

  // If none of the color props are present, use the default color

  return css`
    background-color: ${defaultColor};
  `;
};

export const getHoverEffect = ({ theme, ...props }) => {
  const colorProps = Object.keys(theme.colors);
  const defaultColor = theme.colors.$default;
  for (const prop of colorProps) {
    if (props[prop]) {
      const bgColor = theme.colors[prop];
      return css`
        &:hover {
          background-color: ${defaultColor};
          color: ${bgColor};
          cursor: pointer;
        }
      `;
    }
  }
  return css`
    &:hover {
      color: ${defaultColor};
      background-color: ${theme.colors.$primary};
      cursor: pointer;
    }
  `;
};

export const getBorderColor = ({ theme, ...props }) => {
  const colorProps = Object.keys(theme.colors);

  for (const prop of colorProps) {
    if (props[prop]) {
      const color = theme.colors[prop];
      return css`
        border: solid 1px ${color};
      `;
    }
  }

  // If none of the color props are present, use the default color
  const defaultColor = theme.colors.$default;
  return css`
    border: solid 1px ${defaultColor};
  `;
};

/** BUTTON CONFIGURATION */
