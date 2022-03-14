import { program, workout } from '../service/schemaService'

import { config } from './app.config.json'

const { values } = config;
const { types:{ strength, cardio, hiit, fight, all } } = values;
const { levels:{ easy, normal, hard, extreme } } = values;

//programs
const militaryFit = "military-fit";
//workouts
const ptPyramid = "pt-pyramid-workout";

const workouts = [
    {
        "id": program(militaryFit, 1),
        "types": strength,
        "level": [easy, normal]
    },
    {
        "id": program(militaryFit, 2),
        "types": strength,
        "level": hard
    },
    {
        "id": program(militaryFit, 3),
        "types": strength,
        "level": extreme
    },
    {
        "id": program(militaryFit, 4),
        "types": cardio,
        "level": [easy, normal]
    },
    {
        "id": program(militaryFit, 4),
        "types": [cardio, fight],
        "level": [easy, normal]
    },
    {
        "id": program(militaryFit, 5),
        "types": cardio,
        "level": hard
    },
    {
        "id": program(militaryFit, 6),
        "types": cardio,
        "level": extreme
    },
    {
        "id": program(militaryFit, 7),
        "types": fight,
        "level": [easy, normal]
    },
    {
        "id": program(militaryFit, 8),
        "types": fight,
        "level": hard
    },
    {
        "id": program(militaryFit, 9),
        "types": fight,
        "level": extreme
    },
    {
        "id": program(militaryFit, 10),
        "types": [hiit, fight],
        "level": [easy, normal]
    },
    {
        "id": program(militaryFit, 10),
        "types": hiit,
        "level": [easy, normal]
    },
    {
        "id": program(militaryFit, 11),
        "types": hiit,
        "level": hard
    },
    {
        "id": program(militaryFit, 12),
        "types": hiit,
        "level": extreme
    },
    {
        "id": workout(ptPyramid),
        "name": "PT Pyramid",
        "types": strength,
        "level": [normal, hard]
    }
];

export default workouts;
