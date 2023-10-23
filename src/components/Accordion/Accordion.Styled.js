import styled from 'styled-components';
import theme from '../../theme';

const AccordionItemStyled = styled.div`
  width: 100%;
`;
const AccordionTitleStyled = styled.h5`
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
  width: 100%;
  background: ${theme.color.$white};
  text-align: left;
  color: ${theme.font.$color};
  padding: 1.5rem 1rem;
  text-align: left;
  color: ${theme.color.$black};
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6;
  opacity: 1;
  text-transform: none;
  vertical-align: unset;
  text-decoration: none;
  color: ${theme.color.$gray};
  letter-spacing: 1px;
`;
const AccordionContainer = styled.div`
  width: 100%;
  background: ${theme.color.$primary};
  > div:first-child > h5 {
    border-top: none !important;
  }
  > div > h5 {
    display: flex;
    align-items: center;
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
