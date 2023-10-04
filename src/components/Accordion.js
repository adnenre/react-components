import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';
import Carret from './Carret';
import useClickOutside from './hooks/useClickOutslide';
import { getHoverEffect } from './utility';
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
const AccordionTitle = (props) => {
  const { children, ...rest } = props;
  return <AccordionTitleStyled {...rest}>{children}</AccordionTitleStyled>;
};
function AccordionItem({ title, content, isOpen, toggleAccordion }) {
  return (
    <AccordionItemStyled>
      <AccordionTitle onClick={toggleAccordion} $isOpen={isOpen}>
        {title}
        <Carret $isOpen={isOpen} />
      </AccordionTitle>
      {isOpen && (
        <AccordionContent className="accordion-content">
          {content}
        </AccordionContent>
      )}
    </AccordionItemStyled>
  );
}

function Accordion({ items }) {
  const containerRef = useRef(null);
  const [accordionItems, setAccordionItems] = useState(items);

  const toggleAccordionItem = (index) => (e) => {
    e.preventDefault();
    const updatedItems = accordionItems.map((item, i) => {
      if (i === index) {
        return { ...item, isOpen: !item.isOpen };
      } else {
        return { ...item, isOpen: false };
      }
    });
    setAccordionItems(updatedItems);
  };

  const toggleAll = () => {
    const updatedItems = accordionItems.map((item) => ({
      ...item,
      isOpen: false,
    }));

    setAccordionItems(updatedItems);
  };
  useClickOutside(containerRef, () => toggleAll());
  return (
    <AccordionContainer ref={containerRef}>
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={item.isOpen}
          toggleAccordion={toggleAccordionItem(index)}
        />
      ))}
    </AccordionContainer>
  );
}
AccordionTitle.propTypes = {
  children: PropTypes.node,
};
AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleAccordion: PropTypes.func.isRequired,
};
Accordion.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Accordion;
