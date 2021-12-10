import params from './urlService';

class ParameterService {
    constructor(name) {
        this.name = name;
    }

    value(value) {
        if(typeof value !== 'undefined') {
            params.get(this.name).value(value);
        } else {
            return params.get(this.name).value();
        }
    }

    remove() {
        params.get(this.name).remove();
    }

    isSet() {
        return params.get(this.name).isSet();
    }

    check(options) {
        params.get(this.name).check(options);
    }

    onChange(callback) {
        params.get(this.name).onChange(callback);
    }
}

export default ParameterService;
