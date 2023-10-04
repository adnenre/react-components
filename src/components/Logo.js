import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = () => {
  return (
    <LogoContainer>
      <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
        <polygon
          points="40 ,20 10,60 70,60"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </LogoContainer>
  );
};

export default Logo;
