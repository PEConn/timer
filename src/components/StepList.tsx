import { Step } from '../data/model'

interface StepListProps {
    steps: Step[],
    highlightStepIds: number[],
    showRepeat: boolean,
    onReset: () => void,
}

export function StepList({steps, onReset, highlightStepIds, showRepeat}: StepListProps) {
    return (<div className="stepList">
        <p className="title">Steps:</p>
        {steps.map(step => <StepItem
            step={step}
            highlighted={highlightStepIds.includes(step.id)}
            key={step.id}/>)}

        {showRepeat && <StepDiv name={"Repeat"} duration={"..."} highlighted={false}/> }
        <button onClick={onReset}>Reset</button>
    </div>)
}

interface StepItemProps {
    step: Step,
    highlighted: boolean
}

function StepItem({step, highlighted}: StepItemProps) {
    const name = step.title;
    const duration = step.duration + "s";
    return (<StepDiv name={name} duration={duration} highlighted={highlighted}/>)
}

interface StepDivProps {
    name: string,
    duration: string
    highlighted: boolean
}

function StepDiv({name, duration, highlighted}: StepDivProps) {
    const className = highlighted ? "step step-selected" : "step";

    return (<div className={className}>
        <span className="stepTitle">{name}</span>
        <span className="stepDuration">{duration}</span>
    </div>);
}