import React from 'react';

import PortletView from '../components/Portlet';

import CodeBlock from './pageUtils';
import { Container, Row } from '../components/grid';
import Breadcrumb from '../components/Breadcrumb';
import fake_data from '../fake-data';

const { breadcrumb } = fake_data.pages;
const BreadcrumbPage = () => {
  return (
    <PortletView
      title={breadcrumb.page.title}
      content={
        <>
          <Container>
            <Row>
              <Breadcrumb items={breadcrumb.items} />
            </Row>
          </Container>
        </>
      }
      footer={
        <CodeBlock
          code={`
            <Container>
                 <Row>
                     <Breadcrumb items={breadcrumb.items} />
                 </Row>
            </Container>
      
        `}
        />
      }
    />
  );
};

export default BreadcrumbPage;
