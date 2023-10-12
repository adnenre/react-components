import React from 'react';

import PortletView from '../components/Portlet';
import Tooltip from '../components/Tooltip';
import Button from '../components/Button';
import { Col, Container, Row } from '../components/grid';
import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';
import fake_data from '../fake-data';

const TooltipPage = () => {
  const { tooltip } = fake_data.pages;
  return (
    <PortletView
      title={tooltip.page.title}
      content={
        <>
          <Container>
            <Row>
              <Col $md={3}>
                <Tooltip text={tooltip.direction.left} $left>
                  <Button $primary label="Hover me !" />
                </Tooltip>
              </Col>
              <Col $md={3}>
                <Tooltip text={tooltip.direction.bottom}>
                  <Button $primary label="Hover me !" />
                </Tooltip>
              </Col>
              <Col $md={3}>
                <Tooltip text={tooltip.direction.right} $right>
                  <Button $primary label="Hover me !" />
                </Tooltip>
              </Col>

              <Col $md={3}>
                <Tooltip text={tooltip.direction.top} $top>
                  <Button $primary label="Hover me !" />
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
              <Button $primary label="Hover me !"/>
            </Tooltip>
          </Col>
          <Col $md={3}>
            <Tooltip text="Tooltip on the bottom">
              <Button $primary label="Hover me !"/>
            </Tooltip>
          </Col>
          <Col $md={3}>
            <Tooltip text="Tooltip on the right" $right>
              <Button $primary label="Hover me !"/>
            </Tooltip>
          </Col>

          <Col $md={3}>
            <Tooltip text="Tooltip on the Top" $top>
              <Button $primary label="Hover me !"/>
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
