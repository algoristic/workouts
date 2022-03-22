import avatar from './workouts/avatar'
import boxerPrime from './workouts/boxerPrime'
import daysOfStrength from './workouts/daysOfStrength'
import fightersCodex from './workouts/fightersCodex'
import fireheart from './workouts/fireheart'
import militaryFit from './workouts/militaryFit'
import spartanTrials from './workouts/spartanTrials'
import strengthProtocol from './workouts/strengthProtocol'

import workouts from './workouts/singleWorkouts'

const programs = [
    avatar,
    boxerPrime,
    daysOfStrength,
    fightersCodex,
    fireheart,
    militaryFit,
    spartanTrials,
    strengthProtocol
];

const all = [programs, workouts].flat();

export default all;
