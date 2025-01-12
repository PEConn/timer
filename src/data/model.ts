export interface Step {
    id: number,
    title: string,
    duration: number,
    color?: string,
}

interface StepWithoutId {
    title: string,
    duration: number,
    color?: string,
}

function addId(steps: StepWithoutId[]): Step[] {
    return steps.map((step, index) => {
        return {...step, id: index};
    })
}

export const STRETCH_STEPS = addId([
    { title: "Change",  duration: 10 },
    { title: "Stretch", duration: 30, color: "#484848" },
])

function addRests(restDuration: number, steps: StepWithoutId[]): StepWithoutId[] {
    const result: StepWithoutId[] = [];

    steps.forEach(step => {
        result.push(step);
        result.push( {
            title: "Rest",
            duration: restDuration,
            color: "#484848"
        });
    });

    return result;
}

const CIRCUIT_EXERCISES = [
    "Jumping Jacks",
    "Wall sit",
    "Push up",
    "Crunch",
    "Step up",
    "Triceps Dip",
    "Squat",
    "Plank",
    "High Knees",
    "Reverse Fly",
    "Single Leg Squat",
    "Side Plank",
];

const CIRCUIT_REST_TIME = 10;
const CIRCUIT_EXERCISE_TIME = 30;

export const CIRCUIT_STEPS = addId(addRests(CIRCUIT_REST_TIME, 
    CIRCUIT_EXERCISES.map(exercise => {
        return {
            title: exercise,
            duration: CIRCUIT_EXERCISE_TIME
        };
    })
));