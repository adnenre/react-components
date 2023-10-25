import React from 'react';
import PropTypes from 'prop-types';
import {
  SideBarreContainer,
  SideBarreHeader,
  SideBarreBody,
  SideBarreFooter,
  List,
  Item,
  LinkItem,
} from './SideBarre.Styled';
import Logo from '../Logo';

const SideBarre = ({ routes, active }) => {
  const subPath = '/react-components';
  return (
    <SideBarreContainer $active={active}>
      <SideBarreHeader>
        <Logo />
      </SideBarreHeader>
      <SideBarreBody>
        <List>
          {routes.map(({ path, routeName }) => (
            <Item key={path} role="button">
              <LinkItem to={subPath + path}> {routeName}</LinkItem>
            </Item>
          ))}
        </List>
      </SideBarreBody>
      <SideBarreFooter $primary>LANA </SideBarreFooter>
    </SideBarreContainer>
  );
};
SideBarre.propTypes = {
  active: PropTypes.bool.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object),
};
export default SideBarre;
