import InfoList from './InfoList'
import InfoObject from './InfoObject'

import programs from '../assets/programs.min'
import { types, difficulties } from '../assets/display'

const Program = (slug, program) => {
    const details = (
        <img className='d-block mx-auto img-fluid' src={`/.media/programs/${slug}/thumbnail.jpg`} />
    );
    return ( <InfoObject key={slug} id={slug} type='program' title={program.name} details={details} /> );
};

const Programs = () => {
    return <InfoList objects={programs} displayComponent={Program} />;
};

export default Programs;
