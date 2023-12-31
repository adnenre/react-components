// Component.test.js
import React from 'react';
import { fireEvent, render, renderToJson, theme } from '../utility-test';
import Button from './index';
import { setTranspancy } from '../utility';
const label = 'Click me';
const onClick = jest.fn(); // Mocking a click handler

describe('Test Button', () => {
  const Component = (props) => (
    <Button data-testid="button" onClick={onClick} label={label} {...props} />
  );

  test('renders a button with the correct label', () => {
    const { getByTestId } = render(<Component />);
    const button = getByTestId('button');

    // Assert
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(label);
  });

  test('calls the onClick handler when the button is clicked', () => {
    const { getByTestId } = render(<Component />);
    const button = getByTestId('button');
    fireEvent.click(button);

    // Assert
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('check that applyed theme colors props passed correctly', () => {
    const property = 'background';
    const btnPrimary = renderToJson(Component)({ $primary: true });
    const btnInfo = renderToJson(Component)({ $info: true });
    const btnWarning = renderToJson(Component)({ $warning: true });
    const btnSuccess = renderToJson(Component)({ $success: true });
    const btnDanger = renderToJson(Component)({ $danger: true });
    const btnBlack = renderToJson(Component)({ $black: true });

    expect(btnPrimary).toHaveStyleRule(property, theme.color.$primary);
    expect(btnInfo).toHaveStyleRule(property, theme.color.$info);
    expect(btnWarning).toHaveStyleRule(property, theme.color.$warning);
    expect(btnSuccess).toHaveStyleRule(property, theme.color.$success);
    expect(btnDanger).toHaveStyleRule(property, theme.color.$danger);
    expect(btnBlack).toHaveStyleRule(property, theme.color.$black);
  });
  test('check that $fullwidth && $primary apply correct style', () => {
    const btnFullwidth = renderToJson(Component)({
      $fullwidth: true,
      $primary: true,
    });
    expect(btnFullwidth).toHaveStyleRule('width', theme.width.full);
    expect(btnFullwidth).toHaveStyleRule('background', theme.color.$primary);
    expect(btnFullwidth).toHaveStyleRule('color', theme.color.$white);
  });
  test('check that $rounded apply correct border radius ', () => {
    const btn = renderToJson(Component)({ $rounded: true });
    expect(btn).toHaveStyleRule(
      'border-radius',
      theme['border-radius'].$rounded
    );
  });

  test('check that $pill apply correct border radius ', () => {
    const btn = renderToJson(Component)({ $pill: true });
    expect(btn).toHaveStyleRule('border-radius', theme['border-radius'].$pill);
    expect(btn).toHaveStyleRule('width', theme.width.fitContent);
  });

  test('check that $outline && $primary apply correct styles ', () => {
    const btn = renderToJson(Component)({ $outline: true, $primary: true });
    expect(btn).toHaveStyleRule('background', theme.color.$white);
    expect(btn).toHaveStyleRule('color', theme.color.$primary);
    expect(btn).toHaveStyleRule('width', theme.width.fitContent);
  });

  test('check that $outline && $info apply correct styles ', () => {
    const btn = renderToJson(Component)({ $outline: true, $info: true });
    expect(btn).toHaveStyleRule('background', theme.color.$white);
    expect(btn).toHaveStyleRule('color', theme.color.$info);
    expect(btn).toHaveStyleRule('width', theme.width.fitContent);
  });
  test('check that $outline && $success apply correct styles ', () => {
    const btn = renderToJson(Component)({ $outline: true, $success: true });
    expect(btn).toHaveStyleRule('background', theme.color.$white);
    expect(btn).toHaveStyleRule('color', theme.color.$success);
    expect(btn).toHaveStyleRule('width', theme.width.fitContent);
  });
  test('check that $outline && $danger apply correct styles ', () => {
    const btn = renderToJson(Component)({ $outline: true, $danger: true });
    expect(btn).toHaveStyleRule('background', theme.color.$white);
    expect(btn).toHaveStyleRule('color', theme.color.$danger);
    expect(btn).toHaveStyleRule('width', theme.width.fitContent);
  });
  test('check that $outline && $warning apply correct styles ', () => {
    const btn = renderToJson(Component)({ $outline: true, $warning: true });
    expect(btn).toHaveStyleRule('background', theme.color.$white);
    expect(btn).toHaveStyleRule('color', theme.color.$warning);
    expect(btn).toHaveStyleRule('width', theme.width.fitContent);
  });
  test('check that $outline && $black apply correct styles ', () => {
    const btn = renderToJson(Component)({ $outline: true, $black: true });
    expect(btn).toHaveStyleRule('background', theme.color.$white);
    expect(btn).toHaveStyleRule('color', theme.color.$black);
    expect(btn).toHaveStyleRule('width', theme.width.fitContent);
  });
  test('check that disabled apply correct default styles ', () => {
    const btn = renderToJson(Component)({ disabled: true });
    expect(btn).toHaveStyleRule(
      'background',
      setTranspancy(theme.color.$darkBlue10, 0.3)
    );
    expect(btn).toHaveStyleRule('color', theme.color.$white);
    expect(btn).toHaveStyleRule('cursor', theme.cursor.notAllowed);
    expect(btn).toHaveStyleRule('width', theme.width.fitContent);
  });
});
