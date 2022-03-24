import { program } from '../../service/schemaService'
import { config } from '../app.config.json'

const { values } = config;
const { types:{ strength, cardio, hiit, fight } } = values;
const { levels:{ easy, normal, hard, extreme } } = values;

const athenasPlaybook = (day) => program("athenas-playbook", day);

const workouts = [
    {
        "id": athenasPlaybook(1),
        "types": cardio,
        "levels": easy
    },
    {
        "id": athenasPlaybook(2),
        "types": [cardio, fight],
        "levels": easy
    },
    {
        "id": athenasPlaybook(3),
        "types": none,
        "levels": none
    },
    {
        "id": athenasPlaybook(4),
        "types": none,
        "levels": none
    },
    {
        "id": athenasPlaybook(5),
        "types": cardio,
        "levels": easy
    },
    {
        "id": athenasPlaybook(6),
        "types": none,
        "levels": none
    },
    {
        "id": athenasPlaybook(7),
        "types": [cardio, fight],
        "levels": easy
    },
    {
        "id": athenasPlaybook(8),
        "types": none,
        "levels": none
    },
    {
        "id": athenasPlaybook(9),
        "types": cardio,
        "levels": easy
    },
    {
        "id": athenasPlaybook(10),
        "types": [cardio, fight],
        "levels": easy
    },
    {
        "id": athenasPlaybook(11),
        "types": none,
        "levels": none
    },
    {
        "id": athenasPlaybook(12),
        "types": none,
        "levels": none
    },
    {
        "id": athenasPlaybook(13),
        "types": cardio,
        "levels": easy
    },
    {
        "id": athenasPlaybook(14),
        "types": [cardio, fight],
        "levels": easy
    },
    {
        "id": athenasPlaybook(15),
        "types": none,
        "levels": none
    },
    {
        "id": athenasPlaybook(16),
        "types": none,
        "levels": none
    },
    {
        "id": athenasPlaybook(17),
        "types": none,
        "levels": none
    },
    {
        "id": athenasPlaybook(18),
        "types": cardio,
        "levels": easy
    },
    {
        "id": athenasPlaybook(19),
        "types": none,
        "levels": none
    },
    {
        "id": athenasPlaybook(20),
        "types": none,
        "levels": none
    },
    {
        "id": athenasPlaybook(21),
        "types": [cardio, fight],
        "levels": easy
    },
    {
        "id": athenasPlaybook(22),
        "types": none,
        "levels": none
    },
    {
        "id": athenasPlaybook(23),
        "types": none,
        "levels": none
    },
    {
        "id": athenasPlaybook(24),
        "types": none,
        "levels": none
    },
    {
        "id": athenasPlaybook(25),
        "types": none,
        "levels": none
    },
    {
        "id": athenasPlaybook(26),
        "types": none,
        "levels": none
    },
    {
        "id": athenasPlaybook(27),
        "types": none,
        "levels": none
    },
    {
        "id": athenasPlaybook(28),
        "types": none,
        "levels": none
    },
    {
        "id": athenasPlaybook(29),
        "types": cardio,
        "levels": easy
    },
    {
        "id": athenasPlaybook(30),
        "types": [cardio, fight],
        "levels": easy
    }
];

export default workouts;
