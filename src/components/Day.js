import PageControl from './PageControl'
import DayControl from './DayControl'

import ParameterService from '../service/parameterService'

import programs from '../assets/programs.min'

const Day = () => {
    const keyParameter = new ParameterService('key');
    const dayParameter = new ParameterService('day');
    const key = keyParameter.value();
    const day = parseInt(dayParameter.value());
    const program = programs[key];
    document.title = `${program.name} - Day ${day}`;
    return (
        <div className='day-wrapper'>
            <div className='control-wrapper'>
                <PageControl />
                <DayControl id={key} program={program} day={day} />
            </div>
            <div className='day-workout-wrapper'>
                <img className='d-block mx-auto img-responsive' src={`/.media/programs/${key}/days/day-${day}.jpg`} />
            </div>
        </div>
    );
};

export default Day;
