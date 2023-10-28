import styled from 'styled-components';
import theme from '../../theme';

const AccordionItemStyled = styled.div`
  width: 100%;
`;
const AccordionTitleStyled = styled.h5`
  position: relative;
  z-index: 2;
  width: 100%;
  background: ${({ $isOpen }) =>
    $isOpen ? `${theme.color.$primary}` : `${theme.color.$white}`};
  color: ${({ $isOpen }) =>
    !$isOpen ? `${theme.color.$primary}` : `${theme.color.$white}`};
  user-select: none;
  border-top: ${theme.border.thin} ${theme.color.$primary};
  border-bottom: ${theme.border.thin} ${theme.color.$primary};
  display: flex;
  justify-content: space-between;

  padding: 1rem;
  font-weight: 500;
  font-size: 1.25rem;
  cursor: pointer;
`;

const AccordionContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  background: ${theme.color.$white};
  text-align: left;
  display: block;
  padding: 1.5rem 1rem;
  text-align: left;

  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6;
  opacity: 1;
  text-transform: none;

  text-decoration: none;
  color: ${theme.color.$gray};
  letter-spacing: 1px;
  animation-name: slideaway;
  animation-duration: 300ms;
  animation-timing-function: ease-in-out;
  @keyframes slideaway {
    0% {
      height: 0;
      transform: translateY(-40px);
      opacity: 0;
    }
    100% {
      height: 100%;
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;
const AccordionContainer = styled.div`
  width: 100%;

  > div:first-child > h5 {
    border-top: none !important;
  }
  > div > h5 {
    display: flex;
    align-items: center;
    border-bottom: none;
  }
`;
export {
  AccordionContainer,
  AccordionContent,
  AccordionItemStyled,
  AccordionTitleStyled,
};
