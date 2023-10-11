import React from 'react';

import PortletView from '../components/Portlet';
import Tooltip from '../components/Tooltip';
import Button from '../components/Button';
import { Col, Container, Row } from '../components/grid';
import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';

const TooltipPage = () => {
  return (
    <PortletView
      title="Tooltip component"
      content={
        <>
          <Container>
            <Row>
              <Col $md={3}>
                <Tooltip text="Tooltip on the left " $left>
                  <Button $primary> Hover me ! </Button>
                </Tooltip>
              </Col>
              <Col $md={3}>
                <Tooltip text="Tooltip on the bottom">
                  <Button $primary> Hover me ! </Button>
                </Tooltip>
              </Col>
              <Col $md={3}>
                <Tooltip text="Tooltip on the right" $right>
                  <Button $primary> Hover me ! </Button>
                </Tooltip>
              </Col>

              <Col $md={3}>
                <Tooltip text="Tooltip on the Top" $top>
                  <Button $primary> Hover me ! </Button>
                </Tooltip>
              </Col>
            </Row>
          </Container>
        </>
      }
      footer={
        <Toggle>
          <PrismCode component="pre" className="language-markup" target>
            {`
          <Row>
          <Col $md={3}>
            <Tooltip text="Tooltip on the left " $left>
              <Button $primary> Hover me ! </Button>
            </Tooltip>
          </Col>
          <Col $md={3}>
            <Tooltip text="Tooltip on the bottom">
              <Button $primary> Hover me ! </Button>
            </Tooltip>
          </Col>
          <Col $md={3}>
            <Tooltip text="Tooltip on the right" $right>
              <Button $primary> Hover me ! </Button>
            </Tooltip>
          </Col>

          <Col $md={3}>
            <Tooltip text="Tooltip on the Top" $top>
              <Button $primary> Hover me ! </Button>
            </Tooltip>
          </Col>
        </Row>
          
          `}
          </PrismCode>
        </Toggle>
      }
    />
  );
};

export default TooltipPage;
