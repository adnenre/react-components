import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '../components/Card';
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
              <Card>
                <CardHeader>
                  <h3>Card Title</h3>
                </CardHeader>
                <CardBody>
                  Some quick example text to build on the card's content.
                </CardBody>
                <CardFooter>
                  <Button $primary>Button</Button>
                </CardFooter>
              </Card>
            </Col>
            <Col $md={4}>
              <Card>
                <CardHeader>
                  <h3>Card Title</h3>
                </CardHeader>
                <CardBody>
                  Some quick example text to build on the card's content.
                </CardBody>
                <CardFooter>
                  <Button $success>Button</Button>
                </CardFooter>
              </Card>
            </Col>
            <Col $md={4}>
              <Card>
                <CardHeader>
                  <h3>Card Title</h3>
                </CardHeader>
                <CardBody>
                  Some quick example text to build on the card's content.
                </CardBody>
                <CardFooter>
                  <Button $danger>Button</Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </PortletBody>
      </Portlet>
    </Container>
  );
};

export default CardPage;
