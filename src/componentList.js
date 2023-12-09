import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from './theme';

const CContainer = styled.div`
  padding: 0.5rem;
  text-align: left;
  display: inline-flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;
  margin: auto;
  border: ${theme.border.thin} ${theme.color.$gray2};
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;
const Cname = styled.div`
  padding: 0 0.5rem;
  text-align: center;
  width: 130px;
  color: ${theme.color.$black};
`;
const TodoState = styled.div`
  padding: 0 0.5rem;
  text-align: left;
  width: 100px;
  color: white;
  ${(props) =>
    props.$state
      ? 'background:' + theme.color.$success
      : 'background:' + theme.color.$danger};
`;
export const Cimage = ({ src, alt }) => {
  return (
    <img style={{ width: 'inherit', height: 'auto' }} src={src} alt={alt} />
  );
};

Cimage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export const componentList = {
  CContainer,
  Cname,
  Cimage,
  TodoState,
};
