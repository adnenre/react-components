import React from 'react';

import Table from '../components/Table';
//import Prism from "prismjs";
import CodeBlock from './pageUtils';
import fake_data from '../fake-data';
import PortletView from '../components/Portlet';

const TablePage = () => {
  const { table } = fake_data.pages;
  return (
    <>
      <PortletView
        title={table.page.title}
        content={<Table columns={table.columns} rows={table.rows} />}
        footer={
          <CodeBlock
            code={`


  const rows = [
        { id: 1, name: "adnen", lastName: "rebai", email: "@adnen_rebai" },
        { id: 2, name: "Jhone", lastName: "Doe", email: "Jhon_doe" },
        { id: 3, name: "melina", lastName: "Doe", email: "@melina_doe" }
      ];
  const columns = Object.keys(rows[0]);

  <Table columns={columns} rows={rows} />
 
        `}
          />
        }
      />
      <PortletView
        title={table.page.title2}
        content={<Table columns={table.columns} rows={table.rows} striped />}
        footer={
          <CodeBlock
            code={`


  const rows = [
        { id: 1, name: "adnen", lastName: "rebai", email: "@adnen_rebai" },
        { id: 2, name: "Jhone", lastName: "Doe", email: "Jhon_doe" },
        { id: 3, name: "melina", lastName: "Doe", email: "@melina_doe" }
      ];
  const columns = Object.keys(rows[0]);

  <Table columns={columns} rows={rows}  striped />
 
        `}
          />
        }
      />

      <PortletView
        title={table.page.title3}
        content={
          <Table
            columns={table.columns}
            rows={table.rows}
            resizable
            withBorder
            striped
          />
        }
        footer={
          <CodeBlock
            code={`
const rows = [
    { id: 1, name: "adnen", lastName: "rebai", email: "@adnen_rebai" },
    { id: 2, name: "Jhone", lastName: "Doe", email: "Jhon_doe" },
    { id: 3, name: "melina", lastName: "Doe", email: "@melina_doe" }
  ];
const columns = Object.keys(rows[0]);

<Table columns={columns} rows={rows}  resizable withBorder striped/>

      `}
          />
        }
      />
    </>
  );
};

export default TablePage;
