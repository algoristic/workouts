import Funnel from './Funnel'

const Programs = () => {
    return (
        <Funnel question='Nach welchem Plan möchstest du trainieren?'
            category='programs' next='forward' parameter='program'>
        </Funnel>
    );
};

export default Programs;
