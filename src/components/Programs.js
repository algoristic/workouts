import InfoList from './InfoList'
import InfoObject from './InfoObject'

import programs from '../assets/programs.min'
import { types } from '../assets/display'

const parseTypes = (typeString) => {
    if(typeString === undefined) {
        return [];
    }
    let arr = typeString.split(",");
    arr = arr.map((type) => type.trim());
    arr = arr.map((type) => types[type])
    return arr;
};
const Program = (slug, program) => {
    const programTypes = parseTypes(program.type);
    return (
        <InfoObject key={slug} title={program.name} details={program.days + ' Days, ' + programTypes} />
    );
};

const Programs = () => {
    return <InfoList objects={programs} displayComponent={Program} />;
};

export default Programs;
