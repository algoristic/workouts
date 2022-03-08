import Funnel from './Funnel'
import { config } from '../assets/app.config.json'

const TrainingPlan = () => {
    return (
        <Funnel question='Nach welchem Plan möchtest du trainieren?'
            category='plans' next={config.apps.levelSelect} parameter={config.parameters.plan}>
        </Funnel>
    );
};

export default TrainingPlan;
