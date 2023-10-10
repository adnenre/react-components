import React from 'react';
import Carousel from '../components/Carousel';
import PortletView from '../components/Portlet';
import { Container, Row, Col } from '../components/grid';

const slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'];
const slides2 = [
  'https://gratisography.com/wp-content/uploads/2023/06/gratisography-flying-squirrel-free-stock-photo-1170x780.jpg',
  'https://gratisography.com/wp-content/uploads/2023/06/gratisography-tiny-parrot-free-stock-photo-1170x780.jpg',
  'https://gratisography.com/wp-content/uploads/2023/06/gratisography-happy-coffee-free-stock-photo-1170x780.jpg',
  'https://gratisography.com/wp-content/uploads/2023/06/gratisography-surfing-dog-free-stock-photo-1170x780.jpg',
];
const CarouselPage = () => {
  return (
    <PortletView
      title="Carousel Component"
      content={
        <Container>
          <Row>
            <Col $sm={12}>
              <Carousel slides={slides2} />
            </Col>
            <Col $sm={12}>
              <Carousel slides={slides} />
            </Col>
          </Row>
        </Container>
      }
    />
  );
};

export default CarouselPage;
