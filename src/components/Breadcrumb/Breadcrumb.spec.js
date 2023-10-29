import React from 'react';
import { render } from '../utility-test';
import Breadcrumb from '.';

describe('Test Breadcrumb', () => {
  const C = (props) => <Breadcrumb data-testid="breadcrumb" {...props} />;

  test('renders Breadcrumb to the document ', () => {
    const { getByTestId } = render(<C />);
    const bred = getByTestId('breadcrumb');

    // Assert
    expect(bred).toBeInTheDocument();
  });
});
