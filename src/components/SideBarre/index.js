import React from 'react';
import PropTypes from 'prop-types';
import {
  SideBarreContainer,
  SideBarreHeader,
  SideBarreBody,
  List,
  Item,
  LinkItem,
} from './SideBarre.Styled';
import Logo from '../Logo';

const SideBarre = ({ routes, active }) => {
  return (
    <SideBarreContainer $active={active}>
      <SideBarreHeader>
        <Logo />
      </SideBarreHeader>
      <SideBarreBody>
        <List>
          {routes.map(({ path, routeName }) => (
            <Item key={path}>
              <LinkItem to={path}> {routeName}</LinkItem>
            </Item>
          ))}
        </List>
      </SideBarreBody>
    </SideBarreContainer>
  );
};
SideBarre.propTypes = {
  active: PropTypes.bool.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object),
};
export default SideBarre;
