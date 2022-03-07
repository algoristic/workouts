import Button from './Button'
import Header from './Header'
import ModeSelect from './ModeSelect'
import Subtitle from './Subtitle'
import ParameterCollector from '../service/parameterCollector'
import all from '../assets/categories.json'
import { config } from '../assets/app.config.json'

import './Funnel.css'

const Funnel = ({ question, start, category, next, parameter, pickup }) => {
    const funnel = all.categories[category];
    let parameters = '?';
    if(next) {
        parameters += `app=${next}`;
    }
    const collector = new ParameterCollector(config.allWorkoutParams);
    parameters += collector.getSearchString();
    return (
        <div className='funnel-wrapper'>
            <div className='category-wrapper'>
                <div className='d-grid'>
                    <Header>{ question }</Header>
                    <hr/>
                    <div>
                    {
                        funnel.map((category) => {
                            let forward = '';
                            if('?' !== parameters.charAt(parameters.length - 1)) {
                                forward += '&';
                            }
                            forward = (parameters + forward + `${parameter}=${category.id}`);
                            let furtherClasses = '';
                            if(category.classes) {
                                furtherClasses = ' ' + category.classes;
                            }
                            return (
                                <div className='d-grid'>
                                    <Button key={category.id} href={forward}
                                        color={category.color} classes={`my-3 ${furtherClasses}`}
                                        icon={category.icon} text={category.name}>
                                    </Button>
                                    {
                                        category.subtitle && (<Subtitle text={category.subtitle} classes='mb-5' />)
                                    }
                                </div>
                            );
                        })
                    }
                    </div>
                    <hr/>
                    {
                        !start && <ModeSelect />
                    }
                </div>
            </div>
        </div>
    );
};

export default Funnel;
