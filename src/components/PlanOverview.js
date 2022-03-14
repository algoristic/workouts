import Header from './Header'
import Back from './Back'
import Button from './Button'
import ParameterService from '../service/parameterService'
import { getTypeString, getWorkoutString } from '../service/typeLevelService'
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
                        const { types, workout, exclude } = day;
                        let description = undefined;
                        let href = undefined;
                        if(types) {
                            href = `?${config.parameters.app}=${config.apps.levelSelect}`;
                            description = getTypeString(types);
                        } else if (workout) {
                            href = `?${config.parameters.app}=${config.apps.forwarding}`;
                            description = getWorkoutString(workout);
                        }
                        href += `&${config.parameters.plan}=${plan}`;
                        href += `&${config.parameters.step}=${increment}`;

                        let colorIndex;
                        if(typesArray.includes(description)) {
                            colorIndex = typesArray.indexOf(description);
                        } else {
                            typesArray.push(description);
                            colorIndex = (typesArray.length - 1);
                        }
                        const color = colors[colorIndex];

                        let text = `Tag ${increment + 1}: ${description}`;
                        if(config.displayExcluded && exclude) {
                            text += ` (ohne ${getTypeString(exclude, 'und')})`;
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
