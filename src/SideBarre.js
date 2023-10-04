import React from 'react';
import PropTypes from 'prop-types';
import {
  SideBarreContainer,
  SideBarreHeader,
  SideBarreBody,
  List,
  Item,
  Logo,
  LinkItem,
} from './components/componentStyled/SideBarre.styled';

const routes = [
  { path: '/', routeName: 'Home' },
  { path: 'GridPage', routeName: 'Grid' },
  { path: 'ButtonPage', routeName: 'Button' },
  { path: 'CardPage', routeName: 'Card' },
  { path: 'TablePage', routeName: 'Table' },
  { path: 'BadgePage', routeName: 'Badge' },
  { path: 'TabsPage', routeName: 'Tabs' },
  { path: 'ModalPage', routeName: 'Modal' },
  { path: 'AlertPage', routeName: 'Alert' },
  { path: 'DropDownPage', routeName: 'DropDown' },
  { path: 'AvatarPage', routeName: 'Avatar' },
  { path: 'AccordionPage', routeName: 'Accordion' },
  { path: 'TreePage', routeName: 'Tree' },
  { path: 'CarouselPage', routeName: 'Carousel' },
  { path: 'TooltipPage', routeName: 'Tooltip' },
];
const SideBarre = ({ active }) => {
  return (
    <SideBarreContainer $active={active}>
      <SideBarreHeader>
        <Logo>React Component</Logo>
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
};
export default SideBarre;
