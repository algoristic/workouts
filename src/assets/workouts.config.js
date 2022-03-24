import athenasPlaybook from './workouts/athenasPlaybook'
import avatar from './workouts/avatar'
import boxerPrime from './workouts/boxerPrime'
import combatHiit from './workouts/combatHiit'
import daysOfHiitAdvanced from './workouts/daysOfHiitAdvanced'
import daysOfStrength from './workouts/daysOfStrength'
import fightersCodex from './workouts/fightersCodex'
import fireheart from './workouts/fireheart'
import militaryFit from './workouts/militaryFit'
import spartanTrials from './workouts/spartanTrials'
import strengthProtocol from './workouts/strengthProtocol'

import workouts from './workouts/singleWorkouts'

const programs = [
    athenasPlaybook,
    avatar,
    boxerPrime,
    combatHiit,
    daysOfHiitAdvanced,
    daysOfStrength,
    fightersCodex,
    fireheart,
    militaryFit,
    spartanTrials,
    strengthProtocol
];

const all = [programs, workouts].flat();

export default all;
