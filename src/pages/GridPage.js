import React from 'react';
import { Container, Row, Col } from '../components/grid';
import { Title } from '../components/Portlet/Portlet.Styled';
import {
  Portlet,
  PortletHeader,
  PortletBody,
  PortletFooter,
} from '../components/Portlet/Portlet.Styled';

import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';

const GridPage = () => {
  {
    /* demo style used to show the grid*/
  }
  return (
    <Container $fluid>
      <Portlet>
        <PortletHeader>
          <Title>Grid </Title>
        </PortletHeader>
        <PortletBody>
          <Row>
            <Col $col={1} $demo>
              1
            </Col>
            <Col $col={10} $demo>
              10
            </Col>
            <Col $col={1} $demo>
              1
            </Col>
          </Row>
          <Row>
            <Col $col={2} $demo>
              2
            </Col>
            <Col $col={2} $demo>
              2
            </Col>
            <Col $col={2} $demo>
              2
            </Col>
            <Col $col={2} $demo>
              2
            </Col>
            <Col $col={2} $demo>
              2
            </Col>
            <Col $col={2} $demo>
              2
            </Col>
          </Row>
          <Row>
            <Col $col={3} $demo>
              3
            </Col>
            <Col $col={3} $demo>
              3
            </Col>
            <Col $col={3} $demo>
              3
            </Col>
            <Col $col={3} $demo>
              3
            </Col>
          </Row>
          <Row>
            <Col $col={4} $demo>
              4
            </Col>
            <Col $col={4} $demo>
              4
            </Col>
            <Col $col={4} $demo>
              4
            </Col>
          </Row>
          <Row>
            <Col $col={5} $demo>
              5
            </Col>
            <Col $col={2} $demo>
              2
            </Col>
            <Col $col={5} $demo>
              5
            </Col>
          </Row>
          <Row>
            <Col $col={6} $demo>
              6
            </Col>
            <Col $col={6} $demo>
              6
            </Col>
          </Row>
          <Row>
            <Col $col={7} $demo>
              7
            </Col>
            <Col $col={5} $demo>
              5
            </Col>
          </Row>
          <Row>
            <Col $col={8} $demo>
              8
            </Col>
            <Col $col={4} $demo>
              4
            </Col>
          </Row>
          <Row>
            <Col $col={9} $demo>
              9
            </Col>
            <Col $col={3} $demo>
              3
            </Col>
          </Row>
          <Row>
            <Col $col={10} $demo>
              10
            </Col>
            <Col $col={2} $demo>
              2
            </Col>
          </Row>
          <Row>
            <Col $col={11} $demo>
              11
            </Col>
            <Col $col={1} $demo>
              1
            </Col>
          </Row>
          <Row>
            <Col $col={12} $demo>
              12
            </Col>
          </Row>
        </PortletBody>
        <PortletFooter>
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
               <Row>
                  <Col $col={1}  $demo>   1  </Col>
                  <Col $col={10} $demo>  10  </Col>
                  <Col $col={1}  $demo>   1  </Col>
              </Row>
              <Row>
                  <Col $col={2}  $demo>   2  </Col>
                  <Col $col={2}  $demo>   2  </Col>
                  <Col $col={2}  $demo>   2  </Col>
                  <Col $col={2}  $demo>   2  </Col>
                  <Col $col={2}  $demo>   2  </Col>
                  <Col $col={2}  $demo>   2  </Col>
              </Row>
              <Row>
                  <Col $col={3}  $demo>   3  </Col>
                  <Col $col={3}  $demo>   3  </Col>
                  <Col $col={3}  $demo>   3  </Col>
                  <Col $col={3}  $demo>   3  </Col>
              </Row>
              <Row>
                  <Col $col={4}  $demo>   4  </Col>
                  <Col $col={4}  $demo>   4  </Col>
                  <Col $col={4}  $demo>   4  </Col>
              </Row>
              <Row>
                  <Col $col={5}  $demo>   5  </Col>
                  <Col $col={2}  $demo>   2  </Col>
                  <Col $col={5}  $demo>   5  </Col>
              </Row>
            
              <Row>
                  <Col $col={6}  $demo>   6  </Col>
                  <Col $col={6}  $demo>   6  </Col>
              </Row>
              <Row>
                  <Col $col={7}  $demo>   7  </Col>
                  <Col $col={5}  $demo>   5  </Col>
              </Row>
              <Row>
                  <Col $col={8}  $demo>   8  </Col>
                  <Col $col={4}  $demo>   4  </Col>
              </Row>
              <Row>
                  <Col $col={9}  $demo>   9  </Col>
                  <Col $col={3}  $demo>   3  </Col>
              </Row>
              <Row>
                  <Col $col={10}  $demo>   10  </Col>
                  <Col $col={2}  $demo>     2  </Col>
              </Row>
              <Row>
                  <Col $col={11}  $demo>   11  </Col>
                  <Col $col={1}  $demo>     1  </Col>
              </Row>
              <Row>
                  <Col $col={12}  $demo>   12  </Col>
              </Row>
             
             
        
            `}
            </PrismCode>
          </Toggle>
        </PortletFooter>
      </Portlet>

      <Portlet>
        <PortletHeader>
          <Title>Grid Responsive</Title>
        </PortletHeader>
        <PortletBody>
          <Row>
            <Col $md={1} $sm={6} $demoOne>
              sm - 6
            </Col>
            <Col $md={1} $sm={6} $demoOne>
              sm - 6
            </Col>
            <Col $md={10} $sm={12} $demoOne>
              sm - 12
            </Col>
          </Row>
          <Row>
            <Col $md={2} $sm={4} $demoOne>
              sm - 4
            </Col>
            <Col $md={2} $sm={4} $demoOne>
              sm - 4
            </Col>
            <Col $md={2} $sm={4} $demoOne>
              sm - 4
            </Col>
            <Col $md={6} $sm={12} $demoOne>
              sm - 12
            </Col>
          </Row>
        </PortletBody>

        <PortletFooter>
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
                <Row>
                  <Col $md={1} $sm={6} >
                    sm - 6
                  </Col>
                  <Col $md={1} $sm={6} >
                    sm - 6
                  </Col>
                  <Col $md={10} $sm={12} >
                    sm - 12
                  </Col>
                </Row>
                <Row>
                  <Col $md={2} $sm={4} >
                    sm - 4
                  </Col>
                  <Col $md={2} $sm={4} >
                    sm - 4
                  </Col>
                  <Col $md={2} $sm={4} >
                    sm - 4
                  </Col>
                  <Col $md={6} $sm={12} >
                    sm - 12
                  </Col>
                </Row>
            `}
            </PrismCode>
          </Toggle>
        </PortletFooter>
      </Portlet>

      <Portlet>
        <PortletHeader>
          <Title>Grid offset</Title>
        </PortletHeader>
        <PortletBody>
          <Row>
            <Col $col={3} $offset={4} $demoOne>
              3
            </Col>
            <Col $col={2} $offset={1} $demoOne>
              2
            </Col>
            <Col $col={1} $offset={1} $demoOne>
              1
            </Col>
          </Row>

          <Row>
            <Col $col={3} $offset={3} $demoOne>
              3
            </Col>
            <Col $col={2} $offset={1} $demoOne>
              2
            </Col>
            <Col $col={1} $offset={1} $demoOne>
              1
            </Col>
          </Row>
          <Row>
            <Col $col={3} $offset={2} $demoOne>
              3
            </Col>
            <Col $col={2} $offset={1} $demoOne>
              2
            </Col>
            <Col $col={1} $offset={1} $demoOne>
              1
            </Col>
          </Row>
        </PortletBody>
      </Portlet>

      <Portlet>
        <PortletHeader>
          <Title>Grid space between</Title>
        </PortletHeader>
        <PortletBody>
          <Row $align={'spaceBetween'}>
            <Col $col={1} $demoOne>
              1
            </Col>
            <Col $col={4} $demoOne>
              4
            </Col>
            <Col $col={1} $demoOne>
              1
            </Col>
          </Row>
          <Row $align={'spaceBetween'}>
            <Col $col={2} $demoOne>
              2
            </Col>
            <Col $col={3} $demoOne>
              3
            </Col>
            <Col $col={2} $demoOne>
              2
            </Col>
          </Row>
          <Row $align={'spaceBetween'}>
            <Col $col={3} $demoOne>
              3
            </Col>
            <Col $col={2} $demoOne>
              2
            </Col>
            <Col $col={3} $demoOne>
              3
            </Col>
          </Row>
          <Row $align={'spaceBetween'}>
            <Col $col={4} $demoOne>
              4
            </Col>
            <Col $col={1} $demoOne>
              1
            </Col>
            <Col $col={4} $demoOne>
              4
            </Col>
          </Row>
        </PortletBody>
      </Portlet>

      <Portlet>
        <PortletHeader>
          <Title>Grid Space Around</Title>
        </PortletHeader>
        <PortletBody>
          <Row $align={'spaceAround'}>
            <Col $col={1} $demoOne>
              1
            </Col>
            <Col $col={4} $demoOne>
              4
            </Col>
            <Col $col={1} $demoOne>
              1
            </Col>
          </Row>
          <Row $align={'spaceAround'}>
            <Col $col={2} $demoOne>
              2
            </Col>
            <Col $col={3} $demoOne>
              3
            </Col>
            <Col $col={2} $demoOne>
              2
            </Col>
          </Row>
          <Row $align={'spaceAround'}>
            <Col $col={3} $demoOne>
              3
            </Col>
            <Col $col={2} $demoOne>
              2
            </Col>
            <Col $col={3} $demoOne>
              3
            </Col>
          </Row>
          <Row $align={'spaceAround'}>
            <Col $col={4} $demoOne>
              4
            </Col>
            <Col $col={1} $demoOne>
              1
            </Col>
            <Col $col={4} $demoOne>
              4
            </Col>
          </Row>
        </PortletBody>
      </Portlet>

      <Portlet>
        <PortletHeader>
          <Title>Grid $align center</Title>
        </PortletHeader>
        <PortletBody>
          <Row $align={'center'}>
            <Col $col={1} $demoOne>
              1
            </Col>
            <Col $col={4} $demo>
              4
            </Col>
            <Col $col={1} $demoOne>
              1
            </Col>
          </Row>
          <Row $align={'center'}>
            <Col $col={2} $demoOne>
              2
            </Col>
            <Col $col={3} $demo>
              3
            </Col>
            <Col $col={2} $demoOne>
              2
            </Col>
          </Row>
          <Row $align={'center'}>
            <Col $col={3} $demoOne>
              3
            </Col>
            <Col $col={2} $demo>
              2
            </Col>
            <Col $col={3} $demoOne>
              3
            </Col>
          </Row>
          <Row $align={'center'}>
            <Col $col={4} $demoOne>
              4
            </Col>
            <Col $col={1} $demo>
              1
            </Col>
            <Col $col={4} $demoOne>
              4
            </Col>
          </Row>
        </PortletBody>
      </Portlet>

      <Portlet>
        <PortletHeader>
          <Title>Grid $align flex-end</Title>
        </PortletHeader>
        <PortletBody>
          <Row $align={'flexEnd'}>
            <Col $col={1} $demoOne>
              1
            </Col>
            <Col $col={4} $demo>
              4
            </Col>
            <Col $col={1} $demoOne>
              1
            </Col>
          </Row>
          <Row $align={'flexEnd'}>
            <Col $col={2} $demoOne>
              2
            </Col>
            <Col $col={3} $demo>
              3
            </Col>
            <Col $col={2} $demoOne>
              2
            </Col>
          </Row>
          <Row $align={'flexEnd'}>
            <Col $col={3} $demoOne>
              3
            </Col>
            <Col $col={2} $demo>
              2
            </Col>
            <Col $col={3} $demoOne>
              3
            </Col>
          </Row>
          <Row $align={'flexEnd'}>
            <Col $col={4} $demoOne>
              4
            </Col>
            <Col $col={1} $demo>
              1
            </Col>
            <Col $col={4} $demoOne>
              4
            </Col>
          </Row>
        </PortletBody>
      </Portlet>
    </Container>
  );
};

export default GridPage;
