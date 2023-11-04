import { Title } from '../components/Portlet/Portlet.Styled';
import React from 'react';

import {
  Portlet,
  PortletHeader,
  PortletBody,
  PortletFooter,
} from '../components/Portlet/Portlet.Styled';
import Tabs from '../components/Tabs';

import CodeBlock from './pageUtils';
import fake_data from '../fake-data';
const TablePage = () => {
  const { tab } = fake_data.pages;
  return (
    <Portlet>
      <PortletHeader>
        <Title>{tab.title}</Title>
      </PortletHeader>
      <PortletBody>
        <Tabs>
          {tab.items.map(({ id, title, content }) => (
            <Tabs.Tab key={id} id={id} $tabTitle={title}>
              {content}
            </Tabs.Tab>
          ))}
        </Tabs>
      </PortletBody>
      <PortletFooter>
        <CodeBlock
          code={`
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
        />
      </PortletFooter>
    </Portlet>
  );
};

export default TablePage;
