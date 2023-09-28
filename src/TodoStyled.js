import styled from 'styled-components';
import color from './components/utility';
const Todo = styled.div`
  padding: 0.5rem;
  text-align: left;
  display: flex;
  justify-content: center;
  width: 50%;
  margin: auto;
  border: solid 1px #eee;
`;
const TodoName = styled.div`
  padding: 0 0.5rem;
  text-align: left;
  width: 130px;
  color: ${color.black};
`;
const TodoState = styled.div`
  padding: 0 0.5rem;
  text-align: left;
  width: 100px;
  color: white;
  ${(props) =>
    props.state ? 'background:' + color.success : 'background:' + color.danger};
`;

const componentsList = [
  {
    name: 'Button',
    state: true,
  },
  {
    name: 'Carousel',
    state: true,
  },
  {
    name: 'Accordion',
    state: true,
  },
  {
    name: 'Card',
    state: true,
  },
  {
    name: 'Avatar',
    state: true,
  },
  {
    name: 'Badge',
    state: true,
  },
  {
    name: 'Table',
    state: true,
  },
  {
    name: 'DropDown ',
    state: true,
  },
  {
    name: 'Grid',
    state: true,
  },
  {
    name: 'Navbar',
    state: true,
  },
  {
    name: 'Tabs ',
    state: true,
  },
  {
    name: 'Modal ',
    state: true,
  },
];

const toDoList = componentsList.map((el, index) => ({ ...el, id: index + 1 }));
export const TodoStyled = {
  Todo,
  toDoList,
  TodoName,
  TodoState,
};
