import { program } from '../../service/schemaService'
import { config } from '../app.config.json'

const { values } = config;
const { types:{ hiit, fight } } = values;
const { levels:{ easy, normal } } = values;

const combatHiit = (day) => program("combat-hiit", day);

const workouts = [
    {
        "id": combatHiit(1),
        "types": [],
        "levels": []
    },
    {
        "id": combatHiit(2),
        "types": [],
        "levels": []
    },
    {
        "id": combatHiit(3),
        "types": [],
        "levels": []
    },
    {
        "id": combatHiit(4),
        "types": [],
        "levels": []
    },
    {
        "id": combatHiit(5),
        "types": [],
        "levels": []
    },
    {
        "id": combatHiit(6),
        "types": [hiit, fight],
        "levels": easy
    },
    {
        "id": combatHiit(7),
        "types": [hiit, fight],
        "levels": easy
    },
    {
        "id": combatHiit(8),
        "types": [],
        "levels": []
    },
    {
        "id": combatHiit(9),
        "types": [],
        "levels": []
    },
    {
        "id": combatHiit(10),
        "types": [hiit, fight],
        "levels": easy
    },
    {
        "id": combatHiit(11),
        "types": [hiit, fight],
        "levels": normal
    },
    {
        "id": combatHiit(12),
        "types": [],
        "levels": []
    },
    {
        "id": combatHiit(13),
        "types": [],
        "levels": []
    },
    {
        "id": combatHiit(14),
        "types": [hiit, fight],
        "levels": easy
    },
    {
        "id": combatHiit(15),
        "types": [],
        "levels": []
    },
    {
        "id": combatHiit(16),
        "types": [],
        "levels": []
    },
    {
        "id": combatHiit(17),
        "types": [],
        "levels": []
    },
    {
        "id": combatHiit(18),
        "types": hiit,
        "levels": easy
    },
    {
        "id": combatHiit(19),
        "types": [],
        "levels": []
    },
    {
        "id": combatHiit(20),
        "types": [],
        "levels": []
    },
    {
        "id": combatHiit(21),
        "types": [],
        "levels": []
    },
    {
        "id": combatHiit(22),
        "types": [],
        "levels": []
    },
    {
        "id": combatHiit(23),
        "types": [hiit, fight],
        "levels": easy
    },
    {
        "id": combatHiit(24),
        "types": hiit,
        "levels": easy
    },
    {
        "id": combatHiit(25),
        "types": [],
        "levels": []
    },
    {
        "id": combatHiit(26),
        "types": [],
        "levels": []
    },
    {
        "id": combatHiit(27),
        "types": [hiit, fight],
        "levels": easy
    },
    {
        "id": combatHiit(28),
        "types": hiit,
        "levels": easy
    },
    {
        "id": combatHiit(29),
        "types": [],
        "levels": []
    },
    {
        "id": combatHiit(30),
        "types": [hiit, fight],
        "levels": normal
    }
];

export default workouts;
