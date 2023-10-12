// utils.js

import { css } from 'styled-components';

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

const getHoverEffect = ({ theme, ...props }) => {
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

export const isImageUrl = (url) => {
  const supportedExtensions = [
    '.jpg',
    '.jpeg',
    '.png',
    '.gif',
    '.svg',
    '.webp',
  ];
  const lowercasedUrl = url.toLowerCase();
  return supportedExtensions.some((ext) => lowercasedUrl.endsWith(ext));
};
