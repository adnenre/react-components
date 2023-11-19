import React, { lazy } from 'react';
import withSuspense from './HOC/withSuspence';
import components from './components';
const Application = lazy(() => import('./Application'));
const HomePage = lazy(() => import('./pages/HomePage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

// Define a list of page names
const pageNames = components.map((c) => c.name + 'Page');

// Create lazy-loaded components based on the page names
const lazyComponents = pageNames.reduce((components, pageName) => {
  components[pageName] = lazy(() => import(`./pages/${pageName}`));
  return components;
}, {});

// Create the childrenRoutes array dynamically
export const childrenRoutes = pageNames.map((pageName) => ({
  path: `${pageName}`,
  element: withSuspense(lazyComponents[pageName])(),
}));

const routes = [
  {
    path: '/',
    element: <Application />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }, ...childrenRoutes],
  },
];

export default routes;
