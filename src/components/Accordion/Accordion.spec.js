import React from 'react';
import '@testing-library/jest-dom';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

import Accordion, { AccordionItem } from '.';

import fake_data from '../../fake-data';
// Mocking a click handler
describe('Component Accordion', () => {
  const Component = (props) => (
    <Accordion
      data-testid="accordion"
      items={fake_data.accordion.items}
      {...props}
    />
  );
  const renderToJson = (C) => (rest) =>
    renderer.create(<C {...rest} />).toJSON();
  test('renders an Accordion with the correct data', () => {
    const { getByTestId } = render(<Component />);
    const accordion = getByTestId('accordion');

    // Assert
    expect(accordion).toBeInTheDocument();
  });

  test('First item type / data is correct', () => {
    const { getByTestId } = render(<Component />);
    const accordionItem = getByTestId('accordionItem-0');

    const { tagName, textContent } = accordionItem;
    const tag = 'H5';
    const first_accordion_title = fake_data.accordion.items[0].title;

    expect(tagName).toBe(tag);
    expect(textContent).toBe(first_accordion_title);
  });

  test('First accordion content type / data is correct', () => {
    const { getByTestId } = render(<Component />);
    const accordionItem = getByTestId('accordionContent-0');

    const { tagName, textContent } = accordionItem.firstChild;
    const tag = 'P';
    const first_accordion_content = fake_data.accordion.items[0].content;

    expect(tagName).toBe(tag);
    expect(textContent).toBe(first_accordion_content);
  });
});
