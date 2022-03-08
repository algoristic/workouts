import categories from '../assets/categories.config'

const getTypeString = (type) => {
    const { types } = categories;
    return types.filter((_t) => {
            let res = false;
            if(Array.isArray(type)) {
                for(let i=0; i<type.length; i++) {
                    let _type = type[i];
                    if(_t.id === _type) {
                        res = true;
                        break;
                    }
                }
            } else {
                res = (_t.id === type)
            }
            return res;
        })
        .map((_t) => _t.name)
        .join(` oder `);
};

const getLevelString = (level) => {
    const { levels } = categories;
    return levels.filter((_l) => _l.id === level)[0].name;
};

export {
    getTypeString,
    getLevelString
}
