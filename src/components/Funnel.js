import Button from './Button'
import Header from './Header'
import Back from './Back'
import Subtitle from './Subtitle'
import ParameterCollector from '../service/parameterCollector'
import categories from '../assets/categories.config'
import { config } from '../assets/app.config.json'

const Funnel = ({ question, start, category, next, parameter, onSelect, backTo }) => {
    const funnel = categories[category];
    let parameters = '?';
    if(next) {
        parameters += `${config.parameters.app}=${next}`;
    }
    const collector = new ParameterCollector(config.parameters.allWorkout);
    parameters += collector.getSearchString();
    return (
        <div className='category-wrapper'>
            <div className='d-grid'>
                <Header>{ question }</Header>
                <hr />
                <div>
                {
                    funnel.filter(category => !category.hide).map(category => {
                        let href = undefined;
                        let onClick = undefined;
                        if(!onSelect) {
                            href = '';
                            if('?' !== parameters.charAt(parameters.length - 1)) {
                                href += '&';
                            }
                            href = (parameters + href + `${parameter}=${category.id}`);
                        } else {
                            onClick = () => onSelect(category)
                        }
                        let furtherClasses = '';
                        if(category.classes) {
                            furtherClasses = ' ' + category.classes;
                        }
                        return (
                            <div className='d-grid'>
                                <Button key={category.id} href={href} onClick={onClick}
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
                <hr />
                {
                    !start && <Back to={backTo ? `?${config.parameters.app}=${backTo}` : undefined} />
                }
            </div>
        </div>
    );
};

export default Funnel;
