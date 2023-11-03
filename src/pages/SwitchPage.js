import React from 'react';
import Toggle from '../components/Toggle';
import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import PortletView from '../components/Portlet';
import Switch from '../components/Switch';
import fake_data from '../fake-data';
import { Container, Row, Col } from '../components/grid';

const { pages } = fake_data;
const SwitchPage = () => {
  return (
    <PortletView
      title={pages.switch.page.title}
      content={
        <Container>
          <Row>
            <Col $md="2">
              <Switch
                checked
                $primary
                onChange={() => console.log('switched')}
              />
            </Col>
            <Col $md="2">
              <Switch $secondary onChange={() => console.log('switched')} />
            </Col>
            <Col $md="2">
              <Switch $lime10 onChange={() => console.log('switched')} />
            </Col>

            <Col $md="2">
              <Switch $danger onChange={() => console.log('switched')} />
            </Col>
            <Col $md="2">
              <Switch $warning onChange={() => console.log('switched')} />
            </Col>
            <Col $md="2">
              <Switch $black onChange={() => console.log('switched')} />
            </Col>
          </Row>
        </Container>
      }
      footer={
        <Toggle>
          <PrismCode
            component="pre"
            className="language-markup"
            target="javascript"
          >
            {`


        <Container>
          <Row>
            <Col $md="2">
              <Switch
                checked
                $primary
                
                onChange={() => console.log('switched')}
              />
            </Col>
            <Col $md="2">
              <Switch
                $secondary
                
                onChange={() => console.log('switched')}
              />
            </Col>
            <Col $md="2">
              <Switch
                $lime10
                
                onChange={() => console.log('switched')}
              />
            </Col>

            <Col $md="2">
              <Switch
                $danger
                
                onChange={() => console.log('switched')}
              />
            </Col>
            <Col $md="2">
              <Switch
                $warning
                
                onChange={() => console.log('switched')}
              />
            </Col>
            <Col $md="2">
              <Switch
                $black
                
                onChange={() => console.log('switched')}
              />
            </Col>
          </Row>
        </Container>
 
        `}
          </PrismCode>
        </Toggle>
      }
    />
  );
};

export default SwitchPage;
