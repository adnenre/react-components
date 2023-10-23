import React from 'react';
import { render, fireEvent, theme, renderToJson } from '../utility-test';
import Tooltip from '.';
import Button from '../Button';
import { TooltipText } from './Tooltip.styled';

const tooltipText = 'Hey i m a tooltip';
const label = 'Hover me !';

const Component = (props) => (
  <Tooltip data-testid="tooltip" text={tooltipText} {...props}>
    <Button data-testid="tooltip-trigger" lable={label} />
  </Tooltip>
);

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
    expect(getByTestId('tooltip')).toBeInTheDocument();

    // Move the mouse away to hide the tooltip
    fireEvent.mouseLeave(tooltipTrigger);

    // The tooltip content should be hidden again
    expect(tooltipContent).toBeNull();
  });

  test('Tooltip render with the correct text provided on Hover', () => {
    // Render the component
    const { getByTestId, queryByTestId } = render(<Component />);

    // Before hovering it's not in the DOM
    expect(queryByTestId('tooltip')).toBeNull();
    // Trigger the tooltip by hovering over the button
    const tooltipTrigger = getByTestId('tooltip-trigger');
    fireEvent.mouseEnter(tooltipTrigger);

    // Now, the tooltip content should be visible
    expect(getByTestId('tooltip')).toBeInTheDocument();
    expect(getByTestId('tooltip').textContent).toBe(tooltipText);
  });

  test('Tooltip check that $rounded apply correct border radius ', () => {
    const tooltip = renderToJson(TooltipText)({ $rounded: true });
    expect(tooltip).toHaveStyleRule(
      'border-radius',
      theme['border-radius'].$rounded
    );
  });

  test('Tooltip check that $pill apply correct border radius ', () => {
    const tooltip = renderToJson(TooltipText)({ $pill: true });
    expect(tooltip).toHaveStyleRule(
      'border-radius',
      theme['border-radius'].$pill
    );
  });
});
