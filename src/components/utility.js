// utils.js

import { css } from 'styled-components';
import theme from '../theme';

const colorProps = Object.keys(theme.color);

export const getButtonStyle = ({ ...props }) => {
  for (const prop of colorProps) {
    if (props['disabled']) {
      return css`
        background: ${theme.color.$gray2};
        color: ${theme.color.$gray6};
        border: none;
        cursor: not-allowed;

        border: ${theme.border.thin} ${theme.color.$gray2};
      `;
    }
    if (props[prop] && !props['$outline']) {
      const color = theme.color[prop];
      return css`
        background: ${color};
        color: ${theme.color.$white};
        border: ${theme.border.thin} ${color};
        &:hover {
          box-shadow: ${theme.boxShadow.default};
        }
        &:active {
          color: ${color};
          background: ${theme.color.$white};
          box-shadow: none;
        }
      `;
    }
    if (props[prop] && props['$outline']) {
      const color = theme.color[prop];
      return css`
        background: ${theme.color.$white};
        color: ${color};
        border: ${theme.border.thin} ${color};

        &:active {
          color: ${color};
          background-color: ${theme.color.$white};
        }
        &::before {
          content: '';
          position: absolute;
          z-index: -1;
          transition: 0.2s;
          top: 0;
          left: 0;
          width: 0px;
          height: 100%;
          background: ${theme.color[prop]};
        }
        &:hover {
          color: ${theme.color.$white};
        }
        &:hover::before {
          width: 100%;
        }
      `;
    }
  }

  // If none of the color props are present, use the default color

  return css`
    background: ${theme.color.$darkBlue5};
    color: ${theme.color.$white};
    border: ${theme.border.thin} ${theme.color.$darkBlue5};

    &:active {
      color: ${theme.color.$darkBlue5};
      background: ${theme.color.$white};
      border: ${theme.border.thin} ${theme.color.$darkBlue5};
    }
  `;
};
export const getBadgetyle = ({ ...props }) => {
  for (const prop of colorProps) {
    if (props[prop] && !props['$outline']) {
      return css`
        background: ${theme.color[prop]};
        color: ${theme.color.$white};
        border: ${theme.border.thin} ${theme.color[prop]};
      `;
    }
    if (props[prop] && props['$outline']) {
      return css`
        background: ${theme.color.$white};
        color: ${theme.color[prop]};
        border: ${theme.border.thin} ${theme.color[prop]};
      `;
    }
  }

  // If none of the color props are present, use the default color

  return css`
    background: ${theme.color.$darkBlue5};
    color: ${theme.color.$white};
    border: ${theme.border.thin} ${theme.color.$darkBlue5};
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

export const getProperty = (cssProperty, props) => {
  for (const prop of Object.keys(theme[cssProperty])) {
    if (props[prop]) {
      return `
        ${[cssProperty]}: ${theme[cssProperty][prop]};
      `;
    }
  }

  return `
     ${[cssProperty]}: ${theme[cssProperty].$default};
  `;
};
