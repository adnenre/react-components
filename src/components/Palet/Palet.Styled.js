import styled from 'styled-components';

export const PaletWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  @media screen and (max-width: 1100px) {
    gap: 0;
  }
`;
export const PaletContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PaletBox = styled.div`
  display: flex;

  align-items: flex-end;
  width: 70px;
  height: 80px;
  background: ${({ $color }) => $color};

  transition: 0.2s;
  cursor: pointer;
  @media screen and (min-width: 1000px) {
    width: 100%;
    min-width: 120px;
  }
  @media screen and (min-width: 769) and( max-width: 1000px) {
    width: 100%;
    min-width: 50px;
    height: 50px;
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    width: 30px;
    min-width: 20px;
    height: 30px;
    margin: 5px;
  }
  &:hover {
    box-shadow:
      rgba(0, 0, 0, 0.1) 0rem 0.625rem 0.9375rem -0.1875rem,
      rgba(0, 0, 0, 0.05) 0rem 0.25rem 0.375rem -0.125rem;
  }
`;
export const PaletCode = styled.h5`
  width: 100%;
  background: white;
  text-align: center;
  font-size: 0.75rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
