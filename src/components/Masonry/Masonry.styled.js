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
const SkeletonContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #eee;
`;
const SkeletonImage = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;

  background: linear-gradient(90deg, #f0f0f0 25%, #ededed 50%, #f0f0f0 75%);
  animation: loading 2.5s infinite;

  @keyframes loading {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
export {
  MasonryContainer,
  MasonryColumn,
  MasonryItem,
  MasonryImage,
  SkeletonImage,
  SkeletonContainer,
};
