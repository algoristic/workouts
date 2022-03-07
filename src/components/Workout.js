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

const getPlanControl = (plan, dateTime) => {
    const level = new ParameterService('level').value();
    let step = new ParameterService('step').value();
    let type = plans[plan][step].types;
    step = parseInt(step);
    const maxSteps = plans[plan].length;
    let nextStep = (1 + step);
    if(nextStep > (maxSteps - 1)) {
        nextStep = 0;
    }
    const name = categories.plans.filter(_p => _p.id === plan)[0].name;
    const rerollCollector = new ParameterCollector(config.allWorkoutParams);
    const rerollPath = '?app=forward' + rerollCollector.getSearchString();
    return {
        next: `?app=finish&plan=${plan}&step=${nextStep}&t=${dateTime.getNow()}`,
        reroll: rerollPath,
        subtitle: (
            <><i>{ name }</i> an Tag { (step + 1) } <br/> Typ <i>{ getTypeString(type) }</i> und Schwierigkeit <i>{ getLevelString(level) }</i></>
        )
    };
};

const getProgramControl = (program, dateTime) => {
    let step = new ParameterService('step').value();
    step = parseInt(step);
    const maxSteps = programs[program];
    let nextStep = (1 + step);
    if(nextStep > maxSteps) {
        nextStep = 1;
    }
    const programData = categories.programs;
    const name = programData.filter((_p) => _p.id === program)[0].name;
    return {
        next: `?app=finish&program=${program}&step=${nextStep}&t=${dateTime.getNow()}`,
        subtitle: (
            <><i>{ name }</i> an Tag { step }</>
        )
    };
};

const getSelectionControl = (dateTime) => {
    const level = new ParameterService('level').value();
    let type = new ParameterService('type').value();
    const rerollCollector = new ParameterCollector(config.allWorkoutParams);
    const rerollPath = '?app=forward' + rerollCollector.getSearchString();
    return {
        next: `?app=finish&t=${dateTime.getNow()}`,
        reroll: rerollPath,
        subtitle: (
            <>Typ <i>{ getTypeString(type) }</i> und Schwierigkeit <i>{ getLevelString(level) }</i></>
        )
    };
};

const Workout = () => {
    const dateTime = new DateTimeService();
    //build path for workout instructions image
    const workout = new ParameterService('s').value();
    const decoded = decode(workout);
    const path = getPath(decoded);

    const plan = new ParameterService('plan').value();
    const program = new ParameterService('program').value();
    let control = undefined;
    if(plan) {
        control = getPlanControl(plan, dateTime);
    } else if(program) {
        control = getProgramControl(program, dateTime);
    } else {
        control = getSelectionControl(dateTime);
    }

    return (
        <div className='workout-wrapper d-flex flex-column align-items-center'>
            <div className='d-flex flex-column' style={{ maxWidth: '576px' }}>
                <Header>Dein Workout:</Header>
                <Subtitle text={control.subtitle} />
                <img className='img-fluid img-thumbnail' alt='Workout' src={path} />
                <Button href={control.next} color='success' icon='🏁' text='Fertig' classes='my-3' />
                {
                    !program && (
                        <Button href={control.reroll} color='primary' classes='mb-3' icon='🔄' text='Anderes Workout' />
                    )
                }
            </div>
        </div>
    );
};

export default Workout;
