import ParameterService from '../service/parameterService'

import workouts from '../assets/workouts.min'

const Program = () => {
    const keyParameter = new ParameterService('key');
    const key = keyParameter.value();
    const workout = workouts[key];
    document.title = workout.name;
    return (
        <div className='workout-container'>
            <img src={`/.media/workouts/${key}/thumbnail.jpg`} />
            <pre>{ JSON.stringify(workout, null, 2) }</pre>
            <img src={`/.media/workouts/${key}/instructions.jpg`} />
        </div>
    );
}

export default Program;
