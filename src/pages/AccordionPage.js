import React from 'react';
import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';
import PortletView from '../components/Portlet';
import Accordion from '../components/Accordion';
import fake_data from '../fake-data';

const AccordionPage = () => {
  const { accordion } = fake_data.pages;
  return (
    <PortletView
      title={accordion.page.title}
      content={<Accordion items={accordion.items} />}
      footer={
        <Toggle>
          <PrismCode component="pre" className="language-markup">
            {`
            const items = [
              {
                title: 'Section 1',
                content: 'this is the first content ...',
              },
              {
                title: 'Section 2',
                content: 'this is the second content ...',
              },
              {
                title: 'Section 3',
                content: 'this is the third content ....',
              },
            ];

            <Accordion items={items} />
            `}
          </PrismCode>
        </Toggle>
      }
    />
  );
};

export default AccordionPage;
