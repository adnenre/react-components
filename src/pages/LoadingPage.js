import React from 'react';
import PortletView from '../components/Portlet';
import Loading from '../components/Loading';
import { Container, Row, Col } from '../components/grid';
import CodeBlock from './pageUtils';
const LoadingPage = () => {
  return (
    <PortletView
      title={'Loading Page'}
      content={
        <>
          <Container>
            <Row>
              <Col $sm={4}>
                <Loading $primary />
              </Col>

              <Col $sm={4}>
                <Loading $lime10 />
              </Col>
              <Col $sm={4}>
                <Loading $black />
              </Col>
            </Row>
          </Container>
        </>
      }
      footer={
        <CodeBlock
          code={` 
       
          <Loading $primary />
       
          <Loading $lime10 />
       
          <Loading $black />
   
      `}
        />
      }
    />
  );
};

export default LoadingPage;
