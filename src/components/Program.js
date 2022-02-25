import BackTo from './BackTo'
import PageControl from './PageControl'
import Text from './Text'

import ParameterService from '../service/parameterService'

import programs from '../assets/programs.min'

const Program = () => {
    const keyParameter = new ParameterService('key');
    const key = keyParameter.value();
    const program = programs[key];
    document.title = program.name;

    const days = [];
    for(let i = 1; i <= program.days; i++) {
        days.push(i);
    }

    return (
        <div className='program-wrapper'>
            <PageControl />
            <BackTo app='programs' />
            <div className='container-fluid'>
                <Text id={key} program />
                <nav>
                    <ol className='breadcrumb'>
                        {
                            days.map(day => (
                                <li className='breadcrumb-item'>
                                    <a href={`?app=day&key=${key}&day=${day}`}>{ day }</a>
                                </li>
                            ))
                        }
                    </ol>
                </nav>
            </div>
        </div>
    );
}

export default Program;
