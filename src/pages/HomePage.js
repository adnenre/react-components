import React from 'react';
import { Title } from '../components/Portlet/Portlet.Styled';

import Avatar from '../components/Avatar';
import {
  Portlet,
  PortletHeader,
  PortletBody,
  PortletFooter,
} from '../components/Portlet/Portlet.Styled';

import imgUrl from '../components/data';

import { TodoStyled } from '../TodoStyled';
import Tooltip from '../components/Tooltip';

const Home = () => {
  const { toDoList, Todo, TodoName, TodoState } = TodoStyled;

  return (
    <Portlet>
      <PortletHeader>
        <Title> Collection of react Component using styled-Components </Title>
      </PortletHeader>
      <PortletBody $flexColumn>
        {/* map over toDoList*/}
        {toDoList.map(({ name, state, id }) => (
          <Todo key={id}>
            <TodoName> {name + ' : '}</TodoName>
            <TodoState $state={state}>
              {state ? 'Done' : 'In Progress'}
            </TodoState>
          </Todo>
        ))}
      </PortletBody>
      <PortletFooter>
        <h5></h5>
        <Tooltip text="Click here to visit author profile " $right>
          <a
            className="author"
            href="https://adnenre.github.io"
            area-label="link to author profile"
          >
            <Avatar src={imgUrl} alt="author" $xsmall $round />
          </a>
        </Tooltip>
      </PortletFooter>
    </Portlet>
  );
};

export default Home;
