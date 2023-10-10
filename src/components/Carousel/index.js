import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  CarouselWrapper,
  CarouselContainer,
  SlideContainer,
  Slide,
  SlideText,
  Indicators,
  Indicator,
} from './Carousel.Styled';
import { isImageUrl } from '../utility';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
