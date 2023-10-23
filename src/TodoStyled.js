import styled from 'styled-components';
import theme from './theme';
const Todo = styled.div`
  padding: 0.5rem;
  text-align: left;
  display: flex;
  justify-content: center;
  width: 50%;
  margin: auto;
  border: ${theme.border.thin} ${theme.color.$grayLight};
`;
const TodoName = styled.div`
  padding: 0 0.5rem;
  text-align: left;
  width: 130px;
  color: ${theme.color.$black};
`;
const TodoState = styled.div`
  padding: 0 0.5rem;
  text-align: left;
  width: 100px;
  color: white;
  ${(props) =>
    props.$state
      ? 'background:' + theme.color.$success
      : 'background:' + theme.color.$danger};
`;

const componentsList = [
  {
    name: 'Grid',
    state: true,
  },
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
    name: 'Tree',
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
  {
    name: 'Tooltip ',
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
