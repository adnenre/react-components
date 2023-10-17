import styled from 'styled-components';
import theme from '../../theme';
import { Link } from 'react-router-dom';

const SideBarreContainer = styled.div`
  height: 100%;
  background: white;

  transition: 300ms;
  min-height: 100%;
  position: fixed;
  z-index: 1000;
  width: 250px;
  transition: 0.5s;
  margin-left: ${(props) => (props.$active ? '-250px' : '0px')};

  @media screen and (max-width: 768px) {
    margin: 0;
    width: 100px;
    margin-left: ${(props) => (props.$active ? '-100px' : '0px')};
    box-shadow: none;
  }
`;
const SideBarreHeader = styled.div`
  width: inherit;
  color: ${theme.colors.$white};
  min-height: 5rem;
  background: ${theme.colors.$primary};
  display: flex;
  justify-content: center;
`;

const SideBarreBody = styled.div`
  &::-webkit-scrollbar {
    width: 2px;
    background: white;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${theme.colors.$primary};
  }
  overflow-y: scroll;
  height: calc(100% - 80px);
`;
const SideBarreFooter = styled.div`
  display: flex;
`;
const List = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  margin-bottom: 1px;
  list-style: none;
  text-align: center;
`;
const LinkItem = styled(Link)`
  display: block;
  line-height: 35px;
  // padding: 0 5px;
  background: rgba(255, 255, 255, 0.12);
  color: ${theme.colors.$gray};
  position: relative;
  cursor: pointer;
  z-index: 0;
  text-decoration: none;
  border-bottom: ${theme.border.thin} ${theme.colors.$grayLight};
  &:hover {
    color: ${theme.colors.$white};
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0px;
    width: 2px;
    height: 100%;
    background: ${theme.colors.$info};
    transition: 0.2s;
    z-index: -1;
  }
  &:hover::before {
    width: 100%;
  }
`;

export {
  SideBarreContainer,
  SideBarreHeader,
  SideBarreBody,
  //SideBarreFooter,
  LinkItem,
  List,
  Item,
};
