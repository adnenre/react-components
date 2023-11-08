import React from 'react';
import { render } from '../utility-test';
import Loading from '.';

describe('Test Loading', () => {
  const C = (props) => <Loading data-testid="Loading_testid" {...props} />;

  test('renders Loading to the document ', () => {
    const { getByTestId } = render(<C />);
    const Loading = getByTestId('Loading_testid');

    // Assert
    expect(Loading).toBeInTheDocument();
  });
});
