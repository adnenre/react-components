// utils.js

import { css } from 'styled-components';
import theme from '../theme';
export const getButtonStyle = ({ ...props }) => {
  const colorProps = Object.keys(theme.colors);

  for (const prop of colorProps) {
    if (props['disabled']) {
      return css`
        background: ${theme.colors.$grayLight};
        color: ${theme.colors.$gray};
        border: none;
        cursor: not-allowed;

        border: ${theme.border.thin} ${theme.colors.$grayLight};
        &:hover {
          color: ${theme.colors.$gray};
        }
      `;
    }
    if (props[prop] && !props['$outline']) {
      const color = theme.colors[prop];
      return css`
        background: ${color};
        color: ${theme.colors.$white};
        border: ${theme.border.thin} ${color};
        &:hover {
          box-shadow: ${theme.boxShadow.default};
        }
        &:active {
          color: ${color};
          background: ${theme.colors.$white};
        }
      `;
    }
    if (props[prop] && props['$outline']) {
      const color = theme.colors[prop];
      return css`
        background: ${theme.colors.$white};
        color: ${color};
        border: ${theme.border.thin} ${color};

        &:active {
          color: ${color};
          background-color: ${theme.colors.$white};
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
          background: ${theme.colors[prop]};
        }
        &:hover {
          color: ${theme.colors.$white};
        }
        &:hover::before {
          width: 100%;
        }
      `;
    }
  }

  // If none of the color props are present, use the default color

  return css`
    background: ${theme.colors.$grayDark};
    color: ${theme.colors.$white};
    border: ${theme.border.thin} ${theme.colors.$grayDark};

    &:active {
      color: ${theme.colors.$grayDark};
      background: ${theme.colors.$white};
      border: ${theme.border.thin} ${theme.colors.$grayDark};
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
