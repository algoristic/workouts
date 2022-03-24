import { program } from '../../service/schemaService'
import { config } from '../app.config.json'

const { values } = config;
const { types:{ hiit, fight } } = values;
const { levels:{ easy, normal, hard } } = values;

const daysOfHiitAdvanced = (day) => program("30-days-of-hiit-advanced", day);

const workouts = [
    {
        "id": daysOfHiitAdvanced(1),
        "types": [hiit, fight],
        "levels": normal
    },
    {
        "id": daysOfHiitAdvanced(2),
        "types": hiit,
        "levels": easy
    },
    {
        "id": daysOfHiitAdvanced(3),
        "types": hiit,
        "levels": easy
    },
    {
        "id": daysOfHiitAdvanced(4),
        "types": hiit,
        "levels": normal
    },
    {
        "id": daysOfHiitAdvanced(5),
        "types": hiit,
        "levels": normal
    },
    {
        "id": daysOfHiitAdvanced(6),
        "types": hiit,
        "levels": easy
    },
    {
        "id": daysOfHiitAdvanced(7),
        "types": [hiit, fight],
        "levels": normal
    },
    {
        "id": daysOfHiitAdvanced(8),
        "types": hiit,
        "levels": normal
    },
    {
        "id": daysOfHiitAdvanced(9),
        "types": hiit,
        "levels": easy
    },
    {
        "id": daysOfHiitAdvanced(10),
        "types": hiit,
        "levels": easy
    },
    {
        "id": daysOfHiitAdvanced(11),
        "types": hiit,
        "levels": normal
    },
    {
        "id": daysOfHiitAdvanced(12),
        "types": [hiit, fight],
        "levels": easy
    },
    {
        "id": daysOfHiitAdvanced(13),
        "types": hiit,
        "levels": normal
    },
    {
        "id": daysOfHiitAdvanced(14),
        "types": hiit,
        "levels": normal
    },
    {
        "id": daysOfHiitAdvanced(15),
        "types": hiit,
        "levels": easy
    },
    {
        "id": daysOfHiitAdvanced(16),
        "types": [hiit, fight],
        "levels": normal
    },
    {
        "id": daysOfHiitAdvanced(17),
        "types": hiit,
        "levels": easy
    },
    {
        "id": daysOfHiitAdvanced(18),
        "types": hiit,
        "levels": easy
    },
    {
        "id": daysOfHiitAdvanced(19),
        "types": hiit,
        "levels": hard
    },
    {
        "id": daysOfHiitAdvanced(20),
        "types": hiit,
        "levels": normal
    },
    {
        "id": daysOfHiitAdvanced(21),
        "types": hiit,
        "levels": normal
    },
    {
        "id": daysOfHiitAdvanced(22),
        "types": hiit,
        "levels": easy
    },
    {
        "id": daysOfHiitAdvanced(23),
        "types": [hiit, fight],
        "levels": normal
    },
    {
        "id": daysOfHiitAdvanced(24),
        "types": hiit,
        "levels": easy
    },
    {
        "id": daysOfHiitAdvanced(25),
        "types": hiit,
        "levels": easy
    },
    {
        "id": daysOfHiitAdvanced(26),
        "types": hiit,
        "levels": normal
    },
    {
        "id": daysOfHiitAdvanced(27),
        "types": hiit,
        "levels": normal
    },
    {
        "id": daysOfHiitAdvanced(28),
        "types": [hiit, fight],
        "levels": hard
    },
    {
        "id": daysOfHiitAdvanced(29),
        "types": hiit,
        "levels": normal
    },
    {
        "id": daysOfHiitAdvanced(30),
        "types": [hiit, fight],
        "levels": hard
    }
];

export default workouts;
