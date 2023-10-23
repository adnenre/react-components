// Component.test.js
import React from 'react';
import { renderToJson, render, theme } from '../utility-test';
import Card from './index';
import Button from '../Button';

describe('Test Card', () => {
  const bodyContent = 'Some quick example text to build on the card body';
  const Component = (props) => (
    <Card
      data-testid="card"
      header={<h3>Card Title</h3>}
      body={bodyContent}
      footer={<Button $danger label="Hey!" />}
      {...props}
    />
  );

  test('renders Card with header body and footer', () => {
    const { getByTestId } = render(<Component />);
    const Card = getByTestId('card');

    // Assert
    expect(Card).toBeInTheDocument();
    expect(Card.firstChild).toHaveTextContent('Card Title');
    expect(Card.children[1]).toHaveTextContent(bodyContent);
    expect(Card.children[2]).toHaveTextContent('Hey!');
  });

  test('check that applyed theme colors props passed correctly', () => {
    const card = renderToJson(Component)({ $rounded: true });
    expect(card).toHaveStyleRule(
      'border-radius',
      theme['border-radius'].$rounded
    );
  });

  test('check that applyed theme colors props passed correctly', () => {
    const card = renderToJson(Component)({ $pill: true });
    expect(card).toHaveStyleRule('border-radius', theme['border-radius'].$pill);
  });
});
