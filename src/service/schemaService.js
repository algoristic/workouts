import { config } from '../assets/app.config.json'

const { mediaBase, programId, workoutId } = config;

const program = (id, day) => {
    return programId.replace('{program}', id).replace('{day}', day);
};

const workout = (id) => {
    return workoutId.replace('{workout}', id);
};

const programPath = (id, day) => {
    return (mediaBase + program(id, day));
};

const workoutPath = (id) => {
    return (mediaBase + workout(id));
};

const resolvePath = (string) => {
    return (mediaBase + string);
};

export {
    program,
    programPath,
    workout,
    workoutPath,
    resolvePath
}
