import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer, CardHeader, CardBody, CardFooter } from './Card.Styled';
const Card = (props) => {
  const { header, body, footer, ...rest } = props;
  return (
    <CardContainer {...rest}>
      <CardHeader>{header}</CardHeader>
      <CardBody>{body}</CardBody>
      <CardFooter>{footer}</CardFooter>
    </CardContainer>
  );
};

export default Card;

Card.propTypes = {
  header: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node,
};
