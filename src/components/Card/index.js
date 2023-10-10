import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../theme';
const CardContainer = styled.div`
  box-shadow: 0 0 20px 1px #bec0c2;
  background: white;
  overflow: hidden;
`;
const CardHeader = styled.div`
  padding: 1rem 1.5rem;
  text-align: left;
  border-bottom: solid 1px ${theme.colors.$grayLight};
  color: ${theme.colors.$black};
`;
const CardBody = styled.div`
  padding: 1rem 1.5rem;
  text-align: left;
  color: ${theme.colors.$black};
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
`;

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
