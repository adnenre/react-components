import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { MainContainer } from '../components/componentStyled/Main.styled';
import HomePage from './HomePage';
import ButtonPage from './ButtonPage';
import CardPage from './CardPage';
import AvatarPage from './AvatarPage';
import AlertPage from './AlertPage';
import GridPage from './GridPage';
import TablePage from './TablePage';
import BadgePage from './BadgePage';
import Inprogress from './Inprogress';
import TabsPage from './TabsPage';
import DropDownPage from './DropDownPage';
import ModalPage from './ModalPage';
import AccordionPage from './AccordionPage';
import TreePage from './TreePage';
import CarouselPage from './CarouselPage';
const Main = ({ active }) => {
  return (
    <MainContainer active={active}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Inprogress" component={Inprogress} />
        <Route path="/ButtonPage" component={ButtonPage} />
        <Route path="/AccordionPage" component={AccordionPage} />
        <Route path="/CardPage" component={CardPage} />
        <Route path="/TablePage" component={TablePage} />
        <Route path="/BadgePage" component={BadgePage} />
        <Route path="/TabsPage" component={TabsPage} />
        <Route path="/DropDownPage" component={DropDownPage} />
        <Route path="/AlertPage" component={AlertPage} />
        <Route path="/AvatarPage" component={AvatarPage} />
        <Route path="/GridPage" component={GridPage} />
        <Route path="/ModalPage" component={ModalPage} />
        <Route path="/TreePage" component={TreePage} />
        <Route path="/CarouselPage" component={CarouselPage} />
      </Switch>
    </MainContainer>
  );
};
Main.propTypes = {
  active: PropTypes.bool.isRequired,
};
export default Main;
