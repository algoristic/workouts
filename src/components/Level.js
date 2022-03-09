import Funnel from './Funnel'
import { config } from '../assets/app.config.json'

const Level = () => {
    return (
        <Funnel question='Wie schwer soll es heute werden?'
            category='levels' next={config.apps.forwarding} parameter={config.parameters.level}>
        </Funnel>
    );
};

export default Level;
