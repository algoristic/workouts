import { config } from './app.config.json'

const { values:{ types:{ strength, cardio, hiit, fight, all } } } = config;

const plans = {
    "extreme-fit": [
        {
            "types": [cardio, hiit],
            "exclude": [fight]
        },
        {
            "types": [cardio, hiit]
        },
        {
            "workout": "w:pt-pyramid-workout"
        },
        {
            "types": [fight]
        }
    ],
    "guardian": [
        {
            "types": [strength]
        },
        {
            "types": [cardio]
        },
        {
            "types": [strength]
        }
    ],
    "assassin": [
        {
            "types": [cardio, hiit],
            "exclude": fight
        },
        {
            "types": [fight]
        },
        {
            "types": [cardio, hiit],
            "exclude": fight
        },
        {
            "types": [cardio, hiit]
        }
    ],
    "amazon": [
        {
            "types": [strength]
        },
        {
            "types": [cardio]
        }
    ],
    "fighter": [
        {
            "types": [fight]
        },
        {
            "types": [hiit]
        },
        {
            "types": [strength]
        },
        {
            "types": [fight]
        }
    ],
    "ninja": [
        {
            "types": [cardio]
        },
        {
            "types": [cardio]
        },
        {
            "types": [cardio, fight]
        }
    ],
    "knight": [
        {
            "types": [strength]
        }
    ]
};

export default plans;
