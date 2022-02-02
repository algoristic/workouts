import Challenges from '../components/Challenges'
import Challenge from '../components/Challenge'
import Dares from '../components/Dares'
import NotFound from '../components/NotFound'
import Programs from '../components/Programs'
import Program from '../components/Program'
import Day from '../components/Day'
import Recipes from '../components/Recipes'
import Workouts from '../components/Workouts'
import Workout from '../components/Workout'

const apps = {
    programs: {
        id: "programs",
        title: "Programs",
        component: Programs,
        display: true
    },
    program: {
        id: "program",
        title: "Program",
        component: Program
    },
    day: {
        id: "day",
        title: "Day",
        component: Day
    },
    workouts: {
        id: "workouts",
        title: "Workouts",
        component: Workouts,
        display: true
    },
    workout: {
        id: "workout",
        title: "Workout",
        component: Workout
    },
    challenges: {
        id: "challenges",
        title: "Challenges",
        component: Challenges,
        display: true
    },
    challenge: {
        id: "challenge",
        title: "Challenge",
        component: Challenge
    },
    recipes: {
        id: "recipes",
        title: "🚧 Recipes",
        component: Recipes,
        display: true
    },
    dares: {
        id: "dares",
        title: "🚧 Dares",
        component: Dares,
        display: true
    },
    notFound: {
        id: 'notFound',
        title: '404 - Not Found',
        component: NotFound
    }
};

export default apps;
