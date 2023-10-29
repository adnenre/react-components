import React from 'react';

import PortletView from '../components/Portlet';

import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';
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
        <Toggle>
          <PrismCode component="pre" className="language-markup" target>
            {`
            <Container>
                 <Row>
                     <Breadcrumb items={breadcrumb.items} />
                 </Row>
            </Container>
      
        `}
          </PrismCode>
        </Toggle>
      }
    />
  );
};

export default BreadcrumbPage;
