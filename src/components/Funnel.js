import all from '../assets/categories.json'

import ParameterService from '../service/parameterService'

import './Funnel.css'

const Funnel = ({ question, category, next, parameter, pickup }) => {
    const funnel = all.categories[category];
    let parameters = '?';
    parameters += `app=${next}`;
    if(pickup !== undefined) {
        pickup.forEach(param => {
            const service = new ParameterService(param);
            const value = service.value();
            parameters += `&${param}=${value}`;
        });
    }
    return (
        <div className='funnel-wrapper'>
            <div className='category-wrapper'>
                <div className='category-picker'>
                    <div className='display-4 text-center py-5'>{ question }</div>
                    <hr/>
                    <div className='d-grid'>
                    {
                        funnel.map((category) => {
                            const forward = (parameters + `&${parameter}=${category.id}`);
                            return (
                                <a key={category.id} href={forward}
                                    className={`category btn btn-${ category.color } btn-block py-4 my-3`}>
                                    <span className='category-icon'>{ category.icon }</span>
                                    <span className='category-name ms-3'>{ category.name }</span>
                                </a>
                            );
                        })
                    }
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    );
};

export default Funnel;
