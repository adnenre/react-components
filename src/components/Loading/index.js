import React from 'react';
import { LoadingContainer, Dot1, Dot2, Dot3 } from './Loading.styled.js';

const Loading = (props) => {
  return (
    <LoadingContainer {...props}>
      <Dot1 />
      <Dot2 />
      <Dot3 />
    </LoadingContainer>
  );
};

export default Loading;
