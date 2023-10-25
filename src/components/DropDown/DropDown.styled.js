import styled from 'styled-components';
import theme from '../../theme';

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;
export const DropDownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding-left: 1rem;
  width: 100%;
  min-height: 40px;
  min-width: inherit;
  white-space: nowrap;
  border-bottom: ${({ $active }) =>
    $active ? 'solid 3px #00b0ff' : 'solid 3px transparent'};
  color: ${({ $active }) => ($active ? ' #00b0ff' : 'black')};
  border: ${theme.border.thin} ${theme.color.$primary};
  border-radius: 5px;
  overflow: hidden;

  > div {
    color: ${({ $active }) =>
      $active ? `${theme.color.$primary}` : ' #546e7a'};
  }
`;
export const DropDownHeaderContent = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  min-width: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const DropDownMenu = styled.ul`
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  max-height: 200px;
  overflow-y: scroll;
  width: 100%;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  overflow: auto;
  z-index: 9999;
  &::-webkit-scrollbar {
    width: 0.2rem !important;
    height: 0.8rem !important;
  }
  &::-webkit-scrollbar-thumb {
    background: ${theme.color.$primary} !important;
  }
`;
export const DropDownItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  min-height: 40px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42857143;

  background: ${({ $active }) => ($active ? '#e3f2fd' : 'none')};
  color: ${({ $active, selected }) =>
    $active || selected ? '#00b0ff' : 'none'};

  :not(:last-child) {
    border-bottom: solid 0.5px ${theme.color.$gray2};
  }
  white-space: nowrap;
  &:hover {
    cursor: pointer;
    background: #e3f2fd;
    color: #00b0ff;
  }
`;

export const DropDownCarretStyled = styled.span`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: #00b0ff;
  border-left: solid 0.5px ${theme.color.$primary};
  > svg {
    fill: ${({ $isOpen }) =>
      $isOpen ? `${theme.color.$white}` : `${theme.color.$primary}`};
    transition: all 300ms;
  }

  &:hover {
    background-color: ${theme.color.$primary};
    svg {
      fill: ${theme.color.$white};
    }
  }
`;
