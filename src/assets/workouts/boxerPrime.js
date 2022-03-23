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
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(3),
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(4),
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(5),
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(6),
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(7),
        "types": none,
        "levels": none
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
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(11),
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(12),
        "types": [strength, fight],
        "levels": normal
    },
    {
        "id": boxerPrime(13),
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(14),
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(15),
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(16),
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(17),
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(18),
        "types": [strength, fight],
        "levels": normal
    },
    {
        "id": boxerPrime(19),
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(20),
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(21),
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(22),
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(23),
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(24),
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(25),
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(26),
        "types": [strength, fight],
        "levels": normal
    },
    {
        "id": boxerPrime(27),
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(28),
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(29),
        "types": none,
        "levels": none
    },
    {
        "id": boxerPrime(30),
        "types": none,
        "levels": none
    }
];

export default workouts;
