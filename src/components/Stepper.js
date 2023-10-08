import React, { useState } from 'react';
import { StepperContainer, Step } from './Stepper.tyled.js';
import Button from './Button';
const Stepper = () => {
  const [activeStep, setActiveStep] = useState < number > 1;

  const handleNextStep = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div>
      <StepperContainer>
        <Step $active={activeStep === 1}>1</Step>
        <Step $active={activeStep === 2}>2</Step>
        <Step $active={activeStep === 3}>3</Step>
      </StepperContainer>
      <div>
        <Button onClick={handlePrevStep} disabled={activeStep === 1}>
          Previous
        </Button>
        <Button onClick={handleNextStep} disabled={activeStep === 3}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Stepper;
