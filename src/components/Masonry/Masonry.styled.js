import styled from 'styled-components';
const MasonryContainer = styled.div`
  display: flex;
  width: 100%;
`;

const MasonryItem = styled.div`
  border: 1px solid #ccc;
`;
const MasonryColumn = styled.div`
  margin: 2px;
`;
const MasonryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }
`;
export { MasonryContainer, MasonryColumn, MasonryItem, MasonryImage };
