import { program } from '../../service/schemaService'
import { config } from '../app.config.json'

const { values } = config;
const { types:{ strength, cardio, hiit, fight } } = values;
const { levels:{ easy, normal, hard, extreme } } = values;

const spartanTrials = (day) => program("spartan-trials", day);

const workouts = [
    {
        "id": spartanTrials(1),
        "types": strength,
        "levels": normal
    },
    {
        "id": spartanTrials(2),
        "types": strength,
        "levels": easy
    },
    {
        "id": spartanTrials(3),
        "types": [strength, fight],
        "levels": easy
    },
    {
        "id": spartanTrials(4),
        "types": none,
        "levels": none
    },
    {
        "id": spartanTrials(5),
        "types": strength,
        "levels": easy
    },
    {
        "id": spartanTrials(6),
        "types": strength,
        "levels": easy
    },
    {
        "id": spartanTrials(7),
        "types": strength,
        "levels": easy
    },
    {
        "id": spartanTrials(8),
        "types": none,
        "levels": none
    },
    {
        "id": spartanTrials(9),
        "types": strength,
        "levels": normal
    },
    {
        "id": spartanTrials(10),
        "types": strength,
        "levels": normal
    },
    {
        "id": spartanTrials(11),
        "types": [strength, fight],
        "levels": normal
    },
    {
        "id": spartanTrials(12),
        "types": none,
        "levels": none
    },
    {
        "id": spartanTrials(13),
        "types": strength,
        "levels": normal
    },
    {
        "id": spartanTrials(14),
        "types": strength,
        "levels": easy
    },
    {
        "id": spartanTrials(15),
        "types": strength,
        "levels": normal
    },
    {
        "id": spartanTrials(16),
        "types": none,
        "levels": none
    },
    {
        "id": spartanTrials(17),
        "types": strength,
        "levels": easy
    },
    {
        "id": spartanTrials(18),
        "types": none,
        "levels": none
    },
    {
        "id": spartanTrials(19),
        "types": [strength, fight],
        "levels": normal
    },
    {
        "id": spartanTrials(20),
        "types": none,
        "levels": none
    },
    {
        "id": spartanTrials(21),
        "types": strength,
        "levels": normal
    },
    {
        "id": spartanTrials(22),
        "types": strength,
        "levels": easy
    },
    {
        "id": spartanTrials(23),
        "types": strength,
        "levels": hard
    },
    {
        "id": spartanTrials(24),
        "types": none,
        "levels": none
    },
    {
        "id": spartanTrials(25),
        "types": strength,
        "levels": normal
    },
    {
        "id": spartanTrials(26),
        "types": strength,
        "levels": easy
    },
    {
        "id": spartanTrials(27),
        "types": strength,
        "levels": hard
    },
    {
        "id": spartanTrials(28),
        "types": none,
        "levels": none
    },
    {
        "id": spartanTrials(29),
        "types": strength,
        "levels": normal
    },
    {
        "id": spartanTrials(30),
        "types": strength,
        "levels": easy
    }
];

export default workouts;
