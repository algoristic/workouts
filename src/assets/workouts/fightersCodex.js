import { program } from '../../service/schemaService'
import { config } from '../app.config.json'

const { values } = config;
const { types:{ strength, cardio, hiit, fight } } = values;
const { levels:{ easy, normal, hard, extreme } } = values;

const fightersCodex = (day) => program("fighters-codex", day);

const workouts = [
    {
        "id": fightersCodex(1),
        "types": none,
        "levels": none
    },
    {
        "id": fightersCodex(2),
        "types": [cardio, fight],
        "levels": normal
    },
    {
        "id": fightersCodex(3),
        "types": [strength, figh],
        "levels": normal
    },
    {
        "id": fightersCodex(4),
        "types": none,
        "levels": none
    },
    {
        "id": fightersCodex(5),
        "types": none,
        "levels": none
    },
    {
        "id": fightersCodex(6),
        "types": [cardio, fight],
        "levels": normal
    },
    {
        "id": fightersCodex(7),
        "types": none,
        "levels": none
    },
    {
        "id": fightersCodex(8),
        "types": none,
        "levels": none
    },
    {
        "id": fightersCodex(9),
        "types": [strength, fight],
        "levels": hard
    },
    {
        "id": fightersCodex(10),
        "types": [cardio, fight],
        "levels": normal
    },
    {
        "id": fightersCodex(11),
        "types": [cardio, fight],
        "levels": hard
    },
    {
        "id": fightersCodex(12),
        "types": none,
        "levels": none
    },
    {
        "id": fightersCodex(13),
        "types": none,
        "levels": none
    },
    {
        "id": fightersCodex(14),
        "types": none,
        "levels": none
    },
    {
        "id": fightersCodex(15),
        "types": [strength, fight],
        "levels": hard
    },
    {
        "id": fightersCodex(16),
        "types": none,
        "levels": none
    },
    {
        "id": fightersCodex(17),
        "types": none,
        "levels": none
    },
    {
        "id": fightersCodex(18),
        "types": [cardio, fight],
        "levels": hard
    },
    {
        "id": fightersCodex(19),
        "types": [strength, fight],
        "levels": hard
    },
    {
        "id": fightersCodex(20),
        "types": none,
        "levels": none
    },
    {
        "id": fightersCodex(21),
        "types": none,
        "levels": none
    },
    {
        "id": fightersCodex(22),
        "types": none,
        "levels": none
    },
    {
        "id": fightersCodex(23),
        "types": [cardio, fight],
        "levels": extreme
    },
    {
        "id": fightersCodex(24),
        "types": none,
        "levels": none
    },
    {
        "id": fightersCodex(25),
        "types": none,
        "levels": none
    },
    {
        "id": fightersCodex(26),
        "types": [cardio, fight],
        "levels": normal
    },
    {
        "id": fightersCodex(27),
        "types": [cardio, fight],
        "levels": extreme
    },
    {
        "id": fightersCodex(28),
        "types": none,
        "levels": none
    },
    {
        "id": fightersCodex(29),
        "types": [cardio, fight],
        "levels": hard
    },
    {
        "id": fightersCodex(30),
        "types": none,
        "levels": none
    }
];

export default workouts;
