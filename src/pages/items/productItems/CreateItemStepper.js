import React,{useState} from 'react';
import { makeStyles, Stepper, Step, Button, Typography, StepLabel} from '@material-ui/core';
import ProductItemForm from './forms/ProductItemForm';
import RecipeFrom from './forms/RecipeFrom';
import TestingForm from './forms/TestingForm';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  stepBody: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Product Item', 'Recipe', 'Testing'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <ProductItemForm/>;
    case 1:
      return <RecipeFrom/>;
    case 2:
      return <TestingForm/>;
    default:
      return 'Unknown stepIndex';
  }
}

export default function CreateItemStepper() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
           
            <div className={classes.stepBody}>{getStepContent(activeStep)}</div>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
