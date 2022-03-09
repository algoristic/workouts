import { Component } from 'react'

import Button from './Button'
import Header from './Header'
import Subtitle from './Subtitle'
import DateTimeService from '../service/dateTimeService'
import ParameterCollector from '../service/parameterCollector'
import ParameterService from '../service/parameterService'
import categories from '../assets/categories.config'
import { config } from '../assets/app.config.json'
import plans from '../assets/plans.config'
import programs from '../assets/programs.config'
import { decode } from '../service/encodingService'
import { getTypeString, getLevelString } from '../service/typeLevelService'

const getPlanControl = (plan, dateTime) => {
    const level = new ParameterService(config.parameters.level).value();
    let step = new ParameterService(config.parameters.step).value();
    step = parseInt(step);
    let type = plans[plan][step].types;
    const maxSteps = plans[plan].length;
    let nextStep = (1 + step);
    if(nextStep > (maxSteps - 1)) {
        nextStep = 0;
    }
    const name = categories.plans.filter(_p => _p.id === plan)[0].name;
    const rerollCollector = new ParameterCollector(config.parameters.allWorkout);
    let rerollPath = `?${config.parameters.app}=${config.apps.forwarding}`;
    rerollPath += rerollCollector.getSearchString();

    let nextPath = `?${config.parameters.app}=${config.apps.finishing}`;
    nextPath += `&${config.parameters.plan}=${plan}`;
    nextPath += `&${config.parameters.step}=${nextStep}`;
    nextPath += `&${config.parameters.time}=${dateTime.getNow()}`;
    return {
        next: nextPath,
        reroll: rerollPath,
        subtitle: (
            <><i>{ name }</i> an Tag { (step + 1) } <br/> Typ <i>{ getTypeString(type) }</i> und Schwierigkeit <i>{ getLevelString(level) }</i></>
        )
    };
};

const getProgramControl = (program, dateTime) => {
    let step = new ParameterService(config.parameters.step).value();
    step = parseInt(step);
    const maxSteps = programs[program];
    let nextStep = (1 + step);
    if(nextStep > maxSteps) {
        nextStep = 1;
    }
    const programData = categories.programs;
    const name = programData.filter((_p) => _p.id === program)[0].name;

    let nextPath = `?${config.parameters.app}=${config.apps.finishing}`;
    nextPath += `&${config.parameters.program}=${program}`;
    nextPath += `&${config.parameters.step}=${nextStep}`;
    nextPath += `&${config.parameters.time}=${dateTime.getNow()}`;

    let backPath = `?${config.parameters.app}=${config.apps.programDays}`;
    backPath += `&${config.parameters.program}=${program}`;

    return {
        next: nextPath,
        back: {
            path: backPath,
            text: (<>Übersicht <i>{ name }</i></>)
        },
        subtitle: (<><i>{ name }</i> an Tag { step }</>)
    };
};

const getSelectionControl = (dateTime) => {
    const level = new ParameterService(config.parameters.level).value();
    const type = new ParameterService(config.parameters.type).value();
    const rerollCollector = new ParameterCollector(config.parameters.allWorkout);
    let rerollPath = `?${config.parameters.app}=${config.apps.forwarding}`;
    rerollPath += rerollCollector.getSearchString();

    let nextPath = `?${config.parameters.app}=${config.apps.finishing}`;
    nextPath += `&${config.parameters.time}=${dateTime.getNow()}`;

    return {
        next: nextPath,
        reroll: rerollPath,
        subtitle: (
            <>Typ <i>{ getTypeString(type) }</i> und Schwierigkeit <i>{ getLevelString(level) }</i></>
        )
    };
};

class Workout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            control: undefined,
            program: undefined,
            imageUrl: undefined
        };

        this.response = this.response.bind(this);
        this.getPath = this.getPath.bind(this);
    }

    response(e) {
        let { currentTarget:{ response } } = e;
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(response);
        this.setState({
            imageUrl: imageUrl
        });
    }

    getPath(string) {
        let url;
        const arr = string.split(':');
        const determinator = arr[0];
        const name = arr[1];
        if(determinator === 'p') {
            const step = arr[2];
            url = `/.media/programs/${name}/days/day-${step}.jpg`;
        } else { // determinator == w
            url = `/.media/workouts/${name}/instructions.jpg`;
        }
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.onload = this.response;
        xhr.send();

        return url;
    };

    componentDidMount() {
        //build path for workout instructions image
        const workout = new ParameterService(config.parameters.workout).value();
        const decoded = decode(workout);
        this.getPath(decoded);

        const dateTime = new DateTimeService();
        const plan = new ParameterService(config.parameters.plan).value();
        const program = new ParameterService(config.parameters.program).value();
        let control = undefined;
        if(plan) {
            control = getPlanControl(plan, dateTime);
        } else if(program) {
            control = getProgramControl(program, dateTime);
        } else {
            control = getSelectionControl(dateTime);
        }
        this.setState({
            program: program,
            control: control
        });
    }

    render() {
        const { control, program, imageUrl } = this.state;
        return (
            <div className='workout-wrapper d-flex flex-column align-items-center'>
                <div className='d-flex flex-column' style={{ maxWidth: '576px' }}>
                    <Header>Dein Workout:</Header>
                    {
                        control && (
                            <>
                            {
                                control.subtitle && (
                                    <Subtitle text={control.subtitle} />
                                )
                            }
                            {
                                imageUrl && (<img className='img-fluid img-thumbnail' alt='Workout' src={imageUrl} />)
                            }
                            {
                                control.next && (
                                    <Button href={control.next} color='success' icon='🏁' text='Fertig' classes='my-3' />
                                )
                            }
                            {
                                !program && (
                                    <Button href={control.reroll} color='primary' classes='mb-3' icon='🔄' text='Anderes Workout' />
                                )
                            }
                            {
                                control.back && (
                                    <Button href={control.back.path} color='primary' classes='mb-3' icon='↩' text={control.back.text} />
                                )
                            }
                            </>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Workout;
