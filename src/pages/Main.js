import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { MainContainer, MainWrapper } from '../components/Main.styled';
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
import TooltipPage from './TooltipPage';
import MasonryPage from './MasonryPage';
import StepperPage from './StepperPage';
import PaletPage from './PaletPage';
import SwitchPage from './SwitchPage';

const Main = ({ active }) => {
  const subPath = '/react-components';
  return (
    <MainWrapper $active={active}>
      <MainContainer>
        <Switch>
          <Route exact path={`${subPath}/`} component={HomePage} />
          <Route path={`${subPath}/Inprogress`} component={Inprogress} />
          <Route path={`${subPath}/ButtonPage`} component={ButtonPage} />
          <Route path={`${subPath}/AccordionPage`} component={AccordionPage} />
          <Route path={`${subPath}/CardPage`} component={CardPage} />
          <Route path={`${subPath}/TablePage`} component={TablePage} />
          <Route path={`${subPath}/BadgePage`} component={BadgePage} />
          <Route path={`${subPath}/TabsPage`} component={TabsPage} />
          <Route path={`${subPath}/DropDownPage`} component={DropDownPage} />
          <Route path={`${subPath}/AlertPage`} component={AlertPage} />
          <Route path={`${subPath}/AvatarPage`} component={AvatarPage} />
          <Route path={`${subPath}/GridPage`} component={GridPage} />
          <Route path={`${subPath}/ModalPage`} component={ModalPage} />
          <Route path={`${subPath}/TreePage`} component={TreePage} />
          <Route path={`${subPath}/CarouselPage`} component={CarouselPage} />
          <Route path={`${subPath}/TooltipPage`} component={TooltipPage} />
          <Route path={`${subPath}/MasonryPage`} component={MasonryPage} />
          <Route path={`${subPath}/StepperPage`} component={StepperPage} />
          <Route path={`${subPath}/PaletPage`} component={PaletPage} />
          <Route path={`${subPath}/SwitchPage`} component={SwitchPage} />
        </Switch>
      </MainContainer>
    </MainWrapper>
  );
};
Main.propTypes = {
  active: PropTypes.bool.isRequired,
};
export default Main;
