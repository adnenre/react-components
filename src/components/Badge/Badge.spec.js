import React from 'react';
import { render, renderToJson, theme } from '../utility-test';
import Badge from '.';

const label = 'i m a label';

describe('Test Badge', () => {
  const Component = (props) => (
    <Badge data-testid="badge" label={label} {...props} />
  );

  test('renders a badge with the correct label', () => {
    const { getByTestId } = render(<Component />);
    const badge = getByTestId('badge');

    // Assert
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent(label);
  });

  test('check that applyed theme colors props passed correctly', () => {
    const cssP = 'background';
    const badgePrimary = renderToJson(Component)({ $primary: true });
    const badgeInfo = renderToJson(Component)({ $info: true });
    const badgeWarning = renderToJson(Component)({ $warning: true });
    const badgeSuccess = renderToJson(Component)({ $success: true });
    const badgeDanger = renderToJson(Component)({ $danger: true });
    const badgeBlack = renderToJson(Component)({ $black: true });

    expect(badgePrimary).toHaveStyleRule(cssP, theme.color.$primary);
    expect(badgeInfo).toHaveStyleRule(cssP, theme.color.$info);
    expect(badgeWarning).toHaveStyleRule(cssP, theme.color.$warning);
    expect(badgeSuccess).toHaveStyleRule(cssP, theme.color.$success);
    expect(badgeDanger).toHaveStyleRule(cssP, theme.color.$danger);
    expect(badgeBlack).toHaveStyleRule(cssP, theme.color.$black);
  });

  test('check that $rounded apply correct border radius ', () => {
    const badge = renderToJson(Component)({ $rounded: true });
    expect(badge).toHaveStyleRule(
      'border-radius',
      theme['border-radius'].$rounded
    );
  });

  test('check that $pill apply correct border radius ', () => {
    const badge = renderToJson(Component)({ $pill: true });
    expect(badge).toHaveStyleRule(
      'border-radius',
      theme['border-radius'].$pill
    );
  });

  test('check that $outline && $primary apply correct styles ', () => {
    const badge = renderToJson(Component)({ $outline: true, $primary: true });
    expect(badge).toHaveStyleRule('background', theme.color.$white);
    expect(badge).toHaveStyleRule('color', theme.color.$primary);
  });

  test('check that $outline && $info apply correct styles ', () => {
    const badge = renderToJson(Component)({ $outline: true, $info: true });
    expect(badge).toHaveStyleRule('background', theme.color.$white);
    expect(badge).toHaveStyleRule('color', theme.color.$info);
  });
  test('check that $outline && $success apply correct styles ', () => {
    const badge = renderToJson(Component)({ $outline: true, $success: true });
    expect(badge).toHaveStyleRule('background', theme.color.$white);
    expect(badge).toHaveStyleRule('color', theme.color.$success);
  });
  test('check that $outline && $danger apply correct styles ', () => {
    const badge = renderToJson(Component)({ $outline: true, $danger: true });
    expect(badge).toHaveStyleRule('background', theme.color.$white);
    expect(badge).toHaveStyleRule('color', theme.color.$danger);
  });
  test('check that $outline && $warning apply correct styles ', () => {
    const badge = renderToJson(Component)({ $outline: true, $warning: true });
    expect(badge).toHaveStyleRule('background', theme.color.$white);
    expect(badge).toHaveStyleRule('color', theme.color.$warning);
  });
  test('check that $outline && $black apply correct styles ', () => {
    const badge = renderToJson(Component)({ $outline: true, $black: true });
    expect(badge).toHaveStyleRule('background', theme.color.$white);
    expect(badge).toHaveStyleRule('color', theme.color.$black);
  });
});
