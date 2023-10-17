import React from 'react';

import Table from '../components/Table';
//import Prism from "prismjs";
import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';
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
          <Toggle>
            <PrismCode
              component="pre"
              className="language-markup"
              target="javascript"
            >
              {`


  const rows = [
        { id: 1, name: "adnen", lastName: "rebai", email: "@adnen_rebai" },
        { id: 2, name: "Jhone", lastName: "Doe", email: "Jhon_doe" },
        { id: 3, name: "melina", lastName: "Doe", email: "@melina_doe" }
      ];
  const columns = Object.keys(rows[0]);

  <Table columns={columns} rows={rows} />
 
        `}
            </PrismCode>
          </Toggle>
        }
      />
      <PortletView
        title={table.page.title2}
        content={<Table columns={table.columns} rows={table.rows} striped />}
        footer={
          <Toggle>
            <PrismCode
              component="pre"
              className="language-markup"
              target="javascript"
            >
              {`


  const rows = [
        { id: 1, name: "adnen", lastName: "rebai", email: "@adnen_rebai" },
        { id: 2, name: "Jhone", lastName: "Doe", email: "Jhon_doe" },
        { id: 3, name: "melina", lastName: "Doe", email: "@melina_doe" }
      ];
  const columns = Object.keys(rows[0]);

  <Table columns={columns} rows={rows}  striped />
 
        `}
            </PrismCode>
          </Toggle>
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
          <Toggle>
            <PrismCode component="pre" className="language-markup">
              {`
const rows = [
    { id: 1, name: "adnen", lastName: "rebai", email: "@adnen_rebai" },
    { id: 2, name: "Jhone", lastName: "Doe", email: "Jhon_doe" },
    { id: 3, name: "melina", lastName: "Doe", email: "@melina_doe" }
  ];
const columns = Object.keys(rows[0]);

<Table columns={columns} rows={rows}  resizable withBorder striped/>

      `}
            </PrismCode>
          </Toggle>
        }
      />
    </>
  );
};

export default TablePage;
