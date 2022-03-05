import Header from './Header'
import DateTimeService from '../service/dateTimeService'
import ParameterCollector from '../service/parameterCollector'
import ParameterService from '../service/parameterService'
import { config } from '../assets/app.config.json'

const Finish = () => {
    const buttonClasses = `
        ${ config.buttonClasses }
        ${ config.buttonFontSize }
        ${ config.buttonFontWeight }
        ${ config.buttonPadding }`;
    const dateTime = new DateTimeService();
    const timeParam = new ParameterService('t').value();
    const time = dateTime.getFromString(timeParam);
    const now = dateTime.getNow();
    const today = dateTime.getFromString(now);
    const forward = (today > time);
    const plan = new ParameterService('plan').value();
    const program = new ParameterService('program').value();
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
    return (
        !forward && (
            <div className='finish-wrapper'>
                <Header>🎉 Herzlichen Glückwunsch!</Header>
                <p className='text-center fs-4'>
                    Du bist für heute fertig! Morgen geht es hier weiter 💪
                </p>
                <div className='d-grid mt-5 mb-3'>
                    <button type='button' className={`${ buttonClasses } btn-primary mb-3`} onClick={() => window.location.reload(true)}>
                        <span className='btn-icon'>🔄</span>
                        <span className='btn-text ms-3'>Neu laden</span>
                    </button>
                    <a className={`${ buttonClasses } btn-danger mb-3`} href={ next }>
                        <span className='btn-icon'>🔥</span>
                        <span className='btn-text ms-3'>Jetzt schon weiter!</span>
                    </a>
                    <a className={`${ buttonClasses } btn-secondary`} href='?app=start'>
                        <span className='btn-icon'>❌</span>
                        <span className='btn-text ms-3'>Anderer Modus</span>
                    </a>
                </div>
            </div>
        )
    );
}

export default Finish;
