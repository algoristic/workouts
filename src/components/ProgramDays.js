import Header from './Header'
import ModeSelect from './ModeSelect'
import ParameterService from '../service/parameterService'
import { encode } from '../service/encodingService'
import { categories } from '../assets/categories.json'
import { programs } from '../assets/programs.json'

const ProgramDays = () => {
    const program = new ParameterService('program').value();
    const programData = categories.programs;
    const name = programData.filter((_p) => _p.id === program)[0].name;
    const days = programs[program];
    return (
        <>
            <Header>{ name }</Header>
            <div className='row'>
            {
                [...Array(days).keys()].map(i => {
                    const day = (i + 1);
                    return (
                        <div className='col-12 col-md-6 col-lg-4 col-xxl-3 mb-3'>
                            <a href={`?app=workout&s=${ encode(`p:${program}:${day}`) }`}>
                                <img src={`/.media/programs/${program}/days/day-${day}.jpg`}
                                    alt={`${ name } - Tag ${ day }`}
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
