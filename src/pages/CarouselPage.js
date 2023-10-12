import React from 'react';
import Carousel from '../components/Carousel';
import PortletView from '../components/Portlet';
import { Container, Row, Col } from '../components/grid';
import fake_data from '../fake-data';
const CarouselPage = () => {
  const { carousel } = fake_data.pages;
  return (
    <PortletView
      title={carousel.page.title}
      content={
        <Container>
          <Row>
            <Col $sm={12}>
              <Carousel slides={carousel.slides.example2} />
            </Col>
          </Row>
          <Row>
            <Col $sm={12}>
              <Carousel slides={carousel.slides.example1} />
            </Col>
          </Row>
        </Container>
      }
    />
  );
};

export default CarouselPage;
