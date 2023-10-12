import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

import Badge from './index';
import theme from '../../theme';
const label = 'i m a label';

describe('Test Badge', () => {
  const Component = (props) => (
    <Badge data-testid="badge" label={label} {...props} />
  );

  const renderToJson = (C) => (rest) =>
    renderer.create(<C {...rest} />).toJSON();
  test('renders a badge with the correct label', () => {
    const { getByTestId } = render(<Component />);
    const badge = getByTestId('badge');

    // Assert
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent(label);
  });

  test('check that applyed theme colors props passed correctly', () => {
    const property = 'background';
    const badgePrimary = renderToJson(Component)({ $primary: true });
    const badgeInfo = renderToJson(Component)({ $info: true });
    const badgeWarning = renderToJson(Component)({ $warning: true });
    const badgeSuccess = renderToJson(Component)({ $success: true });
    const badgeDanger = renderToJson(Component)({ $danger: true });
    const badgeBlack = renderToJson(Component)({ $black: true });

    expect(badgePrimary).toHaveStyleRule(property, theme.colors.$primary);
    expect(badgeInfo).toHaveStyleRule(property, theme.colors.$info);
    expect(badgeWarning).toHaveStyleRule(property, theme.colors.$warning);
    expect(badgeSuccess).toHaveStyleRule(property, theme.colors.$success);
    expect(badgeDanger).toHaveStyleRule(property, theme.colors.$danger);
    expect(badgeBlack).toHaveStyleRule(property, theme.colors.$black);
  });

  test('check that $rounded apply correct border radius ', () => {
    const badge = renderToJson(Component)({ $rounded: true });
    expect(badge).toHaveStyleRule('border-radius', theme.borderRadius.$rounded);
  });

  test('check that $pill apply correct border radius ', () => {
    const badge = renderToJson(Component)({ $pill: true });
    expect(badge).toHaveStyleRule('border-radius', theme.borderRadius.$pill);
  });

  test('check that $outline && $primary apply correct styles ', () => {
    const badge = renderToJson(Component)({ $outline: true, $primary: true });
    expect(badge).toHaveStyleRule('background', theme.colors.$default);
    expect(badge).toHaveStyleRule('color', theme.colors.$primary);
  });

  test('check that $outline && $info apply correct styles ', () => {
    const badge = renderToJson(Component)({ $outline: true, $info: true });
    expect(badge).toHaveStyleRule('background', theme.colors.$default);
    expect(badge).toHaveStyleRule('color', theme.colors.$info);
  });
  test('check that $outline && $success apply correct styles ', () => {
    const badge = renderToJson(Component)({ $outline: true, $success: true });
    expect(badge).toHaveStyleRule('background', theme.colors.$default);
    expect(badge).toHaveStyleRule('color', theme.colors.$success);
  });
  test('check that $outline && $danger apply correct styles ', () => {
    const badge = renderToJson(Component)({ $outline: true, $danger: true });
    expect(badge).toHaveStyleRule('background', theme.colors.$default);
    expect(badge).toHaveStyleRule('color', theme.colors.$danger);
  });
  test('check that $outline && $warning apply correct styles ', () => {
    const badge = renderToJson(Component)({ $outline: true, $warning: true });
    expect(badge).toHaveStyleRule('background', theme.colors.$default);
    expect(badge).toHaveStyleRule('color', theme.colors.$warning);
  });
  test('check that $outline && $black apply correct styles ', () => {
    const badge = renderToJson(Component)({ $outline: true, $black: true });
    expect(badge).toHaveStyleRule('background', theme.colors.$default);
    expect(badge).toHaveStyleRule('color', theme.colors.$black);
  });
});
