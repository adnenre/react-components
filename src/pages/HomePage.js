import React from 'react';
import Title from '../components/Title';

import { Avatar, AvatarImg } from '../components/Avatar';
import {
  Portlet,
  PortletHeader,
  PortletBody,
  PortletFooter,
} from '../components/Portlet';

import imgUrl from '../components/data';

import { TodoStyled } from '../TodoStyled';

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
      <PortletFooter $flexColumn $center>
        <h5>Made by </h5>

        <a href="https://adnenre.github.io" area-label="link to author profile">
          <Avatar $xsmall $round>
            <AvatarImg src={imgUrl} alt="author" />
          </Avatar>
        </a>
      </PortletFooter>
    </Portlet>
  );
};

export default Home;
