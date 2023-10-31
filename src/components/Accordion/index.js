import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Carret from '../Icons/Carret';
import useClickOutside from '../../hooks/useClickOutside';

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
export const AccordionItem = ({
  id,
  title,
  content,
  isOpen,
  toggleAccordion,
  ...rest
}) => {
  return (
    <AccordionItemStyled {...rest}>
      <AccordionTitle
        data-testid={`accordionItem-${id}`}
        onClick={toggleAccordion}
        $isOpen={isOpen}
      >
        {title}
        <Carret $isOpen={isOpen} />
      </AccordionTitle>
      {isOpen && (
        <AccordionContent data-testid={`accordionContent-${id}`}>
          <p>{content}</p>
        </AccordionContent>
      )}
    </AccordionItemStyled>
  );
};

const Accordion = ({ items, ...rest }) => {
  const containerRef = useRef(null);
  const newItems = items.map((item) => ({ ...item, isOpen: false }));
  const [accordionItems, setAccordionItems] = useState(newItems);

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
    <AccordionContainer ref={containerRef} {...rest}>
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          isOpen={item.isOpen}
          toggleAccordion={toggleAccordionItem(index)}
        />
      ))}
    </AccordionContainer>
  );
};
AccordionTitle.propTypes = {
  children: PropTypes.node,
};
AccordionItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleAccordion: PropTypes.func.isRequired,
};
Accordion.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Accordion;
