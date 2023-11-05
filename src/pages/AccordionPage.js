import React from 'react';
import CodeBlock from './pageUtils';
import PortletView from '../components/Portlet';
import Accordion from '../components/Accordion';
import fake_data from '../fake-data';

const AccordionPage = () => {
  const { accordion } = fake_data.pages;
  return (
    <>
      <PortletView
        title={accordion.page.title}
        content={<Accordion items={accordion.items} />}
        footer={
          <CodeBlock
            code={`
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
          />
        }
      />
      <PortletView
        title={accordion.page.title + ' Primary'}
        content={<Accordion $primary items={accordion.items} />}
        footer={
          <CodeBlock
            code={`
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

            <Accordion $primary items={items} />
            `}
          />
        }
      />
      <PortletView
        title={accordion.page.title + ' Secondary'}
        content={<Accordion $secondary items={accordion.items} />}
        footer={
          <CodeBlock
            code={`
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

            <Accordion $secondary items={items} />
            `}
          />
        }
      />
    </>
  );
};

export default AccordionPage;
