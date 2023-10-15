import styled from 'styled-components';

export const MainContainer = styled.div`
  margin-left: ${({ $active }) => ($active ? '0' : '250px')};
  transition: 0.3s;
  padding: 0.5rem;
  width: 100vw;

  @media screen and (max-width: 768px) {
    margin-left: ${({ $active }) => ($active ? '0' : '100px')};
    padding: 0;
  }
`;
