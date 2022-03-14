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
    /*
        IDEE: die Methoden program() und workout() speichern beim ersten Aufruf
        die IDs im localStorage unter den Objekten "workouts" und "programs".
        Der string hier wird dann für alle Objekte abgeglichen via string.include().
    */
};

export {
    program,
    programPath,
    workout,
    workoutPath,
    resolvePath
}
