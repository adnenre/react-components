import React from 'react';
import Button from '../components/Button';
import PortletView from '../components/Portlet';

import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';
import { Container, Row, Col } from '../components/grid';
import Tooltip from '../components/Tooltip';
const ButtonPage = () => {
  return (
    <Container>
      <PortletView
        title="Button"
        content={
          <>
            <Row>
              <Col $sm={2}>
                <Tooltip text="Hello i m a primary Button" $top>
                  <Button $primary />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m an info Button" $top>
                  <Button $info />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a warning Button" $top>
                  <Button $warning />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a success Button" $top>
                  <Button $success />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a danger Button" $top>
                  <Button $danger />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a black Button" $top>
                  <Button $black />
                </Tooltip>
              </Col>
            </Row>

            <Row>
              <Col $sm={2}>
                <Tooltip text="Hello i m a primary Button">
                  <Button $outline $primary />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m an info Button">
                  <Button $outline $info />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a warning Button">
                  <Button $outline $warning />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a success Button">
                  <Button $outline $success />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a danger Button">
                  <Button $outline $danger />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a black Button">
                  <Button $outline $black />
                </Tooltip>
              </Col>
            </Row>
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
          <Button $primary/>
          <Button $info/>
          <Button $warning/>
          <Button $success/>
          <Button $danger/>
          <Button $black/>


          <Button $outline $primary/>
          <Button $outline $info/>
          <Button $outline $warning/>
          <Button $outline $success/>
          <Button $outline $danger/>
          <Button $outline $black/>

         

        

       
          
            `}
            </PrismCode>
          </Toggle>
        }
      />

      <PortletView
        title="Button Rounded"
        content={
          <>
            <Row>
              <Col $sm={2}>
                <Tooltip text="Hello i m a rounded primary Button" $top>
                  <Button $rounded $primary />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a rounded info Button">
                  <Button $rounded $info />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a rounded warning Button" $top>
                  <Button $rounded $warning />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a rounded success Button" $top>
                  <Button $rounded $success />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a danger Button">
                  <Button $rounded $danger />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a black Button">
                  <Button $rounded $black />
                </Tooltip>
              </Col>
            </Row>
            <Row>
              <Col $sm={2}>
                <Tooltip text="Hello i m a primary Button" $top>
                  <Button $outline $rounded $primary />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m an info Button">
                  <Button $outline $rounded $info />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a warning Button" $top>
                  <Button $outline $rounded $warning />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a success Button" $top>
                  <Button $outline $rounded $success />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a danger Button">
                  <Button $outline $rounded $danger />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a black Button">
                  <Button $outline $rounded $black />
                </Tooltip>
              </Col>
            </Row>
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup">
              {`
               /* Note the component take the with of the column width */
               <Button $primary $rounded/>
               <Button $info    $rounded/>
               <Button $warning $rounded/>
               <Button $success $rounded/>
               <Button $danger  $rounded/>
               <Button $black   $rounded/>

               <Button $outline $rounded $primary/>
               <Button $outline $rounded $info/>
               <Button $outline $rounded $warning/>
               <Button $outline $rounded $success/>
               <Button $outline $rounded $danger/>
               <Button $outline $rounded $black/>
             `}
            </PrismCode>
          </Toggle>
        }
      />

      <PortletView
        title="Button Pill"
        content={
          <>
            <Row>
              <Col $sm={2}>
                <Tooltip text="Hello i m a pill primary Button" $top>
                  <Button $pill $primary />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a pill info Button">
                  <Button $pill $info />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a pill warning Button" $top>
                  <Button $pill $warning />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a pill success Button" $top>
                  <Button $pill $success />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a pill danger Button">
                  <Button $pill $danger />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a pill black Button">
                  <Button $pill $black />
                </Tooltip>
              </Col>
            </Row>
            <Row>
              <Col $sm={2}>
                <Tooltip text="Hello i m a primary Button" $top>
                  <Button $outline $pill $primary />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m an info Button">
                  <Button $outline $pill $info />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a warning Button" $top>
                  <Button $outline $pill $warning />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a success Button" $top>
                  <Button $outline $pill $success />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a danger Button">
                  <Button $outline $pill $danger />
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a black Button">
                  <Button $outline $pill $black />
                </Tooltip>
              </Col>
            </Row>
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup">
              {`
              <Button $primary $pill/>
              <Button $info $pill/>
              <Button $warning $pill/>
              <Button $success $pill/>
              <Button $danger $pill/>
              <Button $black $pill/>

              <Button $outline $pill $primary/>
              <Button $outline $pill $info/>
              <Button $outline $pill $warning/>
              <Button $outline $pill $success/>
              <Button $outline $pill $danger/>
              <Button $outline $pill $black/>
             `}
            </PrismCode>
          </Toggle>
        }
      />

      <PortletView
        title="Button Fullwidth"
        content={
          <>
            <Row>
              <Col $sm={6}>
                <Button label="Click here !" $fullwidth $primary />
              </Col>
              <Col $sm={6}>
                <Button label="Click here !" $outline $fullwidth $primary />
              </Col>
            </Row>
            <Row>
              <Col $sm={6}>
                <Button label="Click here !" $fullwidth $info />
              </Col>
              <Col $sm={6}>
                <Button label="Click here !" $outline $fullwidth $info />
              </Col>
            </Row>
            <Row>
              <Col $sm={6}>
                <Button label="Click here ! " $fullwidth $warning />
              </Col>
              <Col $sm={6}>
                <Button label="Click here ! " $outline $fullwidth $warning />
              </Col>
            </Row>
            <Row>
              <Col $sm={6}>
                <Button label="Click here ! " $fullwidth $success />
              </Col>
              <Col $sm={6}>
                <Button label="Click here ! " $outline $fullwidth $success />
              </Col>
            </Row>
            <Row>
              <Col $sm={6}>
                <Button label="Click here ! " $fullwidth $danger />
              </Col>
              <Col $sm={6}>
                <Button label="Click here ! " $outline $fullwidth $danger />
              </Col>
            </Row>
            <Row>
              <Col $sm={6}>
                <Button label="Click here ! " $fullwidth $black />
              </Col>
              <Col $sm={6}>
                <Button label="Click here ! " $outline $fullwidth $black />
              </Col>
            </Row>
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup">
              {`
               <Button  $primary $fullwidth label="Click here ! "/>
               <Button  $info $fullwidth label="Click here ! "/>
               <Button  $warning $fullwidth label="Click here ! "/>
               <Button  $success $fullwidth label="Click here ! "/>
               <Button  $danger $fullwidth label="Click here ! "/>
               <Button  $black $fullwidth label="Click here ! "/>

                <Button $outline $primary $fullwidth label="Click here ! "/>
                <Button $outline $info $fullwidth label="Click here ! "/>
                <Button $outline $warning $fullwidth label="Click here ! "/>
                <Button $outline $success $fullwidth label="Click here ! "/>
                <Button $outline $danger $fullwidth label="Click here ! "/>
                <Button $outline $black $fullwidth label="Click here ! "/>
             `}
            </PrismCode>
          </Toggle>
        }
      />
      <PortletView
        title="Button disabled"
        content={
          <>
            <Row>
              <Col $sm={4}>
                <Button $fullwidth disabled label="Click here !" />
              </Col>
              <Col $sm={4}>
                <Button $fullwidth disabled $rounded label="Click here !" />
              </Col>

              <Col $sm={4}>
                <Button $fullwidth disabled $pill label="Click here !" />
              </Col>
            </Row>
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup">
              {`
              <Button disabled $fullwidth label="Click here ! "/>
              <Button disabled $fullwidth  $rounded label="Click here ! "/>
              <Button disabled $fullwidth  $pill  label="Click here ! "/>
            
             `}
            </PrismCode>
          </Toggle>
        }
      />
    </Container>
  );
};

export default ButtonPage;
