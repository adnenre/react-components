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
                  <Button $primary> primary</Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m an info Button" $top>
                  <Button $info>info</Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a warning Button" $top>
                  <Button $warning>warning</Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a success Button" $top>
                  <Button $success>success</Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a danger Button" $top>
                  <Button $danger>danger</Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a black Button" $top>
                  <Button $black>black</Button>
                </Tooltip>
              </Col>
            </Row>
            <Row>
              <Col $sm={2}>
                <Tooltip text="Hello i m a rounded primary Button" $top>
                  <Button $rounded $primary>
                    primary
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a rounded info Button">
                  <Button $rounded $info>
                    info
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a rounded warning Button" $top>
                  <Button $rounded $warning>
                    warning
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a rounded success Button" $top>
                  <Button $rounded $success>
                    success
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a danger Button">
                  <Button $rounded $danger>
                    danger
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a black Button">
                  <Button $rounded $black>
                    black
                  </Button>
                </Tooltip>
              </Col>
            </Row>
            <Row>
              <Col $sm={2}>
                <Tooltip text="Hello i m a pill primary Button" $top>
                  <Button $pill $primary>
                    primary
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a pill info Button">
                  <Button $pill $info>
                    info
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a pill warning Button" $top>
                  <Button $pill $warning>
                    warning
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a pill success Button" $top>
                  <Button $pill $success>
                    success
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a pill danger Button">
                  <Button $pill $danger>
                    danger
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a pill black Button">
                  <Button $pill $black>
                    black
                  </Button>
                </Tooltip>
              </Col>
            </Row>

            <Row>
              <Col $sm={2}>
                <Tooltip text="Hello i m a primary Button" $top>
                  <Button $outline $primary>
                    primary
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m an info Button">
                  <Button $outline $info>
                    info
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a warning Button" $top>
                  <Button $outline $warning>
                    warning
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a success Button" $top>
                  <Button $outline $success>
                    success
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a danger Button">
                  <Button $outline $danger>
                    danger
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a black Button">
                  <Button $outline $black>
                    black
                  </Button>
                </Tooltip>
              </Col>
            </Row>
            <Row>
              <Col $sm={2}>
                <Tooltip text="Hello i m a primary Button" $top>
                  <Button $outline $rounded $primary>
                    primary
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m an info Button">
                  <Button $outline $rounded $info>
                    info
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a warning Button" $top>
                  <Button $outline $rounded $warning>
                    warning
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a success Button" $top>
                  <Button $outline $rounded $success>
                    success
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a danger Button">
                  <Button $outline $rounded $danger>
                    danger
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a black Button">
                  <Button $outline $rounded $black>
                    black
                  </Button>
                </Tooltip>
              </Col>
            </Row>
            <Row>
              <Col $sm={2}>
                <Tooltip text="Hello i m a primary Button" $top>
                  <Button $outline $pill $primary>
                    primary
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m an info Button">
                  <Button $outline $pill $info>
                    info
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a warning Button" $top>
                  <Button $outline $pill $warning>
                    warning
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a success Button" $top>
                  <Button $outline $pill $success>
                    success
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a danger Button">
                  <Button $outline $pill $danger>
                    danger
                  </Button>
                </Tooltip>
              </Col>
              <Col $sm={2}>
                <Tooltip text="Hello i m a black Button">
                  <Button $outline $pill $black>
                    black
                  </Button>
                </Tooltip>
              </Col>
            </Row>
            <Row>
              <Col $sm={12}>
                <Tooltip text="Hello i m a disabled Button">
                  <Button disabled>disabled</Button>
                </Tooltip>
              </Col>
            </Row>
            <Row>
              <Col $sm={12}>
                <Tooltip text="Hello i m disabled rounded Button">
                  <Button disabled $rounded>
                    disabled
                  </Button>
                </Tooltip>
              </Col>
            </Row>
            <Row>
              <Col $sm={12}>
                <Tooltip text="Hello i m disabled pill Button">
                  <Button disabled $pill>
                    disabled
                  </Button>
                </Tooltip>
              </Col>
            </Row>
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
          <Button $primary> primary </Button>
          <Button $info>    info    </Button>
          <Button $warning> warning </Button>
          <Button $success> success </Button>
          <Button $danger>  danger  </Button>
          <Button $black>   black   </Button>

          <Button $rounded $primary> primary </Button>
          <Button $rounded $info>    info    </Button>
          <Button $rounded $warning> warning </Button>
          <Button $rounded $success> success </Button>
          <Button $rounded $danger>  danger  </Button>
          <Button $rounded $black>   black   </Button>
          
          <Button $pill $primary> primary </Button>
          <Button $pill $info>    info    </Button>
          <Button $pill $warning> warning </Button>
          <Button $pill $success> success </Button>
          <Button $pill $danger>  danger  </Button>
          <Button $pill $black>   black   </Button>

          <Button $outline $primary> primary </Button>
          <Button $outline $info>    info    </Button>
          <Button $outline $warning> warning </Button>
          <Button $outline $success> success </Button>
          <Button $outline $danger>  danger  </Button>
          <Button $outline $black>   black   </Button>

          <Button $outline $rounded $primary> primary </Button>
          <Button $outline $rounded $info>    info    </Button>
          <Button $outline $rounded $warning> warning </Button>
          <Button $outline $rounded $success> success </Button>
          <Button $outline $rounded $danger>  danger  </Button>
          <Button $outline $rounded $black>   black   </Button>

          <Button $outline $pill $primary> primary </Button>
          <Button $outline $pill $info>    info    </Button>
          <Button $outline $pill $warning> warning </Button>
          <Button $outline $pill $success> success </Button>
          <Button $outline $pill $danger>  danger  </Button>
          <Button $outline $pill $black>   black   </Button>

          <Button disabled>          disabled    </Button>
          <Button disabled $rounded> disabled    </Button>
          <Button disabled $pill>    disabled    </Button>
          
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
              <Col $sm={2}>
                <Button $fullwidth $primary>
                  {' '}
                  primary
                </Button>
              </Col>
            </Row>
            <Row>
              <Col $sm={4}>
                <Button $fullwidth $info>
                  {' '}
                  info
                </Button>
              </Col>
            </Row>
            <Row>
              <Col $sm={6}>
                <Button $fullwidth $warning>
                  primary
                </Button>
              </Col>
            </Row>
            <Row>
              <Col $sm={8}>
                <Button $fullwidth $success>
                  success
                </Button>
              </Col>
            </Row>
            <Row>
              <Col $sm={10}>
                <Button $fullwidth $danger>
                  danger
                </Button>
              </Col>
            </Row>
            <Row>
              <Col $sm={12}>
                <Button $fullwidth $black>
                  black
                </Button>
              </Col>
            </Row>
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup">
              {`
               /* Note the component take the with of the column width */
               <Button $primary $fullwidth> primary </Button>
               <Button $info    $fullwidth> info    </Button>
               <Button $warning $fullwidth> warning </Button>
               <Button $success $fullwidth> success </Button>
               <Button $danger  $fullwidth> danger  </Button>
               <Button $black   $fullwidth> black   </Button>
             `}
            </PrismCode>
          </Toggle>
        }
      />

      <PortletView
        title="Button"
        content={
          <>
            <Row>
              <Col $sm={2}>
                <Button $primary> primary</Button>
              </Col>
            </Row>
            <Row>
              <Col $sm={4}>
                <Button $info> info</Button>
              </Col>
            </Row>
            <Row>
              <Col $sm={6}>
                <Button $warning> primary</Button>
              </Col>
            </Row>
            <Row>
              <Col $sm={8}>
                <Button $success>success</Button>
              </Col>
            </Row>
            <Row>
              <Col $sm={10}>
                <Button $danger>danger</Button>
              </Col>
            </Row>
            <Row>
              <Col $sm={12}>
                <Button $black>black</Button>
              </Col>
            </Row>
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup">
              {`
              <Button $primary> primary </Button>
              <Button $info>    info    </Button>
              <Button $warning> warning </Button>
              <Button $success> success </Button>
              <Button $danger>  danger  </Button>
              <Button $black>   black   </Button>
             `}
            </PrismCode>
          </Toggle>
        }
      />

      <PortletView
        title="Button"
        content={
          <>
            <Row>
              <Col $sm={2}>
                <Button $fullwidth $primary>
                  {' '}
                  primary
                </Button>
              </Col>
            </Row>
            <Row>
              <Col $sm={4}>
                <Button $fullwidth $info>
                  {' '}
                  info
                </Button>
              </Col>
            </Row>
            <Row>
              <Col $sm={6}>
                <Button $fullwidth $warning>
                  {' '}
                  primary
                </Button>
              </Col>
            </Row>
            <Row>
              <Col $sm={8}>
                <Button $fullwidth $success>
                  success
                </Button>
              </Col>
            </Row>
            <Row>
              <Col $sm={10}>
                <Button $fullwidth $danger>
                  danger
                </Button>
              </Col>
            </Row>
            <Row>
              <Col $sm={12}>
                <Button $fullwidth $black>
                  black
                </Button>
              </Col>
            </Row>
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup">
              {`
              <Button $primary $fullwidth> primary </Button>
              <Button $info $fullwidth>    info    </Button>
              <Button $warning $fullwidth> warning </Button>
              <Button $success $fullwidth> success </Button>
              <Button $danger $fullwidth>  danger  </Button>
              <Button $black $fullwidth>   black   </Button>
             `}
            </PrismCode>
          </Toggle>
        }
      />
    </Container>
  );
};

export default ButtonPage;
