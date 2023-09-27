import React from 'react';
import PortletView from '../components/Portlet';
import Alert from '../components/Alert';

const AlertPage = () => {
  return (
    <PortletView
      title="Alert Component"
      content={
        <Alert
          type="primary"
          title="Alert"
          desc="Danger Alert click to close"
        />
      }
    />
  );
};

export default AlertPage;
