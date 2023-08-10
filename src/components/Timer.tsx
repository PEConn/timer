import { useEffect, useState } from "react";
import { Step } from "../data/model";

interface TimerProps {
    timerId: number,
    step: Step,
    onFinish: () => void,
}

export function Timer({timerId, step, onFinish}: TimerProps) {
    const [timerClock, setTimerClock] = useState(step.duration);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        setTimerClock(step.duration);
    }, [timerId]);

    const tick = () => {
        if (playing) {
            if (timerClock === 0) {
                onFinish();
            } else {
                setTimerClock(timerClock - 1);
            }
        }
    }

    useEffect(() => {
        // let timer = -1;
        // if (timerClock === 0) {
        //     onFinish();
        // } else {
        //     if (playing) {
        //         timer = setTimeout(() => {
        //             setTimerClock(timerClock - 1);
        //         }, 1000);
        //     }
        // }

        const timer = setTimeout(tick, 1000);
        return () => { clearTimeout(timer) }
    }, [timerClock, playing, onFinish]);

    const style = step.color ? { backgroundColor: step.color } : {}

    return (<div className="timer" style={style}>
        <h1>{step.title}</h1>
        <p>{timerClock}s</p>
        <button onClick={() => {setPlaying(!playing)}}>
            {playing && "Pause"}
            {!playing && "Play"}
        </button>
    </div>)
}