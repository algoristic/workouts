import { program } from '../../service/schemaService'
import { config } from '../app.config.json'

const { values } = config;
const { types:{ strength, cardio, hiit, fight } } = values;
const { levels:{ easy, normal, hard, extreme } } = values;

const daysOfStrength = (day) => program("30-days-of-strength", day);

const workouts = [
    {
        "id": daysOfStrength(1),
        "types": strength,
        "levels": easy
    },
    {
        "id": daysOfStrength(2),
        "types": strength,
        "levels": easy
    },
    {
        "id": daysOfStrength(3),
        "types": strength,
        "levels": easy
    },
    {
        "id": daysOfStrength(4),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfStrength(5),
        "types": strength,
        "levels": normal
    },
    {
        "id": daysOfStrength(6),
        "types": strength,
        "levels": easy
    },
    {
        "id": daysOfStrength(7),
        "types": strength,
        "levels": normal
    },
    {
        "id": daysOfStrength(8),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfStrength(9),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfStrength(10),
        "types": strength,
        "levels": easy
    },
    {
        "id": daysOfStrength(11),
        "types": strength,
        "levels": easy
    },
    {
        "id": daysOfStrength(12),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfStrength(13),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfStrength(14),
        "types": strength,
        "levels": easy
    },
    {
        "id": daysOfStrength(15),
        "types": strength,
        "levels": easy
    },
    {
        "id": daysOfStrength(16),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfStrength(17),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfStrength(18),
        "types": strength,
        "levels": easy
    },
    {
        "id": daysOfStrength(19),
        "types": [strength, fight],
        "levels": normal
    },
    {
        "id": daysOfStrength(20),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfStrength(21),
        "types": strength,
        "levels": normal
    },
    {
        "id": daysOfStrength(22),
        "types": strength,
        "levels": easy
    },
    {
        "id": daysOfStrength(23),
        "types": strength,
        "levels": normal
    },
    {
        "id": daysOfStrength(24),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfStrength(25),
        "types": strength,
        "levels": easy
    },
    {
        "id": daysOfStrength(26),
        "types": strength,
        "levels": normal
    },
    {
        "id": daysOfStrength(27),
        "types": strength,
        "levels": normal
    },
    {
        "id": daysOfStrength(28),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfStrength(29),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfStrength(30),
        "types": strength,
        "levels": normal
    }
];

export default workouts;
