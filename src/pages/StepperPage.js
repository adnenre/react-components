import React from 'react';

import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';
import Stepper from '../components/Stepper';
import fake_data from '../fake-data';
import PortletView from '../components/Portlet';
const StepperPage = () => {
  const { stepper } = fake_data.pages;
  return (
    <PortletView
      title={stepper.title}
      content={<Stepper steps={stepper.steps} />}
      footer={
        <Toggle>
          <PrismCode
            component="pre"
            className="language-markup"
            target="javascript"
          >
            {`
              const steps = [
                {
                  label: 'Card Details',
                },
                {
                  label: 'Form Review',
                },
                {
                  label: 'Authentication ',
                },
                {
                  label: 'Subscription plan',
                },
                {
                  label: 'Payment details',
                },
              ];

              <Stepper steps={steps}/>
     
            `}
          </PrismCode>
        </Toggle>
      }
    />
  );
};

export default StepperPage;
