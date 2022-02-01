import InfoList from './InfoList'
import InfoObject from './InfoObject'

import workouts from '../assets/workouts.min'
import { focus, types, difficulties } from '../assets/display'

const Workout = (slug, workout) => {
    const workoutFocus = focus[workout.focus];
    const workoutTypes = types.parse(workout.type);
    const workoutDifficulty = difficulties[workout.difficulty];
    const details = [workoutFocus, workoutTypes, workoutDifficulty].join(', ');
    return ( <InfoObject id={slug} key={slug} type='workout' title={workout.name} details={details} />);
};

const Workouts = () => {
    return <InfoList objects={workouts} displayComponent={Workout} />;
};

export default Workouts;
