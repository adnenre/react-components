// utils.js

import { css } from 'styled-components';
import theme from '../theme';

export const setTranspancy = (hexColor, alpha) => {
  // Ensure the alpha value is between 0 and 1

  // Remove any leading '#' from the HEX color
  hexColor = hexColor.replace(/^#/, '');

  // Parse the HEX color into RGB components
  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);

  // Create the RGBA color with the specified alpha
  const rgbaColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;

  return rgbaColor;
};

const colorProps = Object.keys(theme.color);

export const getButtonStyle = ({ ...props }) => {
  for (const prop of colorProps) {
    if (props[prop]) {
      const color = theme.color[prop];
      if (props['disabled']) {
        return css`
          color: ${color};
          background: ${setTranspancy(color, 0.1)};
          border: ${theme.border.thin} transparent;
          cursor: not-allowed;
        `;
      }
      if (props['$link']) {
        return css`
          color: ${color};
          background: ${theme.color.$white};
          border: ${theme.border.thin} transparent;
          transition: 0.2s;
          &:hover {
            color: ${color};
            background: ${setTranspancy(color, 0.1)};
            border: ${theme.border.thin} transparent;
          }
          &:active {
            color: ${color};
            background: ${setTranspancy(color, 0.1)};
            border: ${theme.border.thin} ${color};
          }
        `;
      }
      if (!props['$outline']) {
        return css`
          background: ${color};
          color: ${theme.color.$white};
          border: ${theme.border.thin} ${color};
          transition: 0.2s;
          &:hover {
            background: ${setTranspancy(color, 0.9)};
            box-shadow: ${theme.boxShadow.default};
          }
          &:active {
            color: ${color};
            background: ${theme.color.$white};
            box-shadow: none;
          }
        `;
      }
      if (props['$outline']) {
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
          &:active {
            color: ${theme.color[prop]};
            &::before {
              background: ${theme.color.$white};
            }
          }
        `;
      }
    }
  }

  const color = theme.color.$darkBlue10;
  if (props['disabled']) {
    return css`
      background: ${setTranspancy(color, 0.3)};
      color: ${theme.color.$white};
      border: ${theme.border.thin} transparent;
      cursor: not-allowed;
    `;
  }
  if (props['$link']) {
    return css`
      color: ${color};
      background: ${theme.color.$white};
      border: ${theme.border.thin} transparent;
      &:hover {
        color: ${color};
        background: ${setTranspancy(color, 0.1)};
        border: ${theme.border.thin} transparent;
      }
      &:active {
        color: ${color};
        background: ${setTranspancy(color, 0.1)};
        border: ${theme.border.thin} ${color};
      }
    `;
  }
  if (!props['$outline']) {
    return css`
      background: ${color};
      color: ${theme.color.$white};
      border: ${theme.border.thin} ${color};
      &:hover {
        background: ${setTranspancy(color, 0.9)};
        box-shadow: ${theme.boxShadow.default};
      }
      &:active {
        color: ${color};
        background: ${theme.color.$white};
        box-shadow: none;
      }
    `;
  }
  if (props['$outline']) {
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
        background: ${color};
      }
      &:hover {
        color: ${theme.color.$white};
      }
      &:hover::before {
        width: 100%;
      }
      &:active {
        color: ${color};
        &::before {
          background: ${theme.color.$white};
        }
      }
    `;
  }

  // If none of the color props are present, use the default color
};

export const getTabStyle = ({ ...props }) => {
  for (const prop of colorProps) {
    if (props[prop]) {
      const color = theme.color[prop];
      if (props['$left']) {
        return css`
          border: solid 1px ${theme.color.$gray1};
          border-right: ${(props) =>
            props.$active ? `solid 3px ${color}` : 'solid 3px transparent'};
          color: ${(props) =>
            props.$active ? color : theme.color.$darkBlue10};
          background: ${(props) =>
            props.$active ? setTranspancy(color, 0.1) : 'white'};
          &:hover {
            color: ${color};
            background: ${setTranspancy(color, 0.1)};
          }
          &:active {
            color: ${color};
            background: ${setTranspancy(color, 0.1)};
          }
        `;
      }
      if (props['$right']) {
        return css`
          border: solid 1px ${theme.color.$gray1};
          border-left: ${(props) =>
            props.$active ? `solid 3px ${color}` : 'solid 3px transparent'};
          color: ${(props) =>
            props.$active ? color : theme.color.$darkBlue10};
          background: ${(props) =>
            props.$active ? setTranspancy(color, 0.1) : 'white'};
          &:hover {
            color: ${color};
            background-color: ${setTranspancy(color, 0.1)};
          }
          &:active {
            color: ${color};
            transform: scale(0.99);
          }
        `;
      }
      return css`
        border: solid 1px ${theme.color.$gray1};
        border-bottom: ${(props) =>
          props.$active ? `solid 3px ${color}` : 'solid 3px transparent'};
        color: ${(props) => (props.$active ? color : theme.color.$darkBlue10)};
        background: ${(props) =>
          props.$active ? setTranspancy(color, 0.1) : 'white'};
        &:hover {
          color: ${color};
          background-color: ${setTranspancy(color, 0.1)};
        }
        &:active {
          color: ${color};
          transform: scale(0.99);
        }
      `;
    }
  }
};
export const getButtonIconStyle = ({ ...props }) => {
  for (const prop of colorProps) {
    if (props['disabled']) {
      return css`
        background: ${theme.color.$gray2};

        border: none;
        cursor: not-allowed;
        color: ${theme.color.$gray6};
      `;
    }
    if (props[prop] && props['aria-label'] == 'icon') {
      const color = theme.color[prop];
      return css`
        background: transparent;
        border: ${theme.border.thin} transparent;
        color: ${color};
        border: none;
        &:hover {
          border-radius: 4px;
          background: ${setTranspancy(color, 0.5)};
        }
        &:active {
          border-radius: 4px;
          border: ${theme.border.thin} ${color};
        }
      `;
    }
  }

  // If none of the color props are present, use the default color

  return css`
    background: transparent;
    border: ${theme.border.thin} transparent;
    color: ${theme.color.$darkBlue5};
    border: none;
    &:active {
      border-radius: 4px;
      color: ${theme.color.$darkBlue5};
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
