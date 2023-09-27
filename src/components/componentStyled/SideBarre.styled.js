import styled from 'styled-components';
import color from '../utility';
import { Link } from 'react-router-dom';

const TogglerContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  > svg {
    position: fixed;
    bottom: 20px;
    right: 20px;
    transition: all ease-in-out 500ms;
    cursor: pointer;
    > circle {
      fill: ${color.primary};
    }
    > rect {
      fill: ${color.default};
    }
    :hover {
      > rect {
        fill: ${color.primary};
      }
      > circle {
        fill: ${color.default};
      }
    }
  }
`;
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
  margin-left: ${({ active }) => (active ? '-250px' : '0px')};

  @media screen and (max-width: 768px) {
    width: 100px;
    margin-left: ${({ active }) => (active ? '-100px' : '0px')};
  }
`;
const SideBarreHeader = styled.div`
  width: inherit;
  color: white;

  background: #2b95fd;
`;

const Logo = styled.div`
  padding: 1rem;
  font-size: 1rem;
`;
const SideBarreBody = styled.div`
  &::-webkit-scrollbar {
    width: 2px;
    background: white;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${color.info};
  }
  overflow-y: auto;
  height: calc(100% - 52px);
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
  padding: 5px 0 5px 15px;
  background: rgba(255, 255, 255, 0.12);
  color: ${color.black};
  position: relative;
  cursor: pointer;
  z-index: 0;
  text-decoration: none;
  border-bottom: solid 1px #eee;
  &:hover {
    color: white;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: ${color.info};
    transition: 0.2s;
    z-index: -1;
  }
  &:hover::before {
    width: 100%;
  }
`;

export {
  TogglerContainer,
  SideBarreContainer,
  SideBarreHeader,
  SideBarreBody,
  //SideBarreFooter,
  LinkItem,
  List,
  Item,
  Logo,
};
