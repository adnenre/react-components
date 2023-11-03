import React from 'react';
import { render } from '../utility-test';
import Masonry from '.';

describe('Test Masonry', () => {
  const C = (props) => <Masonry data-testid="Masonry_testid" {...props} />;

  test('renders Masonry to the document ', () => {
    const { getByTestId } = render(<C />);
    const Masonry = getByTestId('Masonry_testid');

    // Assert
    expect(Masonry).toBeInTheDocument();
  });
});
