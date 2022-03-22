import { workout } from '../../service/schemaService'
import { config } from '../app.config.json'

const { values } = config;
const { types:{ strength, cardio, hiit, fight } } = values;
const { levels:{ easy, normal, hard, extreme } } = values;

const workouts = [
    {
        "id": workout("rogue-warrior-workout"),
        "types": strength,
        "levels": normal
    },
    {
        "id": workout("boxer-power-workout"),
        "types": [strength, fight],
        "levels": normal
    },
    {
        "id": workout("fighter-mode-workout"),
        "types": [strength, fight],
        "levels": normal
    },
    {
        "id": workout("ultimate-fighter-workout"),
        "types": [strength, fight],
        "levels": normal
    },
    {
        "id": workout("combo-fighter-workout"),
        "types": [strength, fight],
        "levels": normal
    },
    {
        "id": workout("fighters-club-workout"),
        "types": [strength, fight],
        "levels": normal
    },
    {
        "id": workout("super-soldier-workout"),
        "types": strength,
        "levels": normal
    },
    {
        "id": workout("merc-workout"),
        "types": strength,
        "levels": normal
    },
    {
        "id": workout("pt-pyramid-workout"),
        "types": strength,
        "levels": [normal, hard]
    },
    {
        "id": workout("commando-workout"),
        "types": strength,
        "levels": normal
    },
    {
        "id": workout("navy-seal-workout"),
        "types": strength,
        "levels": normal
    }
];

export default workouts;
