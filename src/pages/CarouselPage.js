import React from 'react';
import Carousel from '../components/Carousel';
import PortletView from '../components/Portlet';
import { Container, Row, Col } from '../components/grid';
import fake_data from '../fake-data';
import CodeBlock from './pageUtils';
const CarouselPage = () => {
  const { carousel } = fake_data.pages;
  return (
    <>
      <PortletView
        title={carousel.page.title}
        content={
          <Container>
            <Row>
              <Col $sm={6}>
                <Carousel slides={carousel.slides.example2} />
              </Col>

              <Col $sm={6}>
                <Carousel slides={carousel.slides.example1} />
              </Col>
            </Row>
          </Container>
        }
        footer={
          <CodeBlock
            code={`
              
          <Container>
          <Row>
            <Col $sm={6}>
              <Carousel slides={carousel.slides.example2}  />
            </Col>

            <Col $sm={6}>
              <Carousel slides={carousel.slides.example1}  />
            </Col>
          </Row>
        </Container>
          `}
          />
        }
      />
      <PortletView
        title={carousel.page.title2}
        content={
          <Container>
            <Row>
              <Col $sm={6}>
                <Carousel slides={carousel.slides.example1} auto />
              </Col>

              <Col $sm={6}>
                <Carousel slides={carousel.slides.example2} auto />
              </Col>
            </Row>
          </Container>
        }
        footer={
          <CodeBlock
            code={`
              
          <Container>
          <Row>
            <Col $sm={6}>
              <Carousel slides={carousel.slides.example2} auto />
            </Col>

            <Col $sm={6}>
              <Carousel slides={carousel.slides.example1} auto />
            </Col>
          </Row>
        </Container>
          `}
          />
        }
      />
    </>
  );
};

export default CarouselPage;
