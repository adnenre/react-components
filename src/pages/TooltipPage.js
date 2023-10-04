import React from 'react';

import PortletView from '../components/Portlet';
import Tooltip from '../components/Tooltip';
import Button from '../components/Button';

const TooltipPage = () => {
  return (
    <PortletView
      title="Accordion component"
      content={
        <>
          <Tooltip text="This is a tooltips">
            <Button $primary> Hover me ! </Button>
          </Tooltip>
        </>
      }
    />
  );
};

export default TooltipPage;
