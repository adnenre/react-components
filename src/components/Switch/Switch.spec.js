import React from 'react';
import { render } from '../utility-test';
import Switch from '.';

describe('Test Switch', () => {
  const C = () => (
    <Switch
      data-testid="switch-component"
      label="Switch"
      onClick={() => console.log('switch')}
    />
  );

  test('renders Switch to the document ', () => {
    const { getByTestId } = render(<C />);
    const sw = getByTestId('switch-component');

    // Assert
    expect(sw).toBeInTheDocument();
  });
});
