import React from 'react';
import Button from '../components/Button';
import ButtonOutline from '../components/ButtonOutline';
import Title from '../components/Title';
import { Portlet, PortletHeader, PortletBody } from '../components/Portlet';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Toggle from '../components/Toggle';
import { Container, Row, Col } from '../components/grid';
const ButtonPage = () => {
  return (
    <Container>
      <Portlet>
        <PortletHeader>
          <Title>Button component</Title>
        </PortletHeader>
        <PortletBody>
          <Row>
            <Col sm={2}>
              <Button primary> primary</Button>
            </Col>
            <Col sm={2}>
              <Button info>info</Button>
            </Col>
            <Col sm={2}>
              <Button warning>warning</Button>
            </Col>
            <Col sm={2}>
              <Button success>success</Button>
            </Col>
            <Col sm={2}>
              <Button danger>danger</Button>
            </Col>
            <Col sm={2}>
              <Button black>black</Button>
            </Col>
          </Row>

          <br />
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
          <Button primary> primary </Button>
          <Button info>    info    </Button>
          <Button warning> warning </Button>
          <Button success> success </Button>
          <Button danger>  danger  </Button>
          <Button black>   black   </Button>
            `}
            </PrismCode>
          </Toggle>
        </PortletBody>
      </Portlet>

      <Portlet>
        <PortletHeader>
          <Title>Button component fullwidth</Title>
        </PortletHeader>
        <PortletBody>
          <Row>
            <Col sm={2}>
              <Button fullwidth primary>
                {' '}
                primary
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <Button fullwidth info>
                {' '}
                info
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Button fullwidth warning>
                {' '}
                primary
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm={8}>
              <Button fullwidth success>
                success
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm={10}>
              <Button fullwidth danger>
                danger
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Button fullwidth black>
                black
              </Button>
            </Col>
          </Row>
          <br />
          <Toggle>
            <PrismCode component="pre" className="language-markup">
              {`
              /* Note the component take the with of the column width */
              <Button primary fullwidth> primary </Button>
              <Button info    fullwidth> info    </Button>
              <Button warning fullwidth> warning </Button>
              <Button success fullwidth> success </Button>
              <Button danger  fullwidth> danger  </Button>
              <Button black   fullwidth> black   </Button>
            `}
            </PrismCode>
          </Toggle>
        </PortletBody>
      </Portlet>

      <Portlet>
        <PortletHeader>
          <Title>ButtonOutline component</Title>
        </PortletHeader>
        <PortletBody>
          <Row>
            <Col sm={2}>
              <ButtonOutline primary> primary</ButtonOutline>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <ButtonOutline info> info</ButtonOutline>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <ButtonOutline warning> primary</ButtonOutline>
            </Col>
          </Row>
          <Row>
            <Col sm={8}>
              <ButtonOutline success>success</ButtonOutline>
            </Col>
          </Row>
          <Row>
            <Col sm={10}>
              <ButtonOutline danger>danger</ButtonOutline>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <ButtonOutline black>black</ButtonOutline>
            </Col>
          </Row>
          <Toggle>
            <PrismCode component="pre" className="language-markup">
              {`
             <ButtonOutline primary> primary </ButtonOutline>
             <ButtonOutline info>    info    </ButtonOutline>
             <ButtonOutline warning> warning </ButtonOutline>
             <ButtonOutline success> success </ButtonOutline>
             <ButtonOutline danger>  danger  </ButtonOutline>
             <ButtonOutline black>   black   </ButtonOutline>
            `}
            </PrismCode>
          </Toggle>
        </PortletBody>
      </Portlet>

      <Portlet>
        <PortletHeader>
          <Title>ButtonOutline component fullwidth</Title>
        </PortletHeader>
        <PortletBody>
          <Row>
            <Col sm={2}>
              <ButtonOutline fullwidth primary>
                {' '}
                primary
              </ButtonOutline>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <ButtonOutline fullwidth info>
                {' '}
                info
              </ButtonOutline>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <ButtonOutline fullwidth warning>
                {' '}
                primary
              </ButtonOutline>
            </Col>
          </Row>
          <Row>
            <Col sm={8}>
              <ButtonOutline fullwidth success>
                success
              </ButtonOutline>
            </Col>
          </Row>
          <Row>
            <Col sm={10}>
              <ButtonOutline fullwidth danger>
                danger
              </ButtonOutline>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <ButtonOutline fullwidth black>
                black
              </ButtonOutline>
            </Col>
          </Row>
          <Toggle>
            <PrismCode component="pre" className="language-markup">
              {`
             <ButtonOutline primary fullwidth> primary </ButtonOutline>
             <ButtonOutline info fullwidth>    info    </ButtonOutline>
             <ButtonOutline warning fullwidth> warning </ButtonOutline>
             <ButtonOutline success fullwidth> success </ButtonOutline>
             <ButtonOutline danger fullwidth>  danger  </ButtonOutline>
             <ButtonOutline black fullwidth>   black   </ButtonOutline>
            `}
            </PrismCode>
          </Toggle>
        </PortletBody>
      </Portlet>
    </Container>
  );
};

export default ButtonPage;
