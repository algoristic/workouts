import { config } from '../assets/app.config.json'

const { mediaBase, programId, workoutId } = config;

const program = (id, day) => {
    return programId.replace('{program}', id).replace('{day}', day);
};

const workout = (id) => {
    return workoutId.replace('{workout}', id);
};

const programPath = (id, day) => {
    const path = program(id, day);
    return `${mediaBase}/${path}.jpg`;
};

const workoutPath = (id) => {
    const path = workout(id);
    return `${mediaBase}/${path}.jpg`;
};

const resolvePath = (string) => {
    return `${mediaBase}/${string}.jpg`;
};

export {
    program,
    programPath,
    workout,
    workoutPath,
    resolvePath
}
