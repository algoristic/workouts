const focus = {
    "lower-body": "Lower body",
    "lower%20body": "Lower body",
    "upper-body": "Upper body",
    "upper%20body": "Upper body",
    "full-body": "Full body",
    "full%20body": "Full body",
    "abs": "ABS",
    "none": "Allround"
}

const types = {
    "strength": "Strength",
    "cardio": "Cardio",
    "combat": "Combat",
    "rpg": "RPG",
    "addons": "Addons",
    "fitness": "Fitness",
    "nutrition": "Nutrition",
    "running": "Running",
    "self-improvement": "Self improvement",
    parse: (typeString) => {
        if(typeString === undefined) {
            return [];
        }
        let arr = typeString.split(",");
        arr = arr.map((type) => type.trim());
        arr = arr.map((type) => types[type])
        return arr;
    }
}

const difficulties = {
    "1": "Light",
    "light": "Light",
    "2": "Easy",
    "easy": "Easy",
    "3": "Normal",
    "normal": "Normal",
    "4": "Hard",
    "hard": "Hard",
    "5": "Advanced",
    "advanced": "Advanced",

}

export { focus, types, difficulties };
