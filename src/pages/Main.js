import React from 'react';
import PropTypes from 'prop-types';

import { MainContainer, MainWrapper } from '../components/Main.styled';

const Main = ({ children, active }) => {
  return (
    <MainWrapper $active={active}>
      <MainContainer>{children}</MainContainer>
    </MainWrapper>
  );
};
Main.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node,
};
export default Main;
