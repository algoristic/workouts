import Header from './Header'
import ModeSelect from './ModeSelect'
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
                                    <a key={category.id} href={forward}
                                        className={`
                                            ${ config.buttonClasses }
                                            ${ config.buttonFontSize }
                                            ${ config.buttonFontWeight }
                                            ${ config.buttonPadding }
                                            ${ furtherClasses }
                                            btn-${ category.color } my-3`}>
                                        {
                                            category.icon && (
                                                <span className='category-icon'>{ category.icon }</span>
                                            )
                                        }
                                        <span className='category-name ms-3'>{ category.name }</span>
                                    </a>
                                    {
                                        category.subtitle && (
                                            <p className='text-center text-secondary fst-italic fs-5'>{ category.subtitle }</p>
                                        )
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
