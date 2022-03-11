import { Component } from 'react'

import ParameterCollector from '../service/parameterCollector'
import ParameterService from '../service/parameterService'
import WorkoutService from '../service/workoutService'
import { encode } from '../service/encodingService'
import { config } from '../assets/app.config.json'
import plans from '../assets/plans.config'

const getWorkoutByPlan = (plan) => {
    const stepService = new ParameterService(config.parameters.step);
    let step = stepService.value();
    if(!step) {
        step = 0;
        stepService.value(step);
    }
    const type = plans[plan][step].types;
    const exclude = plans[plan][step].exclude;
    const level = new ParameterService(config.parameters.level).value();
    return new WorkoutService(type, level, exclude).getWorkout();
};

const getWorkoutByProgram = (program) => {
    const stepService = new ParameterService(config.parameters.step);
    let step = stepService.value();
    if(!step) {
        step = 1;
        stepService.value(step);
    }
    return encode(`p:${program}:${step}`);
};

const getWorkoutBySelection = () => {
    const type = new ParameterService(config.parameters.type).value();
    const level = new ParameterService(config.parameters.level).value();
    return new WorkoutService(type, level).getWorkout();
};

class WorkoutSelect extends Component {
    componentDidMount() {
        const collector = new ParameterCollector(config.parameters.allWorkout);
        const plan = new ParameterService(config.parameters.plan).value();
        const program = new ParameterService(config.parameters.program).value();
        let workout = undefined;
        if(plan) {
            workout = getWorkoutByPlan(plan);
        } else if(program) {
            workout = getWorkoutByProgram(program);
        } else {
            workout = getWorkoutBySelection();
        }
        let next = `?${config.parameters.app}=${config.apps.workout}`;
        next += collector.getSearchString();
        next += `&${config.parameters.workout}=${workout}`;
        setTimeout(() => {
            window.location.href = next;
        }, config.forwardTimeout);
    }

    render() {

        return (
            <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                <div className='text-center'>
                    <div className='h4 mb-5'>🚀 Bitte warten...</div>
                    <div className='spinner-grow text-primary'></div>
                </div>
            </div>
        );
    }
};

export default WorkoutSelect;
