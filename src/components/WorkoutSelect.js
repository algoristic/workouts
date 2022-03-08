import ParameterCollector from '../service/parameterCollector'
import ParameterService from '../service/parameterService'
import WorkoutService from '../service/workoutService'
import { encode } from '../service/encodingService'
import { config } from '../assets/app.config.json'
import plans from '../assets/plans.config'

const getWorkoutByPlan = (plan) => {
    const stepService = new ParameterService('step');
    let step = stepService.value();
    if(!step) {
        step = 0;
        stepService.value(step);
    }
    const type = plans[plan][step].types;
    const level = new ParameterService('level').value();
    return new WorkoutService(type, level).getWorkout();
};

const getWorkoutByProgram = (program) => {
    const stepService = new ParameterService('step');
    let step = stepService.value();
    if(!step) {
        step = 1;
        stepService.value(step);
    }
    return encode(`p:${program}:${step}`);
};

const getWorkoutBySelection = () => {
    const type = new ParameterService('type').value();
    const level = new ParameterService('level').value();
    return new WorkoutService(type, level).getWorkout();
};

const WorkoutSelect = () => {
    const collector = new ParameterCollector(config.allWorkoutParams);
    const plan = new ParameterService('plan').value();
    const program = new ParameterService('program').value();
    let workout = undefined;
    if(plan) {
        workout = getWorkoutByPlan(plan);
    } else if(program) {
        workout = getWorkoutByProgram(program);
    } else {
        workout = getWorkoutBySelection();
    }
    let next = `?app=workout${collector.getSearchString()}&s=${workout}`;
    setTimeout(() => {
        window.location.href = next;
    }, config.forwardTimeout);
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div className='text-center'>
                <div className='h4 mb-5'>🚀 Bitte warten...</div>
                <div className='spinner-grow text-primary'></div>
            </div>
        </div>
    );
};

export default WorkoutSelect;
