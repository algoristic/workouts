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
    },
    {
        "id": workout("swat-workout"),
        "types": strength,
        "levels": hard
    },
    {
        "id": workout("special-forces-workout"),
        "types": strength,
        "levels": hard
    },
    {
        "id": workout("boxer-endurance-workout"),
        "types": [strength, fight],
        "levels": hard
    },
    {
        "id": workout("fight-night-workout"),
        "types": [hiit, fight],
        "levels": normal
    },
    {
        "id": workout("boxer-speed-workout"),
        "types": [hiit, fight],
        "levels": normal
    },
    {
        "id": workout("boxer-hiit-workout"),
        "types": [hiit, fight],
        "levels": easy
    },
    {
        "id": workout("cardio-box-workout"),
        "types": [cardio, fight],
        "levels": easy
    },
    {
        "id": workout("ninja-warrior-workout"),
        "types": cardio,
        "levels": hard
    }
];

export default workouts;
