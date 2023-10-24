import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StepperContainer,
  StepContainer,
  Step,
  StepperButtonContainer,
  StepperWrapper,
} from './Stepper.Styled.js';
import Button from '../Button';

const Stepper = ({ steps }) => {
  const stepperItems = steps.map((label, index) => ({
    ...label,
    id: index,

    subLabel: 'STEP ' + parseInt(index + 1),
  }));
  stepperItems[0].active = true;
  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => {
    if (activeStep < stepperItems.length) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep >= 1) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <StepperWrapper>
      <StepperContainer>
        {stepperItems.map((step) => (
          <StepContainer key={step.id} $active={step.id === activeStep}>
            <Step $active={step.id === activeStep}></Step>
            <p
              style={{
                fontSize: '0.5rem',
                marginTop: '0.25rem',
                textWrap: 'nowrap',
              }}
            >
              {step.subLabel}
            </p>
            <p
              style={{
                fontSize: '0.7rem',
                marginTop: '0.25rem',
                textWrap: 'nowrap',
              }}
            >
              {step.label}
            </p>
          </StepContainer>
        ))}
      </StepperContainer>
      <StepperButtonContainer>
        <Button
          $primary
          $pill
          onClick={handlePrevStep}
          disabled={activeStep === 0}
        >
          Previous
        </Button>
        <Button
          $primary
          $pill
          onClick={handleNextStep}
          disabled={activeStep === stepperItems.length - 1}
        >
          Next
        </Button>
      </StepperButtonContainer>
    </StepperWrapper>
  );
};

Stepper.defaultProps = {
  steps: [
    {
      label: 'step label',
    },
  ],
};
Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object),
};
export default Stepper;
