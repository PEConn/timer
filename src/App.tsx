import { useState } from 'react'
import './App.css'
import { Timer } from './components/Timer'
import { StepList } from './components/StepList';
import { beep } from './utils';

const steps = [
  { title: "Change",  duration: 10 },
  { title: "Stretch", duration: 30, color: "#484848" },
]

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

  return (
    <>
      <Timer
        timerId={timerId}
        step={step}
        onFinish={onFinish} />
      <StepList
        steps={steps}
        onReset={reset}/>
      <button onClick={() => {setSoundEnabled(!soundEnabled)}}>
        {soundEnabled && "Disable Sound"}
        {!soundEnabled && "Enable Sound"}
      </button>
    </>
  )
}

export default App
