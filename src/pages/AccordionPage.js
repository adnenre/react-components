import React from 'react';

import PortletView from '../components/Portlet';
import Accordion from '../components/Accordion';
import fake_data from '../fake-data';
const { accordion } = fake_data;
const AccordionPage = () => {
  return (
    <PortletView
      title="Accordion component"
      content={<Accordion items={accordion.items} />}
    />
  );
};

export default AccordionPage;
