import React from 'react';
import Badge from '../components/Badge';

import PortletView from '../components/Portlet';

import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';
import { Container, Row } from '../components/grid';

const BadgePage = () => {
  return (
    <>
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
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
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
            </PrismCode>
          </Toggle>
        }
      />
      {/* */}

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
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
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
            </PrismCode>
          </Toggle>
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
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
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
            </PrismCode>
          </Toggle>
        }
      />
    </>
  );
};

export default BadgePage;
