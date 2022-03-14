import { program, workout } from '../service/schemaService'

import { config } from './app.config.json'

const { values } = config;
const { types:{ strength, cardio, hiit, fight } } = values;
const { levels:{ easy, normal, hard, extreme } } = values;

//programs
const militaryFit = "military-fit";
//workouts
const ptPyramid = "pt-pyramid-workout";

const workouts = [
    {
        "id": program(militaryFit, 1),
        "types": strength,
        "levels": [easy, normal]
    },
    {
        "id": program(militaryFit, 2),
        "types": strength,
        "levels": hard
    },
    {
        "id": program(militaryFit, 3),
        "types": strength,
        "levels": extreme
    },
    {
        "id": program(militaryFit, 4),
        "types": cardio,
        "levels": [easy, normal]
    },
    {
        "id": program(militaryFit, 4),
        "types": [cardio, fight],
        "levels": [easy, normal]
    },
    {
        "id": program(militaryFit, 5),
        "types": cardio,
        "levels": hard
    },
    {
        "id": program(militaryFit, 6),
        "types": cardio,
        "levels": extreme
    },
    {
        "id": program(militaryFit, 7),
        "types": fight,
        "levels": [easy, normal]
    },
    {
        "id": program(militaryFit, 8),
        "types": fight,
        "levels": hard
    },
    {
        "id": program(militaryFit, 9),
        "types": fight,
        "levels": extreme
    },
    {
        "id": program(militaryFit, 10),
        "types": [hiit, fight],
        "levels": [easy, normal]
    },
    {
        "id": program(militaryFit, 10),
        "types": hiit,
        "levels": [easy, normal]
    },
    {
        "id": program(militaryFit, 11),
        "types": hiit,
        "levels": hard
    },
    {
        "id": program(militaryFit, 12),
        "types": hiit,
        "levels": extreme
    },
    {
        "id": workout(ptPyramid),
        "name": "PT Pyramid",
        "types": strength,
        "levels": [normal, hard]
    }
];

export default workouts;
