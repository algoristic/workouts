import Header from './Header'
import ParameterCollector from '../service/parameterCollector'
import ParameterService from '../service/parameterService'
import { config } from '../assets/app.config.json'
import { plans } from '../assets/plans.json'
import { decode } from '../service/encodingService'

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
}

const Workout = () => {
    const buttonClasses = `
        ${ config.buttonClasses }
        ${ config.buttonFontSize }
        ${ config.buttonFontWeight }
        ${ config.buttonPadding }`;
    //build path for workout instructions image
    const workout = new ParameterService('s').value();
    const plan = new ParameterService('plan').value();
    const step = new ParameterService('step').value();
    const decoded = decode(workout);
    const path = getPath(decoded);

    //build path for next
    let app = 'start'
    let nextParams = [];
    let additional = '';
    if(plan) {
        app = 'level';
        nextParams = config.allPlanParams;
        const maxSteps = plans[plan].length;
        let nextStep = (1 + parseInt(step));
        if(nextStep > (maxSteps - 1)) {
            nextStep = 0;
        }
        additional = `&step=${nextStep}`;
    }
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
                <a className={`
                    ${ buttonClasses }
                    btn-success mt-3`} href={ nextPath }>
                    ✅ Fertig</a>
                <a className={`
                    ${ buttonClasses }
                    btn-primary my-3`} href={ rerollPath }>
                    🔄 Nochmal
                </a>
                <a className={`
                    ${ buttonClasses }
                    btn-secondary mb-3`} href='?app=start'>
                    ♻️ Anderer Modus?
                </a>

            </div>
        </div>
    );
};

export default Workout;
