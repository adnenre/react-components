import React from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbContainer, BreadcrumbItem } from './Breadcrumb.styled.js';

const Breadcrumb = ({ items, onClick, ...rest }) => {
  const handleItemClick = (index) => (e) => {
    e.preventDefault();
    let path = items.slice(0, index + 1).join('/');
    onClick(`/${path}`); // Update the path to your destination
  };
  return (
    <BreadcrumbContainer {...rest}>
      {items.map((item, index) => (
        <BreadcrumbItem key={index} onClick={handleItemClick(index)}>
          {item}
          {index < items.length - 1 && <span> {'/'} </span>}
        </BreadcrumbItem>
      ))}
    </BreadcrumbContainer>
  );
};
Breadcrumb.defaultProps = {
  items: ['Home', 'Category'],
  onClick: (path) => console.log(path),
};
Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
};
export default Breadcrumb;
