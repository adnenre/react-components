import React from 'react';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';
import Card from '../components/Card';
import { Title } from '../components/Portlet/Portlet.Styled';
import Button from '../components/Button';
import { Container, Row, Col } from '../components/grid';
import {
  Portlet,
  PortletHeader,
  PortletBody,
} from '../components/Portlet/Portlet.Styled';
import PortletView from '../components/Portlet';
import fake_data from '../fake-data';

const CardPage = () => {
  const { card } = fake_data.pages;
  return (
    <>
      <PortletView
        title={card.page.title}
        content={
          <Container>
            <Row>
              <Col $md={4}>
                <Card
                  header={<h3>{card.header}</h3>}
                  body={card.body}
                  footer={<Button $primary label="Hey!" />}
                />
              </Col>
              <Col $md={4}>
                <Card
                  header={card.header}
                  body={card.body}
                  footer={<Button $success label="Hey!" />}
                />
              </Col>
              <Col $md={4}>
                <Card
                  header={card.header}
                  body={card.body}
                  footer={<Button $danger label="Hey!" />}
                />
              </Col>
            </Row>
          </Container>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
      
         <Container>
            <Row>
              <Col $md={4}>
                <Card
                  header={card.header}
                  body={card.body}
                  footer={<Button  $primary label="Hey!" />}
                />
              </Col>
              <Col $md={4}>
                <Card
                  header={card.header}
                  body={card.body}
                  footer={<Button  $success label="Hey!" />}
                />
              </Col>
              <Col $md={4}>
                <Card
                  header={card.header}
                  body={card.body}
                  footer={<Button  $danger label="Hey!" />}
                />
              </Col>
            </Row>
          </Container>
        
        `}
            </PrismCode>
          </Toggle>
        }
      />
      <PortletView
        title="Card Component"
        content={
          <Container>
            <Row>
              <Col $md={4}>
                <Card
                  $rounded
                  header={card.header}
                  body={card.body}
                  footer={<Button $rounded $primary label="Hey!" />}
                />
              </Col>
              <Col $md={4}>
                <Card
                  $rounded
                  header={card.header}
                  body={card.body}
                  footer={<Button $rounded $success label="Hey!" />}
                />
              </Col>
              <Col $md={4}>
                <Card
                  $rounded
                  header={card.header}
                  body={card.body}
                  footer={<Button $rounded $danger label="Hey!" />}
                />
              </Col>
            </Row>
          </Container>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
      
        <Container>
        <Row>
          <Col $md={4}>
            <Card
              $rounded
              header={card.header}
              body={card.body}
              footer={<Button $rounded $primary label="Hey!" />}
            />
          </Col>
          <Col $md={4}>
            <Card
              $rounded
              header={card.header}
              body={card.body}
              footer={<Button $rounded $success label="Hey!" />}
            />
          </Col>
          <Col $md={4}>
            <Card
              $rounded
              header={card.header}
              body={card.body}
              footer={<Button $rounded $danger label="Hey!" />}
            />
          </Col>
        </Row>
      </Container>
        
        `}
            </PrismCode>
          </Toggle>
        }
      />
      <PortletView
        title="Card Component"
        content={
          <Container>
            <Row>
              <Col $md={4}>
                <Card
                  $pill
                  header={card.header}
                  body={card.body}
                  footer={<Button $pill $primary label="Hey!" />}
                />
              </Col>
              <Col $md={4}>
                <Card
                  $pill
                  header={card.header}
                  body={card.body}
                  footer={<Button $pill $success label="Hey!" />}
                />
              </Col>
              <Col $md={4}>
                <Card
                  $pill
                  header={card.header}
                  body={card.body}
                  footer={<Button $pill $danger label="Hey!" />}
                />
              </Col>
            </Row>
          </Container>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
      
        <Container>
        <Row>
          <Col $md={4}>
            <Card
              $pill
              header={card.header}
              body={card.body}
              footer={<Button $pill $primary label="Hey!" />}
            />
          </Col>
          <Col $md={4}>
            <Card
              $pill
              header={card.header}
              body={card.body}
              footer={<Button $pill $success label="Hey!" />}
            />
          </Col>
          <Col $md={4}>
            <Card
              $pill
              header={card.header}
              body={card.body}
              footer={<Button $pill $danger label="Hey!" />}
            />
          </Col>
        </Row>
      </Container>
        
        `}
            </PrismCode>
          </Toggle>
        }
      />
    </>
  );
};

export default CardPage;
