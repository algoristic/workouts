import Funnel from './Funnel'

const Level = () => {
    return (
        <Funnel question='Wie schwer soll es heute werden?'
            category='levels' next='forward' parameter='level' pickup={['type', 'plan']}>
        </Funnel>
    );
};

export default Level;
