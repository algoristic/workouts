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
        "types": cardio,
        "levels": normal
    },
    {
        "id": militaryFit(5),
        "types": [strength, fight],
        "levels": normal
    },
    {
        "id": militaryFit(6),
        "types": cardio,
        "levels": normal
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
        "types": cardio,
        "levels": normal
    },
    {
        "id": militaryFit(10),
        "types": cardio,
        "levels": normal
    },
    {
        "id": militaryFit(11),
        "types": strength,
        "levels": normal
    },
    {
        "id": militaryFit(12),
        "types": cardio,
        "levels": normal
    },
    {
        "id": militaryFit(13),
        "types": [],
        "levels": []
    },
    {
        "id": militaryFit(14),
        "types": [cardio, fight],
        "levels": hard
    },
    {
        "id": militaryFit(15),
        "types": cardio,
        "levels": normal
    },
    {
        "id": militaryFit(16),
        "types": cardio,
        "levels": normal
    },
    {
        "id": militaryFit(17),
        "types": cardio,
        "levels": normal
    },
    {
        "id": militaryFit(18),
        "types": cardio,
        "levels": normal
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
        "types": cardio,
        "levels": normal
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
        "types": cardio,
        "levels": normal
    },
    {
        "id": militaryFit(30),
        "types": strength,
        "levels": hard
    }
];

export default workouts;
