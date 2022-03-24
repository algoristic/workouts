import { program } from '../../service/schemaService'
import { config } from '../app.config.json'

const { values } = config;
const { types:{ strength, fight } } = values;
const { levels:{ easy, normal } } = values;

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
        "types": [],
        "levels": []
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
        "types": [],
        "levels": []
    },
    {
        "id": daysOfStrength(9),
        "types": [],
        "levels": []
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
        "types": [],
        "levels": []
    },
    {
        "id": daysOfStrength(13),
        "types": [],
        "levels": []
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
        "types": [],
        "levels": []
    },
    {
        "id": daysOfStrength(17),
        "types": [],
        "levels": []
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
        "types": [],
        "levels": []
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
        "types": [],
        "levels": []
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
        "types": [],
        "levels": []
    },
    {
        "id": daysOfStrength(29),
        "types": [],
        "levels": []
    },
    {
        "id": daysOfStrength(30),
        "types": strength,
        "levels": normal
    }
];

export default workouts;
