import { encode } from './encodingService'
import workouts from '../assets/workouts.config'

import { config } from '../assets/app.config.json'

const { values } = config;

const filter = (value, property, revert) => {
    return {
        apply: (list) => {
            if(value === (values[property].all)) {
                return list;
            }
            if(Array.isArray(value)) {
                value = value[Math.floor(Math.random() * value.length)];
            }
            return list.filter((element) => {
                let toCheck = element[property];
                if(Array.isArray(toCheck)) {
                    if(Array.isArray(value)) {
                        for(let i=0; i<toCheck.length; i++) {
                            for(let k=0; k<value.length; k++) {
                                if(toCheck[i] === value[k]) {
                                    return xor(true, revert);
                                }
                            }
                        }
                        return xor(false, revert);
                    } else {
                        let res = toCheck.includes(value);
                        return xor(res, revert);
                    }
                } else {
                    if(Array.isArray(value)) {
                        let res = value.includes(toCheck);
                        return xor(res, revert);
                    } else {
                        return xor((toCheck === value), revert);
                    }
                }
            });
        }
    }
};

const ignore = (type) => {
    return {
        apply: (list) => {
            if(Array.isArray(type)) {
                type.forEach(_t => {
                    list = filter(_t, 'types', true).apply(list);
                });
                return list;
            } else {
                return filter(type, 'types', true).apply(list);
            }
        }
    };
};

const xor = (a, b) => {
    return (!a !== !b);
};

class WorkoutService {
    constructor(types, level, exclude) {
        this.filters = [];
        this.filters.push(filter(level, 'levels'));
        this.filters.push(filter(types, 'types'));
        if(exclude) {
            this.filters.push(ignore(exclude));
        }
    }

    getWorkout() {
        let list = workouts;
        this.filters.forEach((filter) => {
            list = filter.apply(list);
        });
        const chosen = list[Math.floor(Math.random() * list.length)];
        return encode(chosen.id);
    }
}

export default WorkoutService;
