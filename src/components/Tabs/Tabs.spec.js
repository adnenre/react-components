import React from 'react';

import { render, fireEvent } from '../utility-test';

import Tabs from '.';
import fake_data from '../../fake-data';

const { tab } = fake_data.pages;
const Component = () => (
  <Tabs>
    {tab.items.map(({ id, title, content }) => (
      <Tabs.Tab key={id} id={id} $tabTitle={title}>
        {content}
      </Tabs.Tab>
    ))}
  </Tabs>
);

describe('Test Tabs', () => {
  test('Tabs is rendered correctly with first tab active', () => {
    const { getByTestId, queryByTestId, queryByText } = render(<Component />);

    expect(getByTestId(tab.items[0].title)).toBeInTheDocument();
    expect(getByTestId(tab.items[1].title)).toBeInTheDocument();
    expect(queryByTestId(tab.items[2].title)).toBeInTheDocument();
    expect(queryByTestId('active-panel')).toBeInTheDocument();
    expect(queryByTestId('active-panel').textContent).toBe(
      tab.items[0].content
    );
    expect(queryByText(tab.items[1].content)).toBeNull();
    expect(queryByText(tab.items[2].content)).toBeNull();
  });

  test('Tabs selecting second tab works correctly', () => {
    const { getByTestId, queryByTestId, queryByText } = render(<Component />);

    fireEvent.click(getByTestId(tab.items[1].title));

    expect(queryByTestId('active-panel')).toBeInTheDocument();
    expect(queryByText(tab.items[0].content)).toBeNull();
    expect(queryByText(tab.items[2].content)).toBeNull();
  });

  test('Tabs selecting second tab render correct data in panel', () => {
    const { getByTestId, queryByTestId, queryByText } = render(<Component />);

    fireEvent.click(getByTestId(tab.items[1].title));

    expect(queryByTestId('active-panel').textContent).toBe(
      tab.items[1].content
    );
    expect(queryByText(tab.items[0].content)).toBeNull();
    expect(queryByText(tab.items[2].content)).toBeNull();
  });
});
