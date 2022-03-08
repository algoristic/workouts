import ParameterService from './parameterService'
import { config } from '../assets/app.config.json'

class ParameterCollector {
    constructor(list) {
        this.params = [];
        if(list !== undefined) {
            this.params = list.map((parameter) => {
                const name = config.parameters[parameter];
                return new ParameterService(name);
            });
        }
    }

    getSearchString() {
        let searchString = '';
        this.params.forEach((parameter) => {
            const { name } = parameter;
            const value = parameter.value();
            if(value !== undefined) {
                searchString += `&${name}=${value}`
            }
        });
        return searchString;
    }
}

export default ParameterCollector;
