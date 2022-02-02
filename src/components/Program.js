import PageControl from './PageControl'

import ParameterService from '../service/parameterService'

import programs from '../assets/programs.min'

const Program = () => {
    const keyParameter = new ParameterService('key');
    const key = keyParameter.value();
    const program = programs[key];
    document.title = program.name;

    const days = [];
    for(let i=1; i<=program.days; i++) {
        days.push(i);
    }

    //TODO 'day'-App erstellen
    return (
        <div className='program-wrapper'>
            <PageControl />
            <img src={`/.media/programs/${key}/thumbnail.jpg`} />
            <pre>{ JSON.stringify(program, null, 2) }</pre>
            <div>{ days.map(day => <a href={`?app=day&key=${key}&day=${day}`}>{ day }</a>) }</div>
            <iframe style={{display: 'block', margin: 'auto'}}
                src={`/.media/programs/${key}/program.pdf`}
                type='application/pdf'
                frameBorder='0' scrolling='auto'
                height='1200px' width='720px'>
            </iframe>
        </div>
    );
}

export default Program;
