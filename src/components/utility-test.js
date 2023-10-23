import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import theme from '../theme';
const renderToJson = (C) => (rest) => renderer.create(<C {...rest} />).toJSON();

export { theme, fireEvent, render, renderToJson };
