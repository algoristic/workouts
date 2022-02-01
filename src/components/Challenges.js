import InfoList from './InfoList'
import InfoObject from './InfoObject'

import challenges from '../assets/challenges.min'
import { focus, types, difficulties } from '../assets/display'

const Challenge = (slug, challenge) => {
    const challengeFocus = focus[challenge.focus];
    const challengeTypes = types.parse(challenge.type);
    const challengeDifficulty = difficulties[challenge.difficulty];
    const details = [challengeFocus, challengeTypes, challengeDifficulty].join(', ');
    return ( <InfoObject key={slug} id={slug} type='challenge' title={challenge.name} details={details} /> );
};

const Challenges = () => {
    return <InfoList objects={challenges} displayComponent={Challenge} />;
};

export default Challenges;
