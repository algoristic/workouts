import Funnel from './Funnel'

//old programs app, discontinued
const Programs = () => {
    return (
        <Funnel question='Nach welchem Plan möchstest du trainieren?'
            category='programs' next='forward' parameter='program'>
        </Funnel>
    );
};

export default Programs;
