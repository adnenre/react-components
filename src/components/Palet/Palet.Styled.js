import styled from 'styled-components';

export const PaletWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.1rem;
`;
export const PaletContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: calc(10% - 0.2rem);
  min-height: calc(10% - 0.2rem);
`;
export const PaletBox = styled.div`
  padding-top: 100%;
  background: ${({ $color }) => $color};
  transition: 0.2s;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  cursor: pointer;
  border-radius: 10px;
  position: relative;
  z-index: 1;
  &:hover {
    box-shadow:
      rgba(0, 0, 0, 0.1) 0rem 0.625rem 0.9375rem -0.1875rem,
      rgba(0, 0, 0, 0.05) 0rem 0.25rem 0.375rem -0.125rem;
    transform: scale(1.02);
    z-index: 2;
  }
  &:active {
    transform: scale(0.99);
  }
`;
export const PaletCode = styled.h5`
  text-align: center;
  font-size: 0.75rem;
  @media screen and (max-width: 850px) {
    display: none;
  }
`;
