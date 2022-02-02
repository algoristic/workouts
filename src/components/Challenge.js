import ParameterService from '../service/parameterService'

import challenges from '../assets/challenges.min'

const Challenge = () => {
    const keyParameter = new ParameterService('key');
    const key = keyParameter.value();
    const challenge = challenges[key];
    document.title = challenge.name;
    return (
        <div className='challenge-wrapper'>
            <img src={`/.media/challenges/${key}/thumbnail.jpg`} />
            <pre>{ JSON.stringify(challenge, null, 2) }</pre>
            <iframe style={{display: 'block', margin: 'auto'}}
                src={`/.media/challenges/${key}/challenge.pdf`}
                type='application/pdf'
                frameBorder='0' scrolling='auto'
                height='1200px' width='720px'>
            </iframe>
        </div>
    );
}

export default Challenge;
