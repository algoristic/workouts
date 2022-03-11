import { encode } from './encodingService'
import workouts from '../assets/workouts.config'

const filter = (value, property) => {
    return {
        apply: (list) => {
            if(value === 'all') {
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
                                    return true;
                                }
                            }
                        }
                        return false;
                    } else {
                        return toCheck.includes(value);
                    }
                } else {
                    if(Array.isArray(value)) {
                        return value.includes(toCheck);
                    } else {
                        return (toCheck === value);
                    }
                }
            });
        }
    }
};

class WorkoutService {
    constructor(types, level) {
        this.filters = [];
        this.filters.push(filter(level, 'level'));
        this.filters.push(filter(types, 'types'));
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
