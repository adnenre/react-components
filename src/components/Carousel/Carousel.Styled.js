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
  &:hover {
    > button.navigation-btn {
      opacity: 0.5;
    }
  }
  > button.navigation-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.color.$dark10};
    opacity: 0;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    min-width: 30px;
    border: none;
    transition: 0.3s;
    &:hover {
      opacity: 0.8;
    }
  }

  > button.prev-slid {
    left: 15px;
    > svg {
      margin-right: 5px;
    }
  }
  > button.next-slid {
    right: 15px;
  }
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
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ $active }) =>
    $active ? theme.color.$dark10 : theme.color.$dark2};
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  margin: 0 5px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 1 !important;
  }
  &::after {
    content: '';
    border-width: 1px;
    border-color: ${theme.color.$dark3};
    border-style: solid;
    border-radius: 50px;
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
