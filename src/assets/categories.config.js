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
            "icon": "๐",
            "color": "primary"
        },
        {
            "id": plans,
            "name": "Trainingsplan",
            "icon": "๐",
            "color": "warning"
        },
        {
            "id": "~discontinued~",
            "name": "Programme",
            "icon": "๐",
            "color": "warning",
            "hide": true
        },
        {
            "id": programs,
            "name": "Programme",
            "icon": "๏ธ๐",
            "color": "danger"
        }
    ],
    "types": [
        {
            "id": strength,
            "name": "Kraft",
            "icon": "๐๏ธโโ๏ธ",
            "color": "primary"
        },
        {
            "id": cardio,
            "name": "Ausdauer",
            "icon": "๐",
            "color": "info"
        },
        {
            "id": fight,
            "name": "Kampf",
            "icon": "๐ค",
            "color": "danger"
        },
        {
            "id": hiit,
            "name": "HIIT",
            "icon": "๐คธ",
            "color": "warning"
        },
        {
            "id": values.types.all,
            "name": "Egal",
            "icon": "๐คท",
            "color": "secondary",
            "classes": "mt-3"
        }
    ],
    "levels": [
        {
            "id": easy,
            "name": "Leicht",
            "icon": "๐ฅ",
            "color": "info",
            "subtitle": "Ein leichtes Training, das fit hรคlt und schnell erledigt ist."
        },
        {
            "id": normal,
            "name": "Normal",
            "icon": "๐ฅ",
            "color": "success",
            "subtitle": "Ein normales Training, das zu schaffen sein sollte."
        },
        {
            "id": hard,
            "name": "Schwer",
            "icon": "๐ฅ",
            "color": "warning",
            "subtitle": "Anspruchsvolles Training, das auch mal etwas lรคnger dauert."
        },
        {
            "id": extreme,
            "name": "Extrem",
            "icon": "๐",
            "color": "danger",
            "subtitle": "Training an der รคuรersten Belastungsgrenze und darรผber hinaus!"
        },
        {
            "id": values.levels.all,
            "name": "Egal",
            "icon": "๐คท",
            "color": "secondary"
        }
    ],
    "plans": [
        {
            "id": "extreme-fit",
            "name": "Extreme Fit",
            "icon": "๐ฅ",
            "color": "danger",
            "subtitle": "Generelle Fitness und Abwechslung"
        },
        {
            "id": "guardian",
            "name": "Guardian",
            "icon": "๐ก",
            "color": "primary",
            "subtitle": "Generelle Fitness"
        },
        {
            "id": "assassin",
            "name": "Assassin",
            "icon": "๐คบ",
            "color": "warning",
            "subtitle": "Abnehmen und Definition"
        },
        {
            "id": "amazon",
            "name": "Amazon",
            "icon": "๐คธโโ๏ธ",
            "color": "info",
            "subtitle": "Generelle Fitness"
        },
        {
            "id": "fighter",
            "name": "Fighter",
            "icon": "๐คผ",
            "color": "warning",
            "subtitle": "Abnehmen und Definition"
        },
        {
            "id": "ninja",
            "name": "Ninja",
            "icon": "๐ฅท",
            "color": "primary",
            "subtitle": "Abnehmen und Definition"
        },
        {
            "id": "knight",
            "name": "Knight",
            "icon": " ๐๏ธโโ๏ธ",
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
            "subtitle": "Martials Arts Trainingsprogramm fรผr Definition"
        },
        {
            "id": "spartan-trials",
            "name": "Spartan Trials",
            "color": "success",
            "subtitle": "Kรถrpergewichtstraining fรผr Kraft und Definition"
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
            "subtitle": "Martials Arts Trainingsprogramm fรผr hohe Performance"
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
            "subtitle": "Kรถrpergewichtstraining fรผr Kraft und Wiederstandsfรคhigkeit"
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
            "subtitle": "Functional Fitness fรผr hohe Performance"
        },
        {
            "id": "avatar-program",
            "name": "Avatar Upgrade",
            "color": "danger",
            "subtitle": "Kรถrpergewichtstraining fรผr Kraft und Kampf"
        },
        {
            "id": "boxer-prime",
            "name": "Boxer Prime",
            "color": "danger",
            "subtitle": "Kraft, Definition und Koordination fรผr Boxer"
        }
    ]
};

export default categories;
