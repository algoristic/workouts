import Level from '../components/Level'
import NotFound from '../components/NotFound'
import Select from '../components/Select'
import Start from '../components/Start'
import TrainingPlan from '../components/TrainingPlan'
import Workout from '../components/Workout'
import WorkoutSelect from '../components/WorkoutSelect'

const apps = {
    level: {
        id: "level",
        title: "Level",
        component: Level
    },
    notFound: {
        id: 'notFound',
        title: '404 - Not Found',
        component: NotFound
    },
    select: {
        id: "select",
        title: "Select",
        component: Select
    },
    start: {
        id: "start",
        title: "Start",
        component: Start
    },
    plan: {
        id: "plan",
        title: "Trainingsplan",
        component: TrainingPlan
    },
    workout: {
        id: "workout",
        title: "Workout",
        component: Workout
    },
    forward: {
        id: "forward",
        title: "Bitte warten...",
        component: WorkoutSelect
    }
};

export default apps;
