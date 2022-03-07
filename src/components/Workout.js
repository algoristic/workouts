import Button from './Button'
import Header from './Header'
import Subtitle from './Subtitle'
import DateTimeService from '../service/dateTimeService'
import ParameterCollector from '../service/parameterCollector'
import ParameterService from '../service/parameterService'
import { categories } from '../assets/categories.json'
import { config } from '../assets/app.config.json'
import { plans } from '../assets/plans.json'
import { programs } from '../assets/programs.json'
import { decode } from '../service/encodingService'
import { getTypeString, getLevelString } from '../service/typeLevelService'

const getPath = (string) => {
    const arr = string.split(':');
    let path = '';
    switch(arr[0]) {
        case 'p':
            path = `/.media/programs/${arr[1]}/days/day-${arr[2]}.jpg`
            break;
        case 'w':
            path = `/.media/workouts/${arr[1]}/instructions.jpg`;
            break;
        default:
            break;
    }
    return path;
};

const Workout = () => {
    const dateTime = new DateTimeService();
    //build path for workout instructions image
    const workout = new ParameterService('s').value();
    const plan = new ParameterService('plan').value();
    const program = new ParameterService('program').value();
    let step = new ParameterService('step').value();
    const decoded = decode(workout);
    const path = getPath(decoded);
    const level = new ParameterService('level').value();
    let type = new ParameterService('type').value();

    //build path for next
    let app = 'finish'
    let nextParams = [];
    let additional = '';
    step = parseInt(step);
    if(plan) {
        nextParams = ['plan'];
        const maxSteps = plans[plan].length;
        let nextStep = (1 + step);
        if(nextStep > (maxSteps - 1)) {
            nextStep = 0;
        }
        additional = `&step=${nextStep}`;
        type = plans[plan][step].types;
    } else if(program) {
        nextParams = ['program'];
        const maxSteps = programs[program];
        let nextStep = (1 + step);
        if(nextStep > maxSteps) {
            nextStep = 1;
        }
        additional = `&step=${nextStep}`;
    }
    additional += `&t=${dateTime.getNow()}`;
    const paramSearchString = new ParameterCollector(nextParams).getSearchString();
    const nextPath = `?app=${app}` + paramSearchString + additional;

    //build path for reroll
    const rerollCollector = new ParameterCollector(config.allWorkoutParams);
    const rerollPath = '?app=forward' + rerollCollector.getSearchString();
    return (
        <div className='workout-wrapper d-flex flex-column align-items-center'>
            <div className='d-flex flex-column' style={{ maxWidth: '576px' }}>
                <Header>Dein Workout:</Header>
                <img className='img-fluid img-thumbnail' alt='Workout' src={path} />
                <Button href={nextPath} color='success' icon='🏁' text='Fertig' classes='my-3' />
                {
                    !program && (
                        <Button href={rerollPath} color='primary' classes='mb-3' icon='🔄' text='Anderes Workout' />
                    )
                }
                {
                    !program && (
                        <Subtitle text={`Typ '${getTypeString(type)}' und Level '${getLevelString(level)}'`} />
                    )
                }
            </div>
        </div>
    );
};

export default Workout;
