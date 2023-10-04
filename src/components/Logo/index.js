import React from 'react';
import { LogoContainer } from './Logo.Styled';
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
        <polygon
          points="40 ,30 20,55 60,55"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <polygon
          points="40 ,40 30,50 50,50"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </LogoContainer>
  );
};

export default Logo;
