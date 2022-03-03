import Funnel from './Funnel'

const Level = () => {
    return (
        <Funnel question='Wie schwer soll es heute werden?'
            category='levels' next='time' parameter='level' pickup={['type']}>
        </Funnel>
    );
};

export default Level;
