import React from  'react';
import { render } from '../utility-test';
import Input from  '.';

describe('Test Input', () => {
  const C = (props) => (
    <Input data-testid='Input_testid'  {...props} />
  );

  test('renders Input to the document ', () => {
    const { getByTestId } = render(<C />);
    const Input = getByTestId('Input_testid');

    // Assert
    expect(Input).toBeInTheDocument();
   
  });
});