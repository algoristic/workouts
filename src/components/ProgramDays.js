import Header from './Header'
import ModeSelect from './ModeSelect'
import Subtitle from './Subtitle'
import ParameterService from '../service/parameterService'
import { encode } from '../service/encodingService'
import categories from '../assets/categories.config'
import programs from '../assets/programs.config'
import { config } from '../assets/app.config.json'

const ProgramDays = () => {
    const program = new ParameterService(config.parameters.program).value();
    const programData = categories.programs;
    const name = programData.filter((_p) => _p.id === program)[0].name;
    const days = programs[program];
    return (
        <>
            <Header>{ name }</Header>
            <Subtitle text={(<>Wähle einen Starttag<br/>...oder schau dich einfach um🙂</>)} fontSize='5' />
            <div className='row'>
            {
                [...Array(days).keys()].map(i => {
                    const day = (i + 1);
                    const workout = encode(`p:${program}:${day}`);
                    return (
                        <div className='col-12 col-md-6 col-lg-4 col-xxl-3 mb-3'>
                            <a href={`?${config.parameters.app}=${config.apps.workout}&${config.parameters.program}=${program}&${config.parameters.step}=${day}&${config.parameters.workout}=${workout}`}>
                                <img src={`/.media/programs/${program}/days/day-${day}.jpg`}
                                    alt={`${name} - Tag ${day}`}
                                    className='img-fluid img-thumbnail'>
                                </img>
                            </a>
                        </div>
                    );
                })
            }
            </div>
            <div className='d-grid'>
                <ModeSelect />
            </div>
        </>
    );
};

export default ProgramDays;
