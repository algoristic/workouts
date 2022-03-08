import Funnel from './Funnel'
import { config } from '../assets/app.config.json'

const Start = () => {
    return (
        <Funnel question='Was möchtest du heute machen?' start
            category='start' parameter={config.parameters.app}>
        </Funnel>
    );
};

export default Start;
