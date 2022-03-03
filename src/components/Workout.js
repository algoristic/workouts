import PageControl from './PageControl'
import Text from './Text'

import ParameterService from '../service/parameterService'

import workouts from '../assets/workouts.min'

const Program = () => {
    const keyParameter = new ParameterService('key');
    const key = keyParameter.value();
    const workout = workouts[key];
    document.title = workout.name;
    return (
        <div className='workout-wrapper'>
            <PageControl />
            {/* <img src={`/.media/workouts/${key}/thumbnail.jpg`} /> */}
            <Text id={key} workout />
            <Text id={key} workout extracredit />
            <img className='img-responsive' src={`http://media.algoristic.com/workouts/${key}/instructions.jpg`} />
            <pre>{ JSON.stringify(workout, null, 2) }</pre>
        </div>
    );
}

export default Program;
