import Funnel from './Funnel'
import { config } from '../assets/app.config.json'

//old programs app, discontinued
const Programs = () => {
    return (
        <Funnel question='Nach welchem Plan möchstest du trainieren?'
            category='programs' next={config.apps.forwarding} parameter={config.parameters.program}>
        </Funnel>
    );
};

export default Programs;
