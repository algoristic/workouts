import Funnel from './Funnel'

const Start = () => {
    return (
        <Funnel question='Was möchtest du heute tun?'
            category='types' next='level' parameter='type'>
        </Funnel>
    );
};

export default Start;
