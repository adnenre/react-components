import React from 'react';

import { render, fireEvent } from '../utility-test';

import Accordion from '.';

import fake_data from '../../fake-data';

// Mocking a click handler
describe('Test Accordion', () => {
  const { items } = fake_data.pages.accordion;
  const Component = (props) => (
    <Accordion data-testid="accordion" items={items} {...props} />
  );

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
    const first_accordion_title = items[0].title;

    expect(tagName).toBe(tag);
    expect(textContent).toBe(first_accordion_title);
  });

  test('First accordion content type / data is correct', () => {
    const { getByTestId } = render(<Component />);
    // click on accordion first item
    fireEvent.click(getByTestId('accordionItem-1'));
    const accordionItem = getByTestId('accordionContent-1');

    const { tagName, textContent } = accordionItem.firstChild;
    const tag = 'P';
    const second_accordion_content = items[1].content;

    expect(tagName).toBe(tag);
    expect(textContent).toBe(second_accordion_content);
  });

  test('I can open accordion items to see the contents', () => {
    const { getByText, queryByText } = render(<Accordion items={items} />);

    // click the Accordion Title
    // first content is not in the DOM
    expect(queryByText(items[0].content)).toBeNull();
    // second content is not in the DOM
    expect(queryByText(items[1].content)).toBeNull();
    // third content is not in the DOM
    expect(queryByText(items[2].content)).toBeNull();

    // click on accordion first item
    fireEvent.click(getByText(items[0].title));

    // first Accordion item content is appended to the DOM
    expect(getByText(items[0].content)).toBeInTheDocument();

    // second Accordion items is in the the DOM
    expect(queryByText(items[1].content)).toBeNull();
    // second Accordion items is in the the DOM
    expect(queryByText(items[2].content)).toBeNull();

    fireEvent.click(getByText(items[1].title));

    // first Accordion item content is appended to the DOM
    expect(queryByText(items[0].content)).toBeNull();

    expect(queryByText(items[1].content)).toBeInTheDocument();
    expect(queryByText(items[2].content)).toBeNull();
  });

  test('Clicking outside the accordion close all', () => {
    const { getByText, queryByText } = render(<Accordion items={items} />);

    // all accordion are closed
    expect(queryByText(items[0].content)).toBeNull();

    expect(queryByText(items[1].content)).toBeNull();

    expect(queryByText(items[2].content)).toBeNull();

    // click on accordion first item
    fireEvent.click(getByText(items[0].title));

    // first Accordion item content is appended to the DOM
    expect(getByText(items[0].content)).toBeInTheDocument();

    // simulate mouseDown
    fireEvent.mouseDown(document.body);

    // all accordion content are hidden
    expect(queryByText(items[0].content)).toBeNull();
    expect(queryByText(items[1].content)).toBeNull();
    expect(queryByText(items[2].content)).toBeNull();
  });
});
