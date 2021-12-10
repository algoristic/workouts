import Challenges from '../components/Challenges'
import Dares from '../components/Dares'
import NotFound from '../components/NotFound'
import Programs from '../components/Programs'
import Recipes from '../components/Recipes'
import Workouts from '../components/Workouts'

const apps = {
    programs: {
        id: "programs",
        title: "Programs",
        component: Programs
    },
    workouts: {
        id: "workouts",
        title: "Workouts",
        component: Workouts
    },
    recipes: {
        id: "recipes",
        title: "Recipes",
        component: Recipes
    },
    dares: {
        id: "dares",
        title: "Dares",
        component: Dares
    },
    challenges: {
        id: "challenges",
        title: "Challenges",
        component: Challenges
    },
    notFound: {
        id: 'notFound',
        title: '404 - Not Found',
        component: NotFound
    }
};

export default apps;
