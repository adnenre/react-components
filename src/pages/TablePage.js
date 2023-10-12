import React from 'react';
import { Title } from '../components/Portlet/Portlet.Styled';
import Table from '../components/Table';
import {
  Portlet,
  PortletHeader,
  PortletBody,
  PortletFooter,
} from '../components/Portlet/Portlet.Styled';
import {} from '../components/Table';
//import Prism from "prismjs";
import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';
import fake_data from '../fake-data';

const TablePage = () => {
  const { table } = fake_data.pages;
  return (
    <>
      <Portlet>
        <PortletHeader>
          <Title>{table.page.title}</Title>
        </PortletHeader>
        <PortletBody>
          <Table columns={table.columns} rows={table.rows} />
        </PortletBody>
        <PortletFooter>
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
        </PortletFooter>
      </Portlet>
      <Portlet>
        <PortletHeader>
          <Title>{table.page.title2}</Title>
        </PortletHeader>
        <PortletBody>
          <Table columns={table.columns} rows={table.rows} resizable />
        </PortletBody>
        <PortletFooter>
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

    <Table columns={columns} rows={rows}  resizable/>
   
          `}
            </PrismCode>
          </Toggle>
        </PortletFooter>
      </Portlet>
    </>
  );
};

export default TablePage;
