import { program } from '../../service/schemaService'
import { config } from '../app.config.json'

const { values } = config;
const { types:{ strength, cardio, hiit, fight } } = values;
const { levels:{ easy, normal, hard, extreme } } = values;

const combatHiit = (day) => program("combat-hiit", day);

const workouts = [
    {
        "id": combatHiit(1),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(2),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(3),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(4),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(5),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(6),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(7),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(8),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(9),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(10),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(11),
        "types": [hiit, fight],
        "levels": normal
    },
    {
        "id": combatHiit(12),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(13),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(14),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(15),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(16),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(17),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(18),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(19),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(20),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(21),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(22),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(23),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(24),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(25),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(26),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(27),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(28),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(29),
        "types": none,
        "levels": none
    },
    {
        "id": combatHiit(30),
        "types": [hiit, fight],
        "levels": normal
    }
];

export default workouts;
