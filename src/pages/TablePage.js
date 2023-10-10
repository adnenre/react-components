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

const columns = ['#', 'First Name', 'Last Name', 'email'];
const rows = [
  { id: 1, name: 'adnen', lastName: 'rebai', email: '@adnen_rebai' },
  { id: 2, name: 'Jhone', lastName: 'Doe', email: 'Jhon_doe' },
  { id: 3, name: 'melina', lastName: 'Doe', email: '@melina_doe' },
];

const TablePage = () => {
  return (
    <>
      <Portlet>
        <PortletHeader>
          <Title>Table component</Title>
        </PortletHeader>
        <PortletBody>
          <Table columns={columns} rows={rows} />
        </PortletBody>
        <PortletFooter>
          <Toggle>
            <PrismCode
              component="pre"
              className="language-markup"
              target="javascript"
            >
              {`
const columns = ["#","First Name", "Last Name", "email"];
// const columns = Object.keys(rows[0])
const rows = [
      { id: 1, name: "adnen", lastName: "rebai", email: "@adnen_rebai" },
      { id: 2, name: "Jhone", lastName: "Doe", email: "Jhon_doe" },
      { id: 3, name: "melina", lastName: "Doe", email: "@melina_doe" }
    ];
     <Table columns={columns} rows={rows} />
     
            `}
            </PrismCode>
          </Toggle>
        </PortletFooter>
      </Portlet>
      <Portlet>
        <PortletHeader>
          <Title>Table resizable</Title>
        </PortletHeader>
        <PortletBody>
          <Table columns={columns} rows={rows} resizable />
        </PortletBody>
        <PortletFooter>
          <Toggle>
            <PrismCode
              component="pre"
              className="language-markup"
              target="javascript"
            >
              {`
const columns = ["#","First Name", "Last Name", "email"];
// const columns = Object.keys(rows[0])
const rows = [
    { id: 1, name: "adnen", lastName: "rebai", email: "@adnen_rebai" },
    { id: 2, name: "Jhone", lastName: "Doe", email: "Jhon_doe" },
    { id: 3, name: "melina", lastName: "Doe", email: "@melina_doe" }
  ];
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
