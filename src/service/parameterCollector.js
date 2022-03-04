import ParameterService from './parameterService'

class ParameterCollector {
    constructor(list) {
        this.params = [];
        if(list !== undefined) {
            this.params = list.map((parameter) => {
                return new ParameterService(parameter);
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
