import { program } from '../../service/schemaService'
import { config } from '../app.config.json'

const { values } = config;
const { types:{ strength, cardio, hiit, fight } } = values;
const { levels:{ easy, normal, hard, extreme } } = values;

const boxerPrime = (day) => program("boxer-prime", day);

const workouts = [
    {
        "id": boxerPrime(1),
        "types": [strength, fight],
        "levels": normal
    },
    {
        "id": boxerPrime(2),
        "types": [strength, fight],
        "levels": extreme
    },
    {
        "id": boxerPrime(3),
        "types": cardio,
        "levels": hard
    },
    {
        "id": boxerPrime(4),
        "types": [strength, fight],
        "levels": extreme
    },
    {
        "id": boxerPrime(5),
        "types": [cardio, fight],
        "levels": normal
    },
    {
        "id": boxerPrime(6),
        "types": [hiit, fight],
        "levels": normal
    },
    {
        "id": boxerPrime(7),
        "types": [cardio, fight],
        "levels": normal
    },
    {
        "id": boxerPrime(8),
        "types": strength,
        "levels": easy
    },
    {
        "id": boxerPrime(9),
        "types": [strength, fight],
        "levels": hard
    },
    {
        "id": boxerPrime(10),
        "types": [],
        "levels": []
    },
    {
        "id": boxerPrime(11),
        "types": [hiit, fight],
        "levels": hard
    },
    {
        "id": boxerPrime(12),
        "types": [strength, fight],
        "levels": normal
    },
    {
        "id": boxerPrime(13),
        "types": [cardio, fight],
        "levels": normal
    },
    {
        "id": boxerPrime(14),
        "types": cardio,
        "levels": hard
    },
    {
        "id": boxerPrime(15),
        "types": [strength, fight],
        "levels": extreme
    },
    {
        "id": boxerPrime(16),
        "types": [],
        "levels": []
    },
    {
        "id": boxerPrime(17),
        "types": [hiit, fight],
        "levels": normal
    },
    {
        "id": boxerPrime(18),
        "types": [strength, fight],
        "levels": normal
    },
    {
        "id": boxerPrime(19),
        "types": [strength, fight],
        "levels": extreme
    },
    {
        "id": boxerPrime(20),
        "types": [strength, fight],
        "levels": extreme
    },
    {
        "id": boxerPrime(21),
        "types": [cardio, fight],
        "levels": normal
    },
    {
        "id": boxerPrime(22),
        "types": [hiit, fight],
        "levels": hard
    },
    {
        "id": boxerPrime(23),
        "types": [cardio, fight],
        "levels": hard
    },
    {
        "id": boxerPrime(24),
        "types": [strength, fight],
        "levels": extreme
    },
    {
        "id": boxerPrime(25),
        "types": cardio,
        "levels": hard
    },
    {
        "id": boxerPrime(26),
        "types": [strength, fight],
        "levels": normal
    },
    {
        "id": boxerPrime(27),
        "types": [hiit, fight],
        "levels": hard
    },
    {
        "id": boxerPrime(28),
        "types": [],
        "levels": []
    },
    {
        "id": boxerPrime(29),
        "types": [strength, fight],
        "levels": extreme
    },
    {
        "id": boxerPrime(30),
        "types": [cardio, fight],
        "levels": hard
    }
];

export default workouts;
