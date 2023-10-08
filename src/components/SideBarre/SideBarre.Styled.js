import styled from 'styled-components';
import theme from '../../theme';
import { Link } from 'react-router-dom';

const SideBarreContainer = styled.div`
  height: 100%;
  background: white;
  box-shadow: 0 0 20px 1px #bec0c2;

  transition: 300ms;
  min-height: 100%;
  position: fixed;
  z-index: 1000;
  width: 250px;
  transition: 0.5s;
  margin-left: ${(props) => (props.$active ? '-250px' : '0px')};

  @media screen and (max-width: 768px) {
    width: 100px;
    margin-left: ${(props) => (props.$active ? '-100px' : '0px')};
    box-shadow: none;
  }
`;
const SideBarreHeader = styled.div`
  width: inherit;
  color: ${theme.colors.$default};
  min-height: 5rem;
  background: #2b95fd;
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
    background: ${theme.colors.$info};
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
  > a {
  }
`;
const LinkItem = styled(Link)`
  display: block;
  line-height: 35px;
  padding: 0 5px;
  background: rgba(255, 255, 255, 0.12);
  color: ${theme.colors.$black};
  position: relative;
  cursor: pointer;
  z-index: 0;
  text-decoration: none;
  border-bottom: solid 1px ${theme.colors.$grayLight};
  &:hover {
    color: ${theme.colors.$default};
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
