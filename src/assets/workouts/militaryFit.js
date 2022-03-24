import { program } from '../../service/schemaService'
import { config } from '../app.config.json'

const { values } = config;
const { types:{ strength, cardio, hiit, fight } } = values;
const { levels:{ easy, normal, hard, extreme } } = values;

const militaryFit = (day) => program("military-fit", day);

const workouts = [
    {
        "id": militaryFit(1),
        "types": strength,
        "levels": normal
    },
    {
        "id": militaryFit(2),
        "types": strength,
        "levels": easy
    },
    {
        "id": militaryFit(3),
        "types": strength,
        "levels": hard
    },
    {
        "id": militaryFit(4),
        "types": none,
        "levels": none
    },
    {
        "id": militaryFit(5),
        "types": [strength, fight],
        "levels": normal
    },
    {
        "id": militaryFit(6),
        "types": none,
        "levels": none
    },
    {
        "id": militaryFit(7),
        "types": strength,
        "levels": normal
    },
    {
        "id": militaryFit(8),
        "types": hiit,
        "levels": normal
    },
    {
        "id": militaryFit(9),
        "types": none,
        "levels": none
    },
    {
        "id": militaryFit(10),
        "types": strength,
        "levels": normal
    },
    {
        "id": militaryFit(11),
        "types": none,
        "levels": none
    },
    {
        "id": militaryFit(12),
        "types": none,
        "levels": none
    },
    {
        "id": militaryFit(13),
        "types": none,
        "levels": none
    },
    {
        "id": militaryFit(14),
        "types": [cardio, fight],
        "levels": hard
    },
    {
        "id": militaryFit(15),
        "types": none,
        "levels": none
    },
    {
        "id": militaryFit(16),
        "types": none,
        "levels": none
    },
    {
        "id": militaryFit(17),
        "types": none,
        "levels": none
    },
    {
        "id": militaryFit(18),
        "types": none,
        "levels": none
    },
    {
        "id": militaryFit(19),
        "types": cardio,
        "levels": extreme
    },
    {
        "id": militaryFit(20),
        "types": strength,
        "levels": hard
    },
    {
        "id": militaryFit(21),
        "types": strength,
        "levels": normal
    },
    {
        "id": militaryFit(22),
        "types": cardio,
        "levels": easy
    },
    {
        "id": militaryFit(23),
        "types": none,
        "levels": none
    },
    {
        "id": militaryFit(24),
        "types": strength,
        "levels": hard
    },
    {
        "id": militaryFit(25),
        "types": cardio,
        "levels": easy
    },
    {
        "id": militaryFit(26),
        "types": strength,
        "levels": easy
    },
    {
        "id": militaryFit(27),
        "types": [cardio, fight],
        "levels": hard
    },
    {
        "id": militaryFit(28),
        "types": strength,
        "levels": hard
    },
    {
        "id": militaryFit(29),
        "types": none,
        "levels": none
    },
    {
        "id": militaryFit(30),
        "types": strength,
        "levels": hard
    }
];

export default workouts;
