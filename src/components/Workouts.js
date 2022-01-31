import InfoList from './InfoList'
import InfoObject from './InfoObject'

import workouts from '../assets/workouts.min'
import { focus, types } from '../assets/display'

const parseTypes = (typeString) => {
    if(typeString === undefined) {
        return [];
    }
    let arr = typeString.split(",");
    arr = arr.map((type) => type.trim());
    arr = arr.map((type) => types[type])
    return arr;
};

const Workout = (slug, workout) => {
    const workoutTypes = parseTypes(workout.type);
    return ( <InfoObject key={slug} title={workout.name} details={focus[workout.focus] + ", " + workoutTypes} />);
};

const Workouts = () => {
    return <InfoList objects={workouts} displayComponent={Workout} />;
};

export default Workouts;
