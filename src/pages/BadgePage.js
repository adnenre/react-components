import React from 'react';
import Badge from '../components/Badge';

import PortletView from '../components/Portlet';

import CodeBlock from './pageUtils';
import { Container, Row } from '../components/grid';

const BadgePage = () => {
  return (
    <Container>
      <PortletView
        title="Badge component"
        content={
          <>
            <Container>
              <Row>
                <Badge $primary />
                <Badge $info />
                <Badge $warning />
                <Badge $success />
                <Badge $danger />
                <Badge $black />
              </Row>
              <Row>
                <Badge $outline $primary />
                <Badge $outline $info />
                <Badge $outline $warning />
                <Badge $outline $success />
                <Badge $outline $danger />
                <Badge $outline $black />
              </Row>
            </Container>
          </>
        }
        footer={
          <CodeBlock
            code={`
              
       <Badge $primary />
       <Badge $info />
       <Badge $warning />
       <Badge $success />
       <Badge $danger />
       <Badge $black />
    
       <Badge $outline $primary />
       <Badge $outline $info />
       <Badge $outline $warning />
       <Badge $outline $success />
       <Badge $outline $danger />
       <Badge $outline $black />
        `}
          />
        }
      />

      <PortletView
        title="Badge component rounded"
        content={
          <>
            <Container>
              <Row>
                <Badge $rounded $primary />

                <Badge $rounded $info />

                <Badge $rounded $warning />

                <Badge $rounded $success />

                <Badge $rounded $danger />

                <Badge $rounded $black />
              </Row>
              <Row>
                <Badge $outline $rounded $primary />

                <Badge $outline $rounded $info />

                <Badge $outline $rounded $warning />

                <Badge $outline $rounded $success />

                <Badge $outline $rounded $danger />

                <Badge $outline $rounded $black />
              </Row>
            </Container>
          </>
        }
        footer={
          <CodeBlock
            code={`
      <Badge $primary $rounded/>
      <Badge $info $rounded/>
      <Badge $warning $rounded/>
      <Badge $success $rounded/>
      <Badge $danger $rounded/>
      <Badge $black $rounded/>
      
      <Badge $outline $primary $rounded/>
      <Badge $outline $info $rounded/>
      <Badge $outline $warning $rounded/>
      <Badge $outline $success $rounded/>
      <Badge $outline $danger $rounded/>
      <Badge $outline $black $rounded/>
        `}
          />
        }
      />
      <PortletView
        title="Badge component pill"
        content={
          <>
            <Container>
              <Row>
                <Badge $pill $primary />
                <Badge $pill $info />
                <Badge $pill $warning />
                <Badge $pill $success />
                <Badge $pill $danger />
                <Badge $pill $black />
              </Row>
              <Row>
                <Badge $outline $pill $primary />
                <Badge $outline $pill $info />
                <Badge $outline $pill $warning />
                <Badge $outline $pill $success />
                <Badge $outline $pill $danger />
                <Badge $outline $pill $black />
              </Row>
            </Container>
          </>
        }
        footer={
          <CodeBlock
            code={`
        <Badge $pill $primary />
        <Badge $pill $info />
        <Badge $pill $warning />
        <Badge $pill $success />
        <Badge $pill $danger />
        <Badge $pill $black />
    
        <Badge $outline $pill $primary />
        <Badge $outline $pill $info />
        <Badge $outline $pill $warning />
        <Badge $outline $pill $success />
        <Badge $outline $pill $danger />
        <Badge $outline $pill $black />
        `}
          />
        }
      />
    </Container>
  );
};

export default BadgePage;
