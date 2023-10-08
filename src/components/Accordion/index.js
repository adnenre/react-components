import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Carret from '../Carret';
import useClickOutside from '../../hooks/useClickOutslide';

import {
  AccordionContainer,
  AccordionContent,
  AccordionItemStyled,
  AccordionTitleStyled,
} from './Accordion.Styled';
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