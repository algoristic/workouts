import Funnel from './Funnel'

const TrainingPlan = () => {
    return (
        <Funnel question='Nach welchem Plan möchtest du trainieren?'
            category='plans' next='level' parameter='plan'>
        </Funnel>
    );
};

export default TrainingPlan;
