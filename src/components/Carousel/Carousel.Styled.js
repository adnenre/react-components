import styled from 'styled-components';
import theme from '../../theme';
const CarouselWrapper = styled.div`
  position: relative;
  width: 100%; /* Use 100% width for responsiveness */
  min-height: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
`;
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
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
    width: 100%;
    height: 100%;
  }
`;
const SlideText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${theme.color.$info};
  font-size: 2rem;
  color: ${theme.color.$white};
`;

const Indicators = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

const Indicator = styled.div`
  width: 25px;
  height: 5px;
  border-radius: 4px;
  background-color: ${({ $active }) =>
    $active ? theme.color.$primary : theme.color.$primary2};
  margin: 0 5px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  &::after {
    content: '';
    border-width: 1px;
    border-color: ${theme.color.$primary2};
    border-style: solid;
    border-radius: 4px;
    pointer-events: none;
    display: ${({ $active }) => ($active ? 'block' : 'none')};
    position: absolute;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
  }
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
