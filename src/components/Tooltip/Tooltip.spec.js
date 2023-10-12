import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

import Tooltip from '.';
import Button from '../Button';
import theme from '../../theme';
import { TooltipText } from './Tooltip.styled';
const tooltipText = 'Hey i m a tooltip';
const label = 'Hover me !';

const Component = () => (
  <Tooltip data-testid="tooltip-content" text={tooltipText}>
    <Button data-testid="tooltip-trigger" lable={label} />
  </Tooltip>
);

const renderToJson = (C) => (rest) => renderer.create(<C {...rest} />).toJSON();
describe('Test Tooltip', () => {
  test('Tooltip is displayed on hover', () => {
    // Render the component
    const { getByTestId, queryByText } = render(<Component />);

    // Initially, the tooltip content should not be visible
    const tooltipContent = queryByText(tooltipText);
    expect(tooltipContent).toBeNull();

    // Trigger the tooltip by hovering over the button
    const tooltipTrigger = getByTestId('tooltip-trigger');
    fireEvent.mouseEnter(tooltipTrigger);

    // Now, the tooltip content should be visible
    expect(getByTestId('tooltip-content')).toBeInTheDocument();

    // Move the mouse away to hide the tooltip
    fireEvent.mouseLeave(tooltipTrigger);

    // The tooltip content should be hidden again
    expect(tooltipContent).toBeNull();
  });

  test('Tooltip render with the correct text provided on Hover', () => {
    // Render the component
    const { getByTestId } = render(<Component />);

    // Trigger the tooltip by hovering over the button
    const tooltipTrigger = getByTestId('tooltip-trigger');
    fireEvent.mouseEnter(tooltipTrigger);

    // Now, the tooltip content should be visible
    expect(getByTestId('tooltip-content')).toBeInTheDocument();
    expect(getByTestId('tooltip-content').textContent).toBe(tooltipText);
  });

  test('Tooltip check that $rounded apply correct border radius ', () => {
    const tooltip = renderToJson(TooltipText)({ $rounded: true });
    expect(tooltip).toHaveStyleRule(
      'border-radius',
      theme.borderRadius.$rounded
    );
  });

  test('Tooltip check that $pill apply correct border radius ', () => {
    const tooltip = renderToJson(TooltipText)({ $pill: true });
    expect(tooltip).toHaveStyleRule('border-radius', theme.borderRadius.$pill);
  });
});
