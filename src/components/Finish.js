import Button from './Button'
import Header from './Header'
import Subtitle from './Subtitle'
import DateTimeService from '../service/dateTimeService'
import ParameterCollector from '../service/parameterCollector'
import ParameterService from '../service/parameterService'
import categories from '../assets/categories.config'
import { config } from '../assets/app.config.json'
import plans from '../assets/plans.config'
import { getTypeString } from '../service/typeLevelService'

const getNextPlan = (plan) => {
    const collector = new ParameterCollector(config.allPlanParams);
    let step = new ParameterService(config.parameters.step).value();
    step = parseInt(step);
    const name = categories.plans.filter(_p => _p.id === plan)[0].name;
    const type = plans[plan][step].types;
    return {
        href: `?${config.parameters.app}=${config.apps.levelSelect}${collector.getSearchString()}`,
        text: (
            <><i>{ name }</i> mit Tag { (step + 1) }: <i>{ getTypeString(type) }</i></>
        )
    };
};

const getNextProgram = (program) => {
    const collector = new ParameterCollector(config.allProgramParams);
    let step = new ParameterService(config.parameters.step).value();
    step = parseInt(step);
    const { programs } = categories;
    return {
        href: `?${config.parameters.app}=${config.apps.forwarding}${collector.getSearchString()}`,
        text: (
            <><i>{ programs.filter((_p) => _p.id === program)[0].name }</i> mit Trainingstag Nr. { step }</>
        )
    };
};

const getNextSelection = () => {
    return {
        href: `?${config.parameters.app}=${config.apps.start}`,
        text: 'Weiter zur Modusauswahl'
    };
}

const Finish = () => {
    const dateTime = new DateTimeService();
    const timeParam = new ParameterService(config.parameters.time).value();
    const time = dateTime.getFromString(timeParam);
    const now = dateTime.getNow();
    const today = dateTime.getFromString(now);
    const forward = (today > time);

    const plan = new ParameterService(config.parameters.plan).value();
    const program = new ParameterService(config.parameters.program).value();
    let next = undefined;
    if(plan) {
        next = getNextPlan(plan);
    } else if(program) {
        next = getNextProgram(program);
    } else {
        next = getNextSelection();
    }

    if(forward) {
        window.location.href = next.href;
    }
    return (
        !forward && (
            <div className='finish-wrapper'>
                <Header>🎉 Herzlichen Glückwunsch!</Header>
                <p className='text-center fs-4'>
                    Du bist für heute fertig! Morgen geht es hier weiter 💪
                </p>
                <Subtitle text={<>Als nächstes → { next.text }</>}  />
                <div className='d-grid mt-5 mb-3'>
                    <Button color='primary' classes='mb-3' icon='🔄' text='Neu laden'
                        onClick={() => window.location.reload(true)}>
                    </Button>
                    <Button color='danger' classes='mb-3' href={next.href} icon='🔥' text='Jetzt schon weiter!' />
                </div>
            </div>
        )
    );
}

export default Finish;
