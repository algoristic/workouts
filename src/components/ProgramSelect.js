import Funnel from './Funnel'

const ProgramSelect = () => {
    return (
        <Funnel question='Welches Programm interessiert dich?'
            category='programs' next='days' parameter='program'>
        </Funnel>
    );
};

export default ProgramSelect;
