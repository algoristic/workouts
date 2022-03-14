import { config } from './app.config.json'

const { values } = config;
const { types:{ strength, cardio, hiit, fight, all } } = values;
const { levels:{ easy, normal, hard, extreme } } = values;

const workouts = [
    {
        "id": "p:military-fit:1",
        "types": strength,
        "level": [easy, normal]
    },
    {
        "id": "p:military-fit:2",
        "types": strength,
        "level": hard
    },
    {
        "id": "p:military-fit:3",
        "types": strength,
        "level": extreme
    },
    {
        "id": "p:military-fit:4",
        "types": cardio,
        "level": [easy, normal]
    },
    {
        "id": "p:military-fit:4",
        "types": [cardio, fight],
        "level": [easy, normal]
    },
    {
        "id": "p:military-fit:5",
        "types": cardio,
        "level": hard
    },
    {
        "id": "p:military-fit:6",
        "types": cardio,
        "level": extreme
    },
    {
        "id": "p:military-fit:7",
        "types": fight,
        "level": [easy, normal]
    },
    {
        "id": "p:military-fit:8",
        "types": fight,
        "level": hard
    },
    {
        "id": "p:military-fit:9",
        "types": fight,
        "level": extreme
    },
    {
        "id": "p:military-fit:10",
        "types": [hiit, fight],
        "level": [easy, normal]
    },
    {
        "id": "p:military-fit:10",
        "types": hiit,
        "level": [easy, normal]
    },
    {
        "id": "p:military-fit:11",
        "types": hiit,
        "level": hard
    },
    {
        "id": "p:military-fit:12",
        "types": hiit,
        "level": extreme
    },
    {
        "id": "w:pt-pyramid-workout",
        "name": "PT Pyramid",
        "types": strength,
        "level": [normal, hard]
    }
];

export default workouts;
