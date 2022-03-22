import { program } from '../../service/schemaService'
import { config } from '../app.config.json'

const { values } = config;
const { types:{ strength, cardio, hiit, fight } } = values;
const { levels:{ easy, normal, hard, extreme } } = values;

const placeholder = (day) => program("placeholder", day);

const workouts = [
    {
        "id": placeholder(1),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(2),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(3),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(4),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(5),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(6),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(7),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(8),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(9),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(10),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(11),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(12),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(13),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(14),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(15),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(16),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(17),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(18),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(19),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(20),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(21),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(22),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(23),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(24),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(25),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(26),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(27),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(28),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(29),
        "types": none,
        "levels": none
    },
    {
        "id": placeholder(30),
        "types": none,
        "levels": none
    }
];

export default workouts;
