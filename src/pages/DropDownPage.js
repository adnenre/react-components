import { Title } from '../components/Portlet/Portlet.Styled';
import React from 'react';

import {
  Portlet,
  PortletHeader,
  PortletBody,
  PortletFooter,
} from '../components/Portlet/Portlet.Styled';
import DropDown from '../components/DropDown';

import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';
import { Container, Row, Col } from '../components/grid';
const items = [
  { id: 1, title: 'Option 1' },
  { id: 2, title: 'Option 2' },
  { id: 3, title: 'Option 3' },
  { id: 4, title: 'Option 4' },
  { id: 5, title: 'Option 5' },
  { id: 6, title: 'Option 6' },
  { id: 7, title: 'Option 7' },
  { id: 8, title: 'Option 8' },
  { id: 9, title: 'Option 9' },
  { id: 10, title: 'Option 10' },
];
const DropDownPage = () => {
  return (
    <Container>
      <Portlet>
        <PortletHeader>
          <Title>Table component</Title>
        </PortletHeader>
        <PortletBody>
          <Row>
            <Col $sm={4}>
              <DropDown items={items} />
            </Col>
            <Col $sm={4}>
              <DropDown items={items} />
            </Col>
            <Col $sm={2}>
              <DropDown items={items} />
            </Col>
            <Col $sm={2}>
              <DropDown items={items} />
            </Col>
          </Row>
        </PortletBody>
        <PortletFooter>
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
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
            </PrismCode>
          </Toggle>
        </PortletFooter>
      </Portlet>
    </Container>
  );
};

export default DropDownPage;
