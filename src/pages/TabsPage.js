import Title from '../components/Title';
import React from 'react';

import {
  Portlet,
  PortletHeader,
  PortletBody,
  PortletFooter,
} from '../components/Portlet';
import Tabs from '../components/Tabs';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Toggle from '../components/Toggle';
const TablePage = () => {
  return (
    <Portlet>
      <PortletHeader>
        <Title>Table component</Title>
      </PortletHeader>
      <PortletBody>
        <Tabs>
          <Tabs.Tab id={1} tabTitle="One">
            1 - content of tab one
          </Tabs.Tab>
          <Tabs.Tab id={2} tabTitle="Two">
            2 - content of tab two
          </Tabs.Tab>
          <Tabs.Tab id={3} tabTitle="Three">
            3 - content of tab Three
          </Tabs.Tab>
        </Tabs>
      </PortletBody>
      <PortletFooter>
        <Toggle>
          <PrismCode component="pre" className="language-markup" target>
            {`
               <Tabs>
               <Tabs.Tab id={1} tabTitle='one'>
                1-content of tab one 
               </Tabs.Tab>
               <Tabs.Tab id={2} tabTitle='one'>
                2- content of tab two
               </Tabs.Tab>
               <Tabs.Tab id={3} tabTitle='Three'>
                3- content of tab Three
               </Tabs.Tab>
             </Tabs>
            `}
          </PrismCode>
        </Toggle>
      </PortletFooter>
    </Portlet>
  );
};

export default TablePage;
