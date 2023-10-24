import styled from 'styled-components';

export const PaletWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
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
  width: 100%;
  min-width: 80px;
  height: 80px;
  background: ${({ $color }) => $color};
  margin: 0.2rem;
  border-radius: 10px;
  transition: 0.2s;
  cursor: pointer;

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
`;
