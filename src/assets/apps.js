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
        component: Programs,
        display: true
    },
    workouts: {
        id: "workouts",
        title: "Workouts",
        component: Workouts,
        display: true
    },
    recipes: {
        id: "recipes",
        title: "Recipes",
        component: Recipes,
        display: true
    },
    dares: {
        id: "dares",
        title: "Dares",
        component: Dares,
        display: true
    },
    challenges: {
        id: "challenges",
        title: "Challenges",
        component: Challenges,
        display: true
    },
    notFound: {
        id: 'notFound',
        title: '404 - Not Found',
        component: NotFound,
        display: false
    }
};

export default apps;
