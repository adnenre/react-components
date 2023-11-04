import React from 'react';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';
import Card from '../components/Card';

import Button from '../components/Button';
import { Container, Row, Col } from '../components/grid';

import PortletView from '../components/Portlet';
import fake_data from '../fake-data';
import CodeBlock from './pageUtils';

const CardPage = () => {
  const { card } = fake_data.pages;
  return (
    <Container>
      <PortletView
        title={card.page.title}
        content={
          <Container>
            <Row>
              <Col $md={4}>
                <Card
                  header={card.header}
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
          <CodeBlock
            code={`
              
      
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
          />
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
          <CodeBlock
            code={`
      
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
          />
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
          <CodeBlock
            code={`
      
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
          />
        }
      />
    </Container>
  );
};

export default CardPage;
