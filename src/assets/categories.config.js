import { config } from './app.config.json'

const { apps:{ selection, plans, programs } } = config;
const { values } = config;
const { types:{ strength, cardio, hiit, fight } } = values;
const { levels:{ easy, normal, hard, extreme } } = values;

const categories = {
    "start": [
        {
            "id": selection,
            "name": "Manuelle Auswahl",
            "icon": "👉",
            "color": "primary"
        },
        {
            "id": plans,
            "name": "Trainingsplan",
            "icon": "📋",
            "color": "warning"
        },
        {
            "id": "~discontinued~",
            "name": "Programme",
            "icon": "🏃",
            "color": "warning",
            "hide": true
        },
        {
            "id": programs,
            "name": "Programme",
            "icon": "️🏃",
            "color": "danger"
        }
    ],
    "types": [
        {
            "id": strength,
            "name": "Kraft",
            "icon": "🏋️‍♂️",
            "color": "primary"
        },
        {
            "id": cardio,
            "name": "Ausdauer",
            "icon": "🏃",
            "color": "info"
        },
        {
            "id": fight,
            "name": "Kampf",
            "icon": "🤜",
            "color": "danger"
        },
        {
            "id": hiit,
            "name": "HIIT",
            "icon": "🤸",
            "color": "warning"
        },
        {
            "id": values.types.all,
            "name": "Egal",
            "icon": "🤷",
            "color": "secondary",
            "classes": "mt-3"
        }
    ],
    "levels": [
        {
            "id": easy,
            "name": "Leicht",
            "icon": "🥉",
            "color": "info",
            "subtitle": "Ein leichtes Training, das fit hält und schnell erledigt ist."
        },
        {
            "id": normal,
            "name": "Normal",
            "icon": "🥈",
            "color": "success",
            "subtitle": "Ein normales Training, das zu schaffen sein sollte."
        },
        {
            "id": hard,
            "name": "Schwer",
            "icon": "🥇",
            "color": "warning",
            "subtitle": "Anspruchsvolles Training, das auch mal etwas länger dauert."
        },
        {
            "id": extreme,
            "name": "Extrem",
            "icon": "🏆",
            "color": "danger",
            "subtitle": "Training an der äußersten Belastungsgrenze und darüber hinaus!"
        },
        {
            "id": values.levels.all,
            "name": "Egal",
            "icon": "🤷",
            "color": "secondary"
        }
    ],
    "plans": [
        {
            "id": "extreme-fit",
            "name": "Extreme Fit",
            "icon": "🔥",
            "color": "danger",
            "subtitle": "Generelle Fitness und Abwechslung"
        },
        {
            "id": "guardian",
            "name": "Guardian",
            "icon": "🛡",
            "color": "primary",
            "subtitle": "Generelle Fitness"
        },
        {
            "id": "assassin",
            "name": "Assassin",
            "icon": "🤺",
            "color": "warning",
            "subtitle": "Abnehmen und Definition"
        },
        {
            "id": "amazon",
            "name": "Amazon",
            "icon": "🤸‍♀️",
            "color": "info",
            "subtitle": "Generelle Fitness"
        },
        {
            "id": "fighter",
            "name": "Fighter",
            "icon": "🤼",
            "color": "warning",
            "subtitle": "Abnehmen und Definition"
        },
        {
            "id": "ninja",
            "name": "Ninja",
            "icon": "🥷",
            "color": "primary",
            "subtitle": "Abnehmen und Definition"
        },
        {
            "id": "knight",
            "name": "Knight",
            "icon": " 🏋️‍♂️",
            "color": "info",
            "subtitle": "Krafttraining"
        }
    ],
    "programs": [
        {
            "id": "athenas-playbook",
            "name": "Athenas Playbook",
            "color": "success",
            "subtitle": "Gewichtsreduktion und Definition mit Kampfelementen"
        },
        {
            "id": "fireheart-program",
            "name": "FireHeart Program",
            "color": "success",
            "subtitle": "Martials Arts Trainingsprogramm für Definition"
        },
        {
            "id": "spartan-trials",
            "name": "Spartan Trials",
            "color": "success",
            "subtitle": "Körpergewichtstraining für Kraft und Definition"
        },
        {
            "id": "combat-hiit",
            "name": "Combat HIIT",
            "color": "success",
            "subtitle": "HIIT Training mit Kampfelementen"
        },
        {
            "id": "fighters-codex",
            "name": "Fighter's Codex",
            "color": "success",
            "subtitle": "Martials Arts Trainingsprogramm für hohe Performance"
        },
        {
            "id": "30-days-of-hiit-advanced",
            "name": "30 Days of HIIT Advanced",
            "color": "warning",
            "subtitle": "30 Tage HIIT mit Fokus auf Gewichtsreduktion"
        },
        {
            "id": "30-days-of-strength",
            "name": "30 Days of Strength",
            "color": "warning",
            "subtitle": "Körpergewichtstraining für Kraft und Wiederstandsfähigkeit"
        },
        {
            "id": "strength-protocol",
            "name": "Strength Protocol",
            "color": "warning",
            "subtitle": "Krafttraining mit Calisthenics"
        },
        {
            "id": "military-fit",
            "name": "Military Fit",
            "color": "danger",
            "subtitle": "Functional Fitness für hohe Performance"
        },
        {
            "id": "avatar-program",
            "name": "Avatar Upgrade",
            "color": "danger",
            "subtitle": "Körpergewichtstraining für Kraft und Kampf"
        },
        {
            "id": "boxer-prime",
            "name": "Boxer Prime",
            "color": "danger",
            "subtitle": "Kraft, Definition und Koordination für Boxer"
        }
    ]
};

export default categories;
