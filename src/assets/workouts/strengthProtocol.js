import { program } from '../../service/schemaService'
import { config } from '../app.config.json'

const { values } = config;
const { types:{ strength, cardio, hiit, fight } } = values;
const { levels:{ easy, normal, hard, extreme } } = values;

const strengthProtocol = (day) => program("strength-protocol", day);

const workouts = [
    {
        "id": strengthProtocol(1),
        "types": strength,
        "levels": normal
    },
    {
        "id": strengthProtocol(2),
        "types": none,
        "levels": none
    },
    {
        "id": strengthProtocol(3),
        "types": strength,
        "levels": easy
    },
    {
        "id": strengthProtocol(4),
        "types": none,
        "levels": none
    },
    {
        "id": strengthProtocol(5),
        "types": none,
        "levels": none
    },
    {
        "id": strengthProtocol(6),
        "types": none,
        "levels": none
    },
    {
        "id": strengthProtocol(7),
        "types": none,
        "levels": none
    },
    {
        "id": strengthProtocol(8),
        "types": strength,
        "levels": normal
    },
    {
        "id": strengthProtocol(9),
        "types": none,
        "levels": none
    },
    {
        "id": strengthProtocol(10),
        "types": none,
        "levels": none
    },
    {
        "id": strengthProtocol(11),
        "types": strength,
        "levels": normal
    },
    {
        "id": strengthProtocol(12),
        "types": none,
        "levels": none
    },
    {
        "id": strengthProtocol(13),
        "types": strength,
        "levels": normal
    },
    {
        "id": strengthProtocol(14),
        "types": none,
        "levels": none
    },
    {
        "id": strengthProtocol(15),
        "types": strength,
        "levels": normal
    },
    {
        "id": strengthProtocol(16),
        "types": strength,
        "levels": normal
    },
    {
        "id": strengthProtocol(17),
        "types": strength,
        "levels": normal
    },
    {
        "id": strengthProtocol(18),
        "types": none,
        "levels": none
    },
    {
        "id": strengthProtocol(19),
        "types": none,
        "levels": none
    },
    {
        "id": strengthProtocol(20),
        "types": strength,
        "levels": normal
    },
    {
        "id": strengthProtocol(21),
        "types": strength,
        "levels": normal
    },
    {
        "id": strengthProtocol(22),
        "types": none,
        "levels": none
    },
    {
        "id": strengthProtocol(23),
        "types": none,
        "levels": none
    },
    {
        "id": strengthProtocol(24),
        "types": strength,
        "levels": hard
    },
    {
        "id": strengthProtocol(25),
        "types": strength,
        "levels": normal
    },
    {
        "id": strengthProtocol(26),
        "types": none,
        "levels": none
    },
    {
        "id": strengthProtocol(27),
        "types": none,
        "levels": none
    },
    {
        "id": strengthProtocol(28),
        "types": strength,
        "levels": normal
    },
    {
        "id": strengthProtocol(29),
        "types": strength,
        "levels": hard
    },
    {
        "id": strengthProtocol(30),
        "types": none,
        "levels": none
    }
];

export default workouts;
