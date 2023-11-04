import { Title } from '../components/Portlet/Portlet.Styled';
import React from 'react';

import {
  Portlet,
  PortletHeader,
  PortletBody,
  PortletFooter,
} from '../components/Portlet/Portlet.Styled';
import DropDown from '../components/DropDown';

import CodeBlock from './pageUtils';
import { Container, Row, Col } from '../components/grid';
import fake_data from '../fake-data';
const DropDownPage = () => {
  const { dropdown } = fake_data.pages;
  return (
    <Container>
      <Portlet>
        <PortletHeader>
          <Title>{dropdown.page.title}</Title>
        </PortletHeader>
        <PortletBody>
          <Row>
            <Col $sm={4}>
              <DropDown items={dropdown.items} />
            </Col>
            <Col $sm={4}>
              <DropDown items={dropdown.items} />
            </Col>
            <Col $sm={2}>
              <DropDown items={dropdown.items} />
            </Col>
            <Col $sm={2}>
              <DropDown items={dropdown.items} />
            </Col>
          </Row>
        </PortletBody>
        <PortletFooter>
          <CodeBlock
            code={`
              
            const items = [
              { id: 1, title: "One" },
              { id: 2, title: "Two" },
              { id: 3, title: "Three" },
              { id: 4, title: "Four" }
            ]
                <DropDown
                items={items}
              />
            `}
          />
        </PortletFooter>
      </Portlet>
    </Container>
  );
};

export default DropDownPage;
