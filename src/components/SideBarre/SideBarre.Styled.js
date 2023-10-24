import styled from 'styled-components';
import theme from '../../theme';
import { Link } from 'react-router-dom';
import { getProperty } from '../utility';

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
  color: ${theme.color.$white};
  min-height: 5rem;
  background: ${theme.color.$primary};
  display: flex;
  justify-content: center;
`;

const SideBarreBody = styled.div`
  &::-webkit-scrollbar {
    width: 3px;
    background: white;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${theme.color.$primary5};
  }
  overflow-y: scroll;
  height: calc(100% - 120px);
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
const SideBarreFooter = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5em;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-weight: 300;
  ${(props) => getProperty('background', props)}

  display: flex;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
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
  color: ${theme.color.$gray};
  position: relative;
  cursor: pointer;
  z-index: 0;
  text-decoration: none;
  border-bottom: ${theme.border.thin} ${theme.color.$grayLight};
  &:hover,
  &:focus,
  &:active {
    color: ${theme.color.$white};
  }
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 80%;
    border-radius: 4px;
    background: ${theme.color.$primary4};
    transition: all 0.3s;
    z-index: -1;
    opacity: 0;
    transform: translate(-50%, -50%);
  }
  &:hover::before,
  &:focus::before {
    width: 90%;
    opacity: 1;
  }
`;

export {
  SideBarreContainer,
  SideBarreHeader,
  SideBarreBody,
  SideBarreFooter,
  LinkItem,
  List,
  Item,
};
