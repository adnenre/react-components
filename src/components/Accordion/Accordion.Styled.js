import styled from 'styled-components';
import theme from '../../theme';

const AccordionItemStyled = styled.div`
  width: 100%;
`;
const AccordionTitleStyled = styled.h5`
  width: 100%;
  background: ${({ $isOpen }) =>
    $isOpen ? `${theme.colors.$primary}` : `${theme.colors.$white}`};
  color: ${({ $isOpen }) =>
    !$isOpen ? `${theme.colors.$primary}` : `${theme.colors.$white}`};
  user-select: none;
  border-top: ${theme.border.thin} ${theme.colors.$primary};
  border-bottom: ${theme.border.thin} ${theme.colors.$primary};
  display: flex;
  justify-content: space-between;

  padding: 1rem;
  font-weight: 500;
  font-size: 1.25rem;
  cursor: pointer;
`;
const AccordionContent = styled.div`
  width: 100%;
  background: ${theme.colors.$white};
  text-align: left;
  color: ${theme.font.$color};
  padding: 1.5rem 1rem;
`;
const AccordionContainer = styled.div`
  width: 100%;
  background: ${theme.colors.$primary};
  > div:first-child > h5 {
    border-top: none !important;
  }
  > div > h5 {
    border-bottom: none;
    transition:
      all 0.3s linear,
      opacity 0.3s linear;
  }
`;
export {
  AccordionContainer,
  AccordionContent,
  AccordionItemStyled,
  AccordionTitleStyled,
};
