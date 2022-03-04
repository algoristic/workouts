import Funnel from './Funnel'

const Select = () => {
    return (
        <Funnel question='Wie möchtest du heute trainieren?'
            category='types' next='level' parameter='type'>
        </Funnel>
    );
};

export default Select;
