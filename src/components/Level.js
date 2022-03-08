import Funnel from './Funnel'
import { config } from '../assets/app.config.json'

const { parameters:{ level, type, plan } } = config;

const Level = () => {
    return (
        <Funnel question='Wie schwer soll es heute werden?'
            category='levels' next={config.apps.forwarding} parameter={level} pickup={[type, plan]}>
        </Funnel>
    );
};

export default Level;
