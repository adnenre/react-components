import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';
const CarouselWrapper = styled.div`
  position: relative;
  width: 100%; /* Use 100% width for responsiveness */
  min-height: 300px;
  height: 100%;
`;
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 90%;
`;

const SlideContainer = styled.div`
  height: inherit;
  display: flex;
  transition: transform 0.3s ease-in-out;
  width: ${(props) => `${props.totalSlides * 100}%`};
`;

const Slide = styled.div`
  height: 100%;
  flex: 0 0 ${(props) => `${100 / props.totalSlides}%`};
  max-width: 100%;
  text-align: center;
  img {
    max-width: 100%;
    height: auto;
  }
`;
const SlideText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${theme.colors.$info};
  font-size: 2rem;
  color: ${theme.colors.$default};
`;

const Button = styled.button`
  background-color: #0074cc;
  color: white;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
`;

const Indicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Indicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#0074cc' : '#ccc')};
  margin: 0 5px;
  cursor: pointer;
`;

const isImageUrl = (url) => {
  const supportedExtensions = [
    '.jpg',
    '.jpeg',
    '.png',
    '.gif',
    '.svg',
    '.webp',
  ];
  const lowercasedUrl = url.toLowerCase();
  return supportedExtensions.some((ext) => lowercasedUrl.endsWith(ext));
};

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <CarouselWrapper>
      <CarouselContainer>
        <SlideContainer
          totalSlides={slides.length}
          style={{
            transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <Slide key={index} totalSlides={slides.length}>
              {isImageUrl(slide) ? (
                <img src={slide} alt={`Slide ${index + 1}`} />
              ) : (
                <SlideText>{slide}</SlideText>
              )}
            </Slide>
          ))}
        </SlideContainer>
        {/* <Button onClick={prevSlide}>Previous</Button>
      <Button onClick={nextSlide}>Next</Button> */}
      </CarouselContainer>
      <Indicators>
        {slides.map((_, index) => (
          <Indicator
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Indicators>
    </CarouselWrapper>
  );
};
Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.element).isRequired,
};
export default Carousel;
