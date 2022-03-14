import { config } from '../assets/app.config.json'

const { schemas:{ programIdSchema, programPathSchema, workoutIdSchema, workoutPathSchema } } = config;

const escape = (string) => {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

const program = (id, day) => {
    return programIdSchema.replace('${program}', id).replace('${day}', day);
};

const workout = (id) => {
    return workoutIdSchema.replace('${workout}', id);
};

const programPath = (id, day) => {
    return programPathSchema.replace('${program}', id).replace('${day}', day);
};

const workoutPath = (id) => {
    return workoutPathSchema.replace('${workout}', id);
};

const resolvePath = (string) => {
    const programRegex = escape(programIdSchema).replace(escape('${program}'), '[a-zA-Z-]*').replace(escape('${day}'), '\d+');
    const workoutRegex = escape(workoutIdSchema).replace(escape('${workout}'), '[a-zA-Z-]*');
    // FIXME - doesnt work
    // also: how to identify actual workoutId or programId or programDay by knowing if workout or program?
    if(string.match(workoutRegex)) {
        console.log('workout');
    } else if(string.match(programRegex)) {
        console.log('program');
    } else {
        return undefined;
    }
};

export {
    program,
    programPath,
    workout,
    workoutPath,
    resolvePath
}
