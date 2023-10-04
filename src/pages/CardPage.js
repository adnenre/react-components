import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '../components/Card';
import { Title } from '../components/Portlet/Portlet.Styled';
import ButtonOutline from '../components/ButtonOutline';
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
                  <ButtonOutline $primary>Button</ButtonOutline>
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
                  <ButtonOutline $success>Button</ButtonOutline>
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
                  <ButtonOutline $danger>Button</ButtonOutline>
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
