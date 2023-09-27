import Title from '../components/Title';
import React from 'react';

import {
  Portlet,
  PortletHeader,
  PortletBody,
  PortletFooter,
} from '../components/Portlet';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeadCell,
} from '../components/Table';
//import Prism from "prismjs";
import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Toggle from '../components/Toggle';

const columns = ['#', 'First Name', 'Last Name', 'email'];
const rows = [
  { id: 1, name: 'adnen', lastName: 'rebai', email: '@adnen_rebai' },
  { id: 2, name: 'Jhone', lastName: 'Doe', email: 'Jhon_doe' },
  { id: 3, name: 'melina', lastName: 'Doe', email: '@melina_doe' },
];
const TabHead = ({ columns }) => (
  <TableHead>
    <TableRow key="table_head">
      {columns.map((col, index) => (
        <TableHeadCell keu={index}>{col}</TableHeadCell>
      ))}
    </TableRow>
  </TableHead>
);

const TabBody = ({ rows }) => (
  <TableBody>
    {rows.map((row) => (
      <TableRow key={row.id}>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.lastName}</TableCell>
        <TableCell>{row.email}</TableCell>
      </TableRow>
    ))}
  </TableBody>
);
const TablePage = () => {
  return (
    <Portlet>
      <PortletHeader>
        <Title>Table component</Title>
      </PortletHeader>
      <PortletBody>
        <Table>
          <TabHead columns={columns} />
          <TabBody rows={rows} />
        </Table>
      </PortletBody>
      <PortletFooter>
        <Toggle>
          <PrismCode
            component="pre"
            className="language-markup"
            target="javascript"
          >
            {`
const columns = ["First Name", "Last Name", "email"];
const rows = [
      { id: 1, name: "adnen", lastName: "rebai", email: "@adnen_rebai" },
      { id: 2, name: "Jhone", lastName: "Doe", email: "Jhon_doe" },
      { id: 3, name: "melina", lastName: "Doe", email: "@melina_doe" }
    ];
     <Table>
       <TabHead columns={columns} />
       <TabBody rows={rows} />
     </Table>
            `}
          </PrismCode>
        </Toggle>
      </PortletFooter>
    </Portlet>
  );
};

export default TablePage;
