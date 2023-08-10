import { Step } from '../data/model'

interface StepListProps {
    steps: Step[],
    onReset: () => void,
}

export function StepList({steps, onReset}: StepListProps) {
    // TODO: Don't use key = step.title here! Use ids!
    return (<div className="stepList">
        <p className="title">Steps:</p>
        {steps.map(step => <SingleStep step={step} key={step.title}/>)}
        <div className="step">
            <span className="stepTitle">Repeat</span><span className="stepDuration">...</span>
        </div>
        <button onClick={onReset}>Reset</button>
    </div>)
}

interface StepProps {
    step: Step,
}

function SingleStep({step}: StepProps) {
    return (<div className="step">
        <span className="stepTitle">{step.title}</span><span className="stepDuration">{step.duration}s</span>
    </div>)
}