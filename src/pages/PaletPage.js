import React from 'react';
import PortletView from '../components/Portlet';
import Palet from '../components/Palet';

const PaletPage = () => {
  return <PortletView title={'Colors Palet'} content={<Palet />} />;
};

export default PaletPage;
