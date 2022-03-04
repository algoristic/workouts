import ParameterCollector from '../service/parameterCollector'
import ParameterService from '../service/parameterService'
import WorkoutService from '../service/workoutService'
import { config } from '../assets/app.config.json'
import { plans } from '../assets/plans.json'

const WorkoutSelect = () => {
    const collector = new ParameterCollector(config.allWorkoutParams);
    let type = new ParameterService('type').value();
    const level = new ParameterService('level').value(); // should be set anyway

    const plan = new ParameterService('plan').value();
    const stepService = new ParameterService('step');
    let step = stepService.value()
    if(plan) {
        if(!step) {
            step = 0;
            stepService.value(0);
        }
        type = plans[plan][step].types;
    }

    console.log(type);
    console.log(level);
    let next = '?app=workout' + collector.getSearchString();
    const workout = new WorkoutService(type, level).getWorkout();
    next += `&s=${workout}`;
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
