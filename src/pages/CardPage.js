import React from 'react';
import Card from '../components/Card';
import { Title } from '../components/Portlet/Portlet.Styled';
import Button from '../components/Button';
import { Container, Row, Col } from '../components/grid';
import {
  Portlet,
  PortletHeader,
  PortletBody,
} from '../components/Portlet/Portlet.Styled';
const CardPage = () => {
  return (
    <Container>
      <Portlet>
        <PortletHeader>
          <Title> Card Component </Title>
        </PortletHeader>
        <PortletBody>
          <Row>
            <Col $md={4}>
              <Card
                header={<h3>Card Title</h3>}
                body={
                  " Some quick example text to build on the card's content."
                }
                footer={<Button $primary>Button</Button>}
              />
            </Col>
            <Col $md={4}>
              <Card
                header={<h3>Card Title</h3>}
                body={
                  " Some quick example text to build on the card's content."
                }
                footer={<Button $success>Button</Button>}
              />
            </Col>
            <Col $md={4}>
              <Card
                header={<h3>Card Title</h3>}
                body={
                  " Some quick example text to build on the card's content."
                }
                footer={<Button $danger>Button</Button>}
              />
            </Col>
          </Row>
        </PortletBody>
      </Portlet>
    </Container>
  );
};

export default CardPage;
