import Funnel from './Funnel'
import { config } from '../assets/app.config.json'

const Select = () => {
    return (
        <Funnel question='Wie möchtest du heute trainieren?'
            category='types' next={config.apps.levelSelect} parameter={config.parameters.type}>
        </Funnel>
    );
};

export default Select;
