import Funnel from './Funnel'
import { config } from '../assets/app.config.json'

const ProgramSelect = () => {
    return (
        <Funnel question='Welches Programm interessiert dich?'
            category='programs' next={config.apps.programDays} parameter={config.parameters.program}>
        </Funnel>
    );
};

export default ProgramSelect;
