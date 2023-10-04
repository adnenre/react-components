import React from 'react';
import { TableRow, TableHead } from './Table.styled';

const columns = ['#', 'First Name', 'Last Name', 'email'];
// const columns = Object.keys(rows[0])
const rows = [
  { id: 1, name: 'adnen', lastName: 'rebai', email: '@adnen_rebai' },
  { id: 2, name: 'Jhone', lastName: 'Doe', email: 'Jhon_doe' },
  { id: 3, name: 'melina', lastName: 'Doe', email: '@melina_doe' },
];
const Table = ({ rows, columns }) => {
  return (
    <Table>
      <TabHead columns={columns} />
      <TabBody rows={rows} />
    </Table>
  );
};

export default Table;
