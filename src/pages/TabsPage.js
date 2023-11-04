import React from 'react';

import PortletView from '../components/Portlet';
import Tabs from '../components/Tabs';

import CodeBlock from './pageUtils';
import fake_data from '../fake-data';
import { Col, Container, Row } from '../components/grid';
const TablePage = () => {
  const { tab } = fake_data.pages;
  return (
    <Container>
      <PortletView
        title={tab.page.title}
        content={
          <Row>
            <Col $sm={6}>
              <Tabs $primary>
                {tab.items.map(({ id, title, content }) => (
                  <Tabs.Tab key={id} id={id} $tabTitle={title}>
                    {content}
                  </Tabs.Tab>
                ))}
              </Tabs>
            </Col>
            <Col $sm={6}>
              <Tabs $secondary>
                {tab.items.map(({ id, title, content }) => (
                  <Tabs.Tab key={id} id={id} $tabTitle={title}>
                    {content}
                  </Tabs.Tab>
                ))}
              </Tabs>
            </Col>
          </Row>
        }
        footer={
          <CodeBlock
            code={`
          <Row>
            <Col $sm={4}>
              <Tabs $primary>
                {tab.items.map(({ id, title, content }) => (
                  <Tabs.Tab key={id} id={id} $tabTitle={title}>
                    {content}
                  </Tabs.Tab>
                ))}
              </Tabs>
            </Col>
            <Col $sm={4}>
              <Tabs $secondary>
                {tab.items.map(({ id, title, content }) => (
                  <Tabs.Tab key={id} id={id} $tabTitle={title}>
                    {content}
                  </Tabs.Tab>
                ))}
              </Tabs>
            </Col>
            <Col $sm={4}>
              <Tabs $success>
                {tab.items.map(({ id, title, content }) => (
                  <Tabs.Tab key={id} id={id} $tabTitle={title}>
                    {content}
                  </Tabs.Tab>
                ))}
              </Tabs>
            </Col>
          </Row>
            `}
          />
        }
      />
      <PortletView
        title={tab.page.title2}
        content={
          <Row>
            <Col $sm={6}>
              <Tabs $primary $left>
                {tab.items.map(({ id, title, content }) => (
                  <Tabs.Tab key={id} id={id} $tabTitle={title}>
                    {content}
                  </Tabs.Tab>
                ))}
              </Tabs>
            </Col>
            <Col $sm={6}>
              <Tabs $secondary $left>
                {tab.items.map(({ id, title, content }) => (
                  <Tabs.Tab key={id} id={id} $tabTitle={title}>
                    {content}
                  </Tabs.Tab>
                ))}
              </Tabs>
            </Col>
          </Row>
        }
        footer={
          <CodeBlock
            code={`
          <Row>
            <Col $sm={6}>
              <Tabs $primary>
                {tab.items.map(({ id, title, content }) => (
                  <Tabs.Tab key={id} id={id} $tabTitle={title}>
                    {content}
                  </Tabs.Tab>
                ))}
              </Tabs>
            </Col>
            <Col $sm={6}>
              <Tabs $secondary>
                {tab.items.map(({ id, title, content }) => (
                  <Tabs.Tab key={id} id={id} $tabTitle={title}>
                    {content}
                  </Tabs.Tab>
                ))}
              </Tabs>
            </Col>
      
          </Row>
            `}
          />
        }
      />
      <PortletView
        title={tab.page.title3}
        content={
          <Row>
            <Col $sm={6}>
              <Tabs $primary $right>
                {tab.items.map(({ id, title, content }) => (
                  <Tabs.Tab key={id} id={id} $tabTitle={title}>
                    {content}
                  </Tabs.Tab>
                ))}
              </Tabs>
            </Col>
            <Col $sm={6}>
              <Tabs $secondary $right>
                {tab.items.map(({ id, title, content }) => (
                  <Tabs.Tab key={id} id={id} $tabTitle={title}>
                    {content}
                  </Tabs.Tab>
                ))}
              </Tabs>
            </Col>
          </Row>
        }
        footer={
          <CodeBlock
            code={`
          <Row>
            <Col $sm={6}>
              <Tabs $primary>
                {tab.items.map(({ id, title, content }) => (
                  <Tabs.Tab key={id} id={id} $tabTitle={title}>
                    {content}
                  </Tabs.Tab>
                ))}
              </Tabs>
            </Col>
            <Col $sm={6}>
              <Tabs $secondary>
                {tab.items.map(({ id, title, content }) => (
                  <Tabs.Tab key={id} id={id} $tabTitle={title}>
                    {content}
                  </Tabs.Tab>
                ))}
              </Tabs>
            </Col>
         
          </Row>
            `}
          />
        }
      />
    </Container>
  );
};

export default TablePage;
