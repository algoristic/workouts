import Header from './Header'
import Back from './Back'
import Image from './Image'
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
                    let href = `?${config.parameters.app}=${config.apps.workout}`;
                    href += `&${config.parameters.program}=${program}`;
                    href += `&${config.parameters.step}=${day}`;
                    href += `&${config.parameters.workout}=${workout}`;
                    return (
                        <div className='col-12 col-md-6 col-lg-4 col-xxl-3 mb-3 text-center'>
                            <a href={ href }>
                                <Image url={`/.media/programs/${program}/days/day-${day}.jpg`} alt={`${name} - Tag ${day}`} />
                            </a>
                        </div>
                    );
                })
            }
            </div>
            <div className='d-grid'>
                <Back to={`?${config.parameters.app}=${config.apps.programs}`} />
            </div>
        </>
    );
};

export default ProgramDays;
