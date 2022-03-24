import { program } from '../../service/schemaService'
import { config } from '../app.config.json'

const { values } = config;
const { types:{ strength, cardio, hiit, fight } } = values;
const { levels:{ easy, normal, hard, extreme } } = values;

const avatar = (day) => program("avatar-program", day);

const workouts = [
    {
        "id": avatar(1),
        "types": cardio,
        "levels": hard
    },
    {
        "id": avatar(2),
        "types": cardio,
        "levels": hard
    },
    {
        "id": avatar(3),
        "types": [cardio, fight],
        "levels": normal
    },
    {
        "id": avatar(4),
        "types": [],
        "levels": []
    },
    {
        "id": avatar(5),
        "types": [hiit, fight],
        "levels": extreme
    },
    {
        "id": avatar(6),
        "types": [cardio, fight],
        "levels": extreme
    },
    {
        "id": avatar(7),
        "types": cardio,
        "levels": hard
    },
    {
        "id": avatar(8),
        "types": [],
        "levels": []
    },
    {
        "id": avatar(9),
        "types": strength,
        "levels": hard
    },
    {
        "id": avatar(10),
        "types": [hiit, fight],
        "levels": normal
    },
    {
        "id": avatar(11),
        "types": [cardio, fight],
        "levels": normal
    },
    {
        "id": avatar(12),
        "types": [],
        "levels": []
    },
    {
        "id": avatar(13),
        "types": [cardio, fight],
        "levels": normal
    },
    {
        "id": avatar(14),
        "types": cardio,
        "levels": hard
    },
    {
        "id": avatar(15),
        "types": [cardio, fight],
        "levels": extreme
    },
    {
        "id": avatar(16),
        "types": [],
        "levels": []
    },
    {
        "id": avatar(17),
        "types": hiit,
        "levels": hard
    },
    {
        "id": avatar(18),
        "types": [strength, fight],
        "levels": extreme
    },
    {
        "id": avatar(19),
        "types": cardio,
        "levels": hard
    },
    {
        "id": avatar(20),
        "types": [],
        "levels": []
    },
    {
        "id": avatar(21),
        "types": [cardio, fight],
        "levels": extreme
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
        "types": [],
        "levels": []
    },
    {
        "id": avatar(25),
        "types": strength,
        "levels": hard
    },
    {
        "id": avatar(26),
        "types": [cardio, fight],
        "levels": hard
    },
    {
        "id": avatar(27),
        "types": [hiit, fight],
        "levels": extreme
    },
    {
        "id": avatar(28),
        "types": [],
        "levels": []
    },
    {
        "id": avatar(29),
        "types": [cardio, fight],
        "levels": hard
    },
    {
        "id": avatar(30),
        "types": [cardio, fight],
        "levels": hard
    }
];

export default workouts;
