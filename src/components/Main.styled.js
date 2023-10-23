import styled from 'styled-components';

export const MainWrapper = styled.div`
  margin-left: ${({ $active }) => ($active ? '0' : '250px')};
  transition: 0.3s;
  padding: 0;
  width: 100vw;

  @media screen and (max-width: 768px) {
    margin-left: ${({ $active }) => ($active ? '0' : '100px')};
    padding: 0;
  }
`;

export const MainContainer = styled.div`
  padding: 0.5rem;
`;
