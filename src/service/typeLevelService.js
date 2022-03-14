import categories from '../assets/categories.config'
import workouts from '../assets/workouts.config'

const getTypeString = (type, joiner) => {
    const { types } = categories;
    return types.filter((_t) => {
            let res = false;
            if(Array.isArray(type)) {
                for(let i=0; i<type.length; i++) {
                    let _type = type[i];
                    if(_t.id === _type) {
                        res = true;
                        break;
                    }
                }
            } else {
                res = (_t.id === type)
            }
            return res;
        })
        .map((_t) => _t.name)
        .join(` ${joiner ? joiner : 'oder'} `);
};

const getLevelString = (level) => {
    const { levels } = categories;
    return levels.filter((_l) => _l.id === level)[0].name;
};

const getPlanString = (id) => {
    return categories.plans.filter(plan => plan.id === id)[0].name;
};

const getWorkoutString = (id) => {
    let filtered = workouts.filter(workout => workout.id === id);
    if(filtered.length > 0) {
        return filtered[0].name;
    } else {
        return '';
    }
};

export {
    getTypeString,
    getLevelString,
    getPlanString,
    getWorkoutString
}
