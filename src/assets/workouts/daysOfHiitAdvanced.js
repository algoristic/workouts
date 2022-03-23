import { program } from '../../service/schemaService'
import { config } from '../app.config.json'

const { values } = config;
const { types:{ strength, cardio, hiit, fight } } = values;
const { levels:{ easy, normal, hard, extreme } } = values;

const daysOfHiitAdvanced = (day) => program("30-days-of-hiit-advanced", day);

const workouts = [
    {
        "id": daysOfHiitAdvanced(1),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(2),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(3),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(4),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(5),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(6),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(7),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(8),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(9),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(10),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(11),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(12),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(13),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(14),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(15),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(16),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(17),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(18),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(19),
        "types": hiit,
        "levels": hard
    },
    {
        "id": daysOfHiitAdvanced(20),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(21),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(22),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(23),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(24),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(25),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(26),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(27),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(28),
        "types": [hiit, fight],
        "levels": hard
    },
    {
        "id": daysOfHiitAdvanced(29),
        "types": none,
        "levels": none
    },
    {
        "id": daysOfHiitAdvanced(30),
        "types": [hiit, fight],
        "levels": hard
    }
];

export default workouts;
