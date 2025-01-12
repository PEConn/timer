import { useState } from 'react'
import './App.css'
import { Timer } from './components/Timer'
import { StepList } from './components/StepList';
import { beep } from './utils';
import { CIRCUIT_STEPS, STRETCH_STEPS } from './data/model';

function isCircuits() {
  return window.location.href.includes("workout=circuits");
}

const steps = isCircuits() ? CIRCUIT_STEPS : STRETCH_STEPS;

function App() {
  const [timerId, setTimerId] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const step = steps[currentStep];
  const onFinish = () => {
    if (soundEnabled) beep();

    if (currentStep === steps.length - 1) {
      setCurrentStep(0);
      setTimerId(timerId + 1);
    } else {
      setCurrentStep(currentStep + 1);
      setTimerId(timerId + 1);
    }
  };
  const reset = () => {
    setCurrentStep(0);
    setTimerId(timerId + 1);
  }

  const stepsForStepList = steps.filter(step => step.title !== "Rest");
  const showRepeat = !isCircuits();
  const highlightStepIds = isCircuits() ? [step.id, step.id + 1] : [];

  return (
    <>
      <Timer
        timerId={timerId}
        step={step}
        onFinish={onFinish} />
      <StepList
        steps={stepsForStepList}
        highlightStepIds={highlightStepIds}
        showRepeat={showRepeat}
        onReset={reset}/>
      <button onClick={() => {setSoundEnabled(!soundEnabled)}}>
        {soundEnabled && "Disable Sound"}
        {!soundEnabled && "Enable Sound"}
      </button>
    </>
  )
}

export default App
