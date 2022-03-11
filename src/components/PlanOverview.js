import Header from './Header'
import Back from './Back'
import Button from './Button'
import ParameterService from '../service/parameterService'
import { getTypeString } from '../service/typeLevelService'
import categories from '../assets/categories.config'
import plans from '../assets/plans.config'
import { config } from '../assets/app.config.json'

const colors = ['primary', 'success', 'warning', 'danger', 'info'];

const PlanOverview = () => {
    const plan = new ParameterService(config.parameters.plan).value();
    const planData = categories.plans;
    const name = planData.filter(_p => _p.id === plan)[0].name;
    let increment = -1;
    const typesArray = [];
    return (
        <>
            <Header>{name}</Header>
            <div className='d-grid'>
                {
                    plans[plan].map(day => {
                        increment++;
                        let href = `?${config.parameters.app}=${config.apps.levelSelect}`;
                        href += `&${config.parameters.plan}=${plan}`;
                        href += `&${config.parameters.step}=${increment}`;

                        let colorIndex;
                        const typeString = getTypeString(day.types);
                        if(typesArray.includes(typeString)) {
                            colorIndex = typesArray.indexOf(typeString);
                        } else {
                            typesArray.push(typeString);
                            colorIndex = (typesArray.length - 1);
                        }
                        const color = colors[colorIndex];

                        let text = `Tag ${increment + 1}: ${typeString}`;
                        if(config.displayExcluded && day.exclude) {
                            text += ` (ohne ${getTypeString(day.exclude, 'und')})`;
                        }
                        return (
                            <Button href={ href } color={ color } classes='my-3' text={ text } />
                        );
                    })
                }
                <hr />
                <Back to={ `?${config.parameters.app}=${config.apps.plans}` } classes='mt-3' />
            </div>
        </>
    );
};

export default PlanOverview;
