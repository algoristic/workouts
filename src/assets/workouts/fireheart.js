import { program } from '../../service/schemaService'
import { config } from '../app.config.json'

const { values } = config;
const { types:{ strength, cardio, hiit, fight } } = values;
const { levels:{ easy, normal, hard, extreme } } = values;

const fireheart = (day) => program("fireheart-program", day);

const workouts = [
    {
        "id": fireheart(1),
        "types": [cardio, fight],
        "levels": easy
    },
    {
        "id": fireheart(2),
        "types": [strength, fight],
        "levels": easy
    },
    {
        "id": fireheart(3),
        "types": [],
        "levels": []
    },
    {
        "id": fireheart(4),
        "types": [cardio, fight],
        "levels": easy
    },
    {
        "id": fireheart(5),
        "types": [strength, fight],
        "levels": easy
    },
    {
        "id": fireheart(6),
        "types": [],
        "levels": []
    },
    {
        "id": fireheart(7),
        "types": [],
        "levels": []
    },
    {
        "id": fireheart(8),
        "types": [strength, fight],
        "levels": easy
    },
    {
        "id": fireheart(9),
        "types": [],
        "levels": []
    },
    {
        "id": fireheart(10),
        "types": [],
        "levels": []
    },
    {
        "id": fireheart(11),
        "types": [strength, fight],
        "levels": easy
    },
    {
        "id": fireheart(12),
        "types": [],
        "levels": []
    },
    {
        "id": fireheart(13),
        "types": [],
        "levels": []
    },
    {
        "id": fireheart(14),
        "types": [],
        "levels": []
    },
    {
        "id": fireheart(15),
        "types": [],
        "levels": []
    },
    {
        "id": fireheart(16),
        "types": [cardio, fight],
        "levels": normal
    },
    {
        "id": fireheart(17),
        "types": [strength, fight],
        "levels": easy
    },
    {
        "id": fireheart(18),
        "types": [],
        "levels": []
    },
    {
        "id": fireheart(19),
        "types": [cardio, fight],
        "levels": normal
    },
    {
        "id": fireheart(20),
        "types": [strength, fight],
        "levels": easy
    },
    {
        "id": fireheart(21),
        "types": cardio,
        "levels": easy
    },
    {
        "id": fireheart(22),
        "types": [cardio, fight],
        "levels": normal
    },
    {
        "id": fireheart(23),
        "types": [strength, fight],
        "levels": easy
    },
    {
        "id": fireheart(24),
        "types": [],
        "levels": []
    },
    {
        "id": fireheart(25),
        "types": [cardio, fight],
        "levels": normal
    },
    {
        "id": fireheart(26),
        "types": [strength, fight],
        "levels": normal
    },
    {
        "id": fireheart(27),
        "types": [],
        "levels": []
    },
    {
        "id": fireheart(28),
        "types": [cardio, fight],
        "levels": normal
    },
    {
        "id": fireheart(29),
        "types": [strength, fight],
        "levels": normal
    },
    {
        "id": fireheart(30),
        "types": [],
        "levels": []
    }
];

export default workouts;
