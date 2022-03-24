import { program } from '../../service/schemaService'
import { config } from '../app.config.json'

const { values } = config;
const { types:{ cardio, fight } } = values;
const { levels:{ easy, normal } } = values;

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
        "types": [],
        "levels": []
    },
    {
        "id": athenasPlaybook(4),
        "types": [],
        "levels": []
    },
    {
        "id": athenasPlaybook(5),
        "types": cardio,
        "levels": easy
    },
    {
        "id": athenasPlaybook(6),
        "types": [],
        "levels": []
    },
    {
        "id": athenasPlaybook(7),
        "types": [cardio, fight],
        "levels": easy
    },
    {
        "id": athenasPlaybook(8),
        "types": [],
        "levels": []
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
        "types": [],
        "levels": []
    },
    {
        "id": athenasPlaybook(12),
        "types": [],
        "levels": []
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
        "types": [],
        "levels": []
    },
    {
        "id": athenasPlaybook(16),
        "types": [],
        "levels": []
    },
    {
        "id": athenasPlaybook(17),
        "types": [],
        "levels": []
    },
    {
        "id": athenasPlaybook(18),
        "types": cardio,
        "levels": easy
    },
    {
        "id": athenasPlaybook(19),
        "types": [],
        "levels": []
    },
    {
        "id": athenasPlaybook(20),
        "types": [],
        "levels": []
    },
    {
        "id": athenasPlaybook(21),
        "types": [cardio, fight],
        "levels": easy
    },
    {
        "id": athenasPlaybook(22),
        "types": [],
        "levels": []
    },
    {
        "id": athenasPlaybook(23),
        "types": [],
        "levels": []
    },
    {
        "id": athenasPlaybook(24),
        "types": cardio,
        "levels": normal
    },
    {
        "id": athenasPlaybook(25),
        "types": [],
        "levels": []
    },
    {
        "id": athenasPlaybook(26),
        "types": [],
        "levels": []
    },
    {
        "id": athenasPlaybook(27),
        "types": [],
        "levels": []
    },
    {
        "id": athenasPlaybook(28),
        "types": [],
        "levels": []
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
