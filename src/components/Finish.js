import Button from './Button'
import Header from './Header'
import Subtitle from './Subtitle'
import DateTimeService from '../service/dateTimeService'
import ParameterCollector from '../service/parameterCollector'
import ParameterService from '../service/parameterService'
import { categories } from '../assets/categories.json'
import { config } from '../assets/app.config.json'
import { plans } from '../assets/plans.json'
import { getTypeString } from '../service/typeLevelService'

const Finish = () => {
    const dateTime = new DateTimeService();
    const timeParam = new ParameterService('t').value();
    const time = dateTime.getFromString(timeParam);
    const now = dateTime.getNow();
    const today = dateTime.getFromString(now);
    const forward = (today > time);
    const plan = new ParameterService('plan').value();
    const program = new ParameterService('program').value();
    let step = new ParameterService('step').value();
    step = parseInt(step);
    let collector = new ParameterCollector([]);
    let nextApp = 'start';
    if(plan) {
        nextApp = 'level';
        collector = new ParameterCollector(config.allPlanParams);
    } else if (program) {
        nextApp = 'forward';
        collector = new ParameterCollector(config.allProgramParams);
    }
    const next = `?app=${nextApp}${collector.getSearchString()}`;
    if(forward) {
        window.location.href = next;
    }
    let nextStep = undefined;
    if(!program && !plan) {
        nextStep = 'Weiter zur Modusauswahl';
    } else if(plan) {
        const planName = categories.plans.filter(_p => _p.id===plan)[0].name;
        const type = plans[plan][step].types;
        nextStep = `Plan '${planName}' mit Tag ${(step + 1)}: '${getTypeString(type)}'`;
    } else if(program) {
        const { programs } = categories;
        nextStep = `Programm '${programs.filter((_p) => _p.id === program)[0].name}' mit Trainingstag Nr. ${step}`;
    }
    return (
        !forward && (
            <div className='finish-wrapper'>
                <Header>🎉 Herzlichen Glückwunsch!</Header>
                <p className='text-center fs-4'>
                    Du bist für heute fertig! Morgen geht es hier weiter 💪
                </p>
                <div className='d-grid mt-5 mb-3'>
                    <Button color='primary' classes='mb-3' icon='🔄' text='Neu laden'
                        onClick={() => window.location.reload(true)}>
                    </Button>
                    <Button color='danger' classes='mb-3' href={next} icon='🔥' text='Jetzt schon weiter!' />
                    <Subtitle text={nextStep} />
                </div>
            </div>
        )
    );
}

export default Finish;
