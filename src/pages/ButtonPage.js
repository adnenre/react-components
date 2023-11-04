import React from 'react';
import Button from '../components/Button';
import PortletView from '../components/Portlet';

import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';
import { Container, Row, Col } from '../components/grid';
import Tooltip from '../components/Tooltip';
import fake_data from '../fake-data';
const ButtonPage = () => {
  const { button } = fake_data.pages;
  return (
    <Container>
      <PortletView
        title={button.page.title}
        content={
          <>
            <Row>
              <Col $sm={3}>
                <Button />
              </Col>

              <Col $sm={3}>
                <Button $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button label="disabled" disabled />
              </Col>
            </Row>
            <Row>
              <Col $sm={3}>
                <Button $primary />
              </Col>
              <Col $sm={3}>
                <Button $primary $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $primary $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button $primary $link label="disabled" disabled />
              </Col>
            </Row>
            <Row>
              <Col $sm={3}>
                <Button $secondary />
              </Col>

              <Col $sm={3}>
                <Button $secondary $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $secondary $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button $secondary $link label="disabled" disabled />
              </Col>
            </Row>
            <Row>
              <Col $sm={3}>
                <Button $info />
              </Col>

              <Col $sm={3}>
                <Button $info $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $info $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button $info $link label="disabled" disabled />
              </Col>
            </Row>
            <Row>
              <Col $sm={3}>
                <Button $warning />
              </Col>

              <Col $sm={3}>
                <Button $warning $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $warning $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button $warning $link label="disabled" disabled />
              </Col>
            </Row>
            <Row>
              <Col $sm={3}>
                <Button $success />
              </Col>

              <Col $sm={3}>
                <Button $success $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $success $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button $success $link label="disabled" disabled />
              </Col>
            </Row>
            <Row>
              <Col $sm={3}>
                <Button $danger />
              </Col>

              <Col $sm={3}>
                <Button $danger $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $danger $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button $danger $link label="disabled" disabled />
              </Col>
            </Row>
            <Row>
              <Col $sm={3}>
                <Button $black />
              </Col>

              <Col $sm={3}>
                <Button $black $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $black $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button $black $link label="disabled" disabled />
              </Col>
            </Row>
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
        <Row>
          <Col $sm={3}>
            <Button />
          </Col>
          <Col $sm={3}>
            <Button $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button label="disabled" disabled />
          </Col>
        </Row>

        <Row>
          <Col $sm={3}>
            <Button $primary />
          </Col>
          <Col $sm={3}>
            <Button $primary $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $primary $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $primary $link label="disabled" disabled />
          </Col>
        </Row>

        <Row>
          <Col $sm={3}>
            <Button $secondary />
          </Col>
          <Col $sm={3}>
            <Button $secondary $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $secondary $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $secondary $link label="disabled" disabled />
          </Col>
        </Row>

        <Row>
          <Col $sm={3}>
            <Button $info />
          </Col>
          <Col $sm={3}>
            <Button $info $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $info $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $info $link label="disabled" disabled />
          </Col>
        </Row>

        <Row>
          <Col $sm={3}>
            <Button $warning />
          </Col>
          <Col $sm={3}>
            <Button $warning $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $warning $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $warning $link label="disabled" disabled />
          </Col>
        </Row>

        <Row>
          <Col $sm={3}>
            <Button $success />
          </Col>
          <Col $sm={3}>
            <Button $success $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $success $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $success $link label="disabled" disabled />
          </Col>
        </Row>
        
        <Row>
          <Col $sm={3}>
            <Button $danger />
          </Col>
          <Col $sm={3}>
            <Button $danger $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $danger $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $danger $link label="disabled" disabled />
          </Col>
        </Row>

        <Row>
          <Col $sm={3}>
            <Button $black />
          </Col>
          <Col $sm={3}>
            <Button $black $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $black $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $black $link label="disabled" disabled />
          </Col>
        </Row>
          
            `}
            </PrismCode>
          </Toggle>
        }
      />
      <PortletView
        title={button.page.title2}
        content={
          <>
            <Row>
              <Col $sm={3}>
                <Button $rounded />
              </Col>

              <Col $sm={3}>
                <Button $rounded $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $rounded $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button $rounded label="disabled" disabled />
              </Col>
            </Row>
            <Row>
              <Col $sm={3}>
                <Button $rounded $primary />
              </Col>
              <Col $sm={3}>
                <Button $rounded $primary $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $rounded $primary $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button
                  $rounded
                  $pill
                  $primary
                  $link
                  label="disabled"
                  disabled
                />
              </Col>
            </Row>
            <Row>
              <Col $sm={3}>
                <Button $rounded $secondary />
              </Col>

              <Col $sm={3}>
                <Button $rounded $secondary $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $rounded $secondary $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button
                  $rounded
                  $pill
                  $secondary
                  $link
                  label="disabled"
                  disabled
                />
              </Col>
            </Row>
            <Row>
              <Col $sm={3}>
                <Button $rounded $info />
              </Col>

              <Col $sm={3}>
                <Button $rounded $info $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $rounded $info $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button $rounded $info $link label="disabled" disabled />
              </Col>
            </Row>
            <Row>
              <Col $sm={3}>
                <Button $rounded $warning />
              </Col>

              <Col $sm={3}>
                <Button $rounded $warning $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $rounded $warning $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button
                  $rounded
                  $pill
                  $warning
                  $link
                  label="disabled"
                  disabled
                />
              </Col>
            </Row>
            <Row>
              <Col $sm={3}>
                <Button $rounded $success />
              </Col>

              <Col $sm={3}>
                <Button $rounded $success $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $rounded $success $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button
                  $rounded
                  $pill
                  $success
                  $link
                  label="disabled"
                  disabled
                />
              </Col>
            </Row>
            <Row>
              <Col $sm={3}>
                <Button $rounded $danger />
              </Col>

              <Col $sm={3}>
                <Button $rounded $danger $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $rounded $danger $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button
                  $rounded
                  $pill
                  $danger
                  $link
                  label="disabled"
                  disabled
                />
              </Col>
            </Row>
            <Row>
              <Col $sm={3}>
                <Button $rounded $black />
              </Col>

              <Col $sm={3}>
                <Button $rounded $black $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $rounded $black $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button $rounded $black $link label="disabled" disabled />
              </Col>
            </Row>
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
        <Row>
          <Col $sm={3}>
            <Button $rounded />
          </Col>
          <Col $sm={3}>
            <Button $rounded $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $rounded $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $rounded label="disabled" disabled />
          </Col>
        </Row>

        <Row>
          <Col $sm={3}>
            <Button $rounded $primary />
          </Col>
          <Col $sm={3}>
            <Button $rounded $primary $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $rounded $primary $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $rounded $primary $link label="disabled" disabled />
          </Col>
        </Row>

        <Row>
          <Col $sm={3}>
            <Button $rounded $secondary />
          </Col>
          <Col $sm={3}>
            <Button $rounded $secondary $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $rounded $secondary $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $rounded $secondary $link label="disabled" disabled />
          </Col>
        </Row>

        <Row>
          <Col $sm={3}>
            <Button $rounded $info />
          </Col>
          <Col $sm={3}>
            <Button $rounded $info $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $rounded $info $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $rounded $info $link label="disabled" disabled />
          </Col>
        </Row>

        <Row>
          <Col $sm={3}>
            <Button $rounded $warning />
          </Col>
          <Col $sm={3}>
            <Button $rounded $warning $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $rounded $warning $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $rounded $warning $link label="disabled" disabled />
          </Col>
        </Row>

        <Row>
          <Col $sm={3}>
            <Button $rounded $success />
          </Col>
          <Col $sm={3}>
            <Button $rounded $success $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $rounded $success $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $rounded $success $link label="disabled" disabled />
          </Col>
        </Row>
        
        <Row>
          <Col $sm={3}>
            <Button $rounded $danger />
          </Col>
          <Col $sm={3}>
            <Button $rounded $danger $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $rounded $danger $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $rounded $danger $link label="disabled" disabled />
          </Col>
        </Row>

        <Row>
          <Col $sm={3}>
            <Button $rounded $black />
          </Col>
          <Col $sm={3}>
            <Button $rounded $black $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $rounded $black $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $rounded $black $link label="disabled" disabled />
          </Col>
        </Row>
          
            `}
            </PrismCode>
          </Toggle>
        }
      />

      <PortletView
        title={button.page.title}
        content={
          <>
            <Row>
              <Col $sm={3}>
                <Button $pill />
              </Col>

              <Col $sm={3}>
                <Button $pill $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $pill $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button $pill label="disabled" disabled />
              </Col>
            </Row>
            <Row>
              <Col $sm={3}>
                <Button $pill $primary />
              </Col>
              <Col $sm={3}>
                <Button $pill $primary $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $pill $primary $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button
                  $rounded
                  $pill
                  $primary
                  $link
                  label="disabled"
                  disabled
                />
              </Col>
            </Row>
            <Row>
              <Col $sm={3}>
                <Button $pill $secondary />
              </Col>

              <Col $sm={3}>
                <Button $pill $secondary $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $pill $secondary $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button
                  $rounded
                  $pill
                  $secondary
                  $link
                  label="disabled"
                  disabled
                />
              </Col>
            </Row>
            <Row>
              <Col $sm={3}>
                <Button $pill $info />
              </Col>

              <Col $sm={3}>
                <Button $pill $info $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $pill $info $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button $pill $info $link label="disabled" disabled />
              </Col>
            </Row>
            <Row>
              <Col $sm={3}>
                <Button $pill $warning />
              </Col>

              <Col $sm={3}>
                <Button $pill $warning $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $pill $warning $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button
                  $rounded
                  $pill
                  $warning
                  $link
                  label="disabled"
                  disabled
                />
              </Col>
            </Row>
            <Row>
              <Col $sm={3}>
                <Button $pill $success />
              </Col>

              <Col $sm={3}>
                <Button $pill $success $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $pill $success $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button
                  $rounded
                  $pill
                  $success
                  $link
                  label="disabled"
                  disabled
                />
              </Col>
            </Row>
            <Row>
              <Col $sm={3}>
                <Button $pill $danger />
              </Col>

              <Col $sm={3}>
                <Button $pill $danger $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $pill $danger $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button
                  $rounded
                  $pill
                  $danger
                  $link
                  label="disabled"
                  disabled
                />
              </Col>
            </Row>
            <Row>
              <Col $sm={3}>
                <Button $pill $black />
              </Col>

              <Col $sm={3}>
                <Button $pill $black $outline label="outline" />
              </Col>
              <Col $sm={3}>
                <Button $pill $black $link label="link" />
              </Col>
              <Col $sm={3}>
                <Button $pill $black $link label="disabled" disabled />
              </Col>
            </Row>
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
        <Row>
          <Col $sm={3}>
            <Button $pill />
          </Col>
          <Col $sm={3}>
            <Button $pill $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $pill $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $pill label="disabled" disabled />
          </Col>
        </Row>

        <Row>
          <Col $sm={3}>
            <Button $pill $primary />
          </Col>
          <Col $sm={3}>
            <Button $pill $primary $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $pill $primary $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $pill $primary $link label="disabled" disabled />
          </Col>
        </Row>

        <Row>
          <Col $sm={3}>
            <Button $pill $secondary />
          </Col>
          <Col $sm={3}>
            <Button $pill $secondary $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $pill $secondary $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $pill $secondary $link label="disabled" disabled />
          </Col>
        </Row>

        <Row>
          <Col $sm={3}>
            <Button $pill $info />
          </Col>
          <Col $sm={3}>
            <Button $pill $info $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $pill $info $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $pill $info $link label="disabled" disabled />$rounded
          </Col>
        </Row>

        <Row>
          <Col $sm={3}>
            <Button $pill $warning />
          </Col>
          <Col $sm={3}>
            <Button $pill $warning $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $pill $warning $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $pill $warning $link label="disabled" disabled />
          </Col>
        </Row>

        <Row>
          <Col $sm={3}>
            <Button $pill $success />
          </Col>
          <Col $sm={3}>
            <Button $pill $success $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $pill $success $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $pill $success $link label="disabled" disabled />
          </Col>
        </Row>
        
        <Row>
          <Col $sm={3}>
            <Button $pill $danger />
          </Col>
          <Col $sm={3}>
            <Button $pill $danger $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $pill $danger $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $pill $danger $link label="disabled" disabled />
          </Col>
        </Row>

        <Row>
          <Col $sm={3}>
            <Button $pill $black />
          </Col>
          <Col $sm={3}>
            <Button $pill $black $outline label="outline" />
          </Col>
          <Col $sm={3}>
            <Button $pill $black $link label="link" />
          </Col>
          <Col $sm={3}>
            <Button $pill $black $link label="disabled" disabled />
          </Col>
        </Row>
          
            `}
            </PrismCode>
          </Toggle>
        }
      />

      <PortletView
        title={button.page.title4}
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
        title={button.page.title5}
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
