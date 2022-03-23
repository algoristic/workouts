import { program } from '../../service/schemaService'
import { config } from '../app.config.json'

const { values } = config;
const { types:{ strength, cardio, hiit, fight } } = values;
const { levels:{ easy, normal, hard, extreme } } = values;

const avatar = (day) => program("avatar-program", day);

const workouts = [
    {
        "id": avatar(1),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(2),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(3),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(4),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(5),
        "types": [hiit, fight],
        "levels": extreme
    },
    {
        "id": avatar(6),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(7),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(8),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(9),
        "types": strength,
        "levels": hard
    },
    {
        "id": avatar(10),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(11),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(12),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(13),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(14),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(15),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(16),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(17),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(18),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(19),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(20),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(21),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(22),
        "types": hiit,
        "levels": extreme
    },
    {
        "id": avatar(23),
        "types": [strength, fight],
        "levels": normal
    },
    {
        "id": avatar(24),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(25),
        "types": strength,
        "levels": hard
    },
    {
        "id": avatar(26),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(27),
        "types": [hiit, fight],
        "levels": extreme
    },
    {
        "id": avatar(28),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(29),
        "types": none,
        "levels": none
    },
    {
        "id": avatar(30),
        "types": none,
        "levels": none
    }
];

export default workouts;
