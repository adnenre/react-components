import React from 'react';

import CodeBlock from './pageUtils';
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
        <CodeBlock
          code={`
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
        />
      }
    />
  );
};

export default StepperPage;
