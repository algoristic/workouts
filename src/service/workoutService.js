import { encode } from './encodingService'
import all from '../assets/workouts.json'

const filter = (value, property) => {
    return {
        apply: (list) => {
            if(value === 'all') {
                return list;
            }
            return list.filter((element) => {
                const toCheck = element[property];
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
        this.filters.push(filter(types, 'types'));
        this.filters.push(filter(level, 'level'));
    }

    getWorkout() {
        let list = all.workouts;
        this.filters.forEach((filter) => {
            list = filter.apply(list);
        });
        const chosen = list[Math.floor(Math.random() * list.length)];
        return encode(chosen.id);
    }
}

export default WorkoutService;
