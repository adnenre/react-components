import styled from 'styled-components';
import theme from '../../theme';
import { getHoverEffect } from '../utility';

const AccordionContainer = styled.div`
  width: 100%;
  background: ${theme.colors.$primary};
`;
const AccordionItemStyled = styled.div`
  width: 100%;
`;
const AccordionTitleStyled = styled.div`
  width: 100%;
  background: ${({ $isOpen }) =>
    $isOpen ? `${theme.colors.$primary}` : `${theme.colors.$default}`};
  color: ${({ $isOpen }) =>
    !$isOpen ? `${theme.colors.$primary}` : `${theme.colors.$default}`};
  user-select: none;
  border-top: solid 1px ${theme.colors.$primary};
  border-bottom: solid 1px ${theme.colors.$primary};
  display: flex;
  justify-content: space-between;

  ${getHoverEffect}

  padding: 0.5rem;
  font-weight: 400;
`;
const AccordionContent = styled.div`
  width: 100%;
  background: ${theme.colors.$default};
  text-align: left;

  padding: 1.5rem 1rem;
`;

export {
  AccordionContainer,
  AccordionContent,
  AccordionItemStyled,
  AccordionTitleStyled,
};
