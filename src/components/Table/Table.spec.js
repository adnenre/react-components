import React from 'react';
import { render } from '../utility-test';
import Table from '.';
import fake_data from '../../fake-data';

const { table } = fake_data.pages;

const Component = () => <Table columns={table.columns} rows={table.rows} />;

describe('Test Table', () => {
  test('Table render provided data correctly column and rows ', () => {
    const { getByTestId } = render(<Component />);
    const thead = getByTestId('table-thead');
    const tbody = getByTestId('table-tbody');
    const theadTr = thead.firstChild;
    const tbodyTr = tbody.firstChild;
    expect(thead).toBeInTheDocument();
    expect(tbody).toBeInTheDocument();

    // RENDER SAME PROVIDED COLUMN
    expect(theadTr.children.length).toBe(table.columns.length);

    // RENDER SAME PROVIDED ROWS
    expect(tbody.children.length).toBe(table.rows.length);

    for (let i = 0; i < table.columns.length; i++) {
      expect(theadTr.children[i].textContent).toBe(table.columns[i]);
    }

    const firstRowValues = Object.values(table.rows[0]);
    for (let i = 0; i < firstRowValues.length; i++) {
      expect(tbodyTr.children[i].textContent).toBe(firstRowValues[i]);
    }
  });
});
