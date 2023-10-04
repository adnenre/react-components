import styled from 'styled-components';

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TabList = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  box-shadow: inset 0 -1px 0 0 #d0d8dc;
  width: inherit;
`;
export const TabItem = styled.div`
  display: flex;
  min-height: inherit;
  font-size: 14px;
  font-weight: 600;
  align-items: center;
  padding: 10px 15px;
  white-space: nowrap;
  cursor: pointer;
  border-bottom: ${({ $active }) =>
    $active ? 'solid 3px #00b0ff' : 'solid 3px transparent'};
  color: ${({ $active }) => ($active ? ' #00b0ff' : '#546e7a')};
  :hover {
    color: #00b0ff;
    background-color: #e3f2fd;
  }
`;
export const TabPanelStyled = styled.div`
  width: inherit;
  padding: 15px 5px;
  flex: 1 1 auto;
  text-align: left;
  display: ${({ $showAsGrid }) => ($showAsGrid ? ' grid' : 'block')};
  grid-template-columns: ${({ $showAsGrid }) =>
    $showAsGrid ? 'repeat(auto-fill, minmax(40rem, 1fr))' : ''};
  grid-gap: ${({ $showAsGrid }) => ($showAsGrid ? '2px' : '')};
`;
