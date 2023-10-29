import React from 'react';
import HomePage from './pages/HomePage';
import ButtonPage from './pages/ButtonPage';
import CardPage from './pages/CardPage';
import AvatarPage from './pages/AvatarPage';
import AlertPage from './pages/AlertPage';
import GridPage from './pages/GridPage';
import TablePage from './pages/TablePage';
import BadgePage from './pages/BadgePage';
import ErrorPage from './pages/ErrorPage';
import TabsPage from './pages/TabsPage';
import DropDownPage from './pages/DropDownPage';
import ModalPage from './pages/ModalPage';
import AccordionPage from './pages/AccordionPage';
import TreePage from './pages/TreePage';
import CarouselPage from './pages/CarouselPage';
import TooltipPage from './pages/TooltipPage';
import MasonryPage from './pages/MasonryPage';
import StepperPage from './pages/StepperPage';
import PaletPage from './pages/PaletPage';
import SwitchPage from './pages/SwitchPage';
import BreadcrumbPage from './pages/BreadcrumbPage';
import Application from './Application';

export const childrenRoutes = [
  { path: 'component/Palet', element: <PaletPage /> },
  { path: 'component/Grid', element: <GridPage /> },
  { path: 'component/Button', element: <ButtonPage /> },
  { path: 'component/Switch', element: <SwitchPage /> },
  { path: 'component/Badge', element: <BadgePage /> },

  { path: 'component/Tooltip', element: <TooltipPage /> },
  { path: 'component/Card', element: <CardPage /> },
  { path: 'component/Alert', element: <AlertPage /> },
  { path: 'component/Modal', element: <ModalPage /> },
  { path: 'component/Breadcrumb', element: <BreadcrumbPage /> },
  { path: 'component/Table', element: <TablePage /> },
  { path: 'component/Tabs', element: <TabsPage /> },
  { path: 'component/DropDown', element: <DropDownPage /> },
  { path: 'component/Avatar', element: <AvatarPage /> },
  { path: 'component/Accordion', element: <AccordionPage /> },
  { path: 'component/Tree', element: <TreePage /> },
  { path: 'component/Carousel', element: <CarouselPage /> },
  { path: 'component/Masonry', element: <MasonryPage /> },
  { path: 'component/Stepper', element: <StepperPage /> },
];
const routes = [
  {
    path: '/',
    element: <Application />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }, ...childrenRoutes],
  },
];

export default routes;
