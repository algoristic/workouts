import Funnel from './Funnel'
import { config } from '../assets/app.config.json'

const TrainingPlans = () => {
    return (
        <Funnel question='Nach welchem Plan möchtest du trainieren?' backTo={config.apps.start}
            category='plans' next={config.apps.plan} parameter={config.parameters.plan}>
        </Funnel>
    );
};

export default TrainingPlans;
