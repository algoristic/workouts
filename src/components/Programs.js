import InfoList from './InfoList'
import InfoObject from './InfoObject'

import programs from '../assets/programs.min'
import { types, difficulties } from '../assets/display'

const Program = (slug, program) => {
    const programDays = program.days + ' Days';
    const programTypes = types.parse(program.type);
    const programDifficulty = difficulties[program.difficulty];
    const details = [programDays, programTypes, programDifficulty].join(', ');
    return ( <InfoObject key={slug} id={slug} type='program' title={program.name} details={details} /> );
};

const Programs = () => {
    return <InfoList objects={programs} displayComponent={Program} />;
};

export default Programs;
