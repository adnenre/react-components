import React from 'react';
import PortletView from '../components/Portlet';
import Alert from '../components/Alert';
import fake_data from '../fake-data';

const AlertPage = () => {
  return (
    <PortletView
      title={fake_data.pages.alert.page.title}
      content={
        <Alert
          type="primary"
          title={fake_data.pages.alert.title}
          desc={fake_data.pages.alert.desc}
        />
      }
    />
  );
};

export default AlertPage;
