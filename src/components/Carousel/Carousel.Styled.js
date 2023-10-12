import styled from 'styled-components';
import theme from '../../theme';
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
  width: ${({ $totalSlides }) => `${$totalSlides * 100}%`};
`;

const Slide = styled.div`
  height: 100%;
  flex: 0 0 ${({ $totalSlides }) => `${100 / $totalSlides}%`};
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

const Indicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Indicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ $active }) => ($active ? '#0074cc' : '#ccc')};
  margin: 0 5px;
  cursor: pointer;
`;

export {
  CarouselWrapper,
  CarouselContainer,
  SlideContainer,
  Slide,
  SlideText,
  Indicators,
  Indicator,
};
