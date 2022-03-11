import Finish from '../components/Finish'
import Level from '../components/Level'
import NotFound from '../components/NotFound'
import ProgramDays from '../components/ProgramDays'
import ProgramSelect from '../components/ProgramSelect'
import Select from '../components/Select'
import Start from '../components/Start'
import PlanOverview from '../components/PlanOverview'
import TrainingPlans from '../components/TrainingPlans'
import Workout from '../components/Workout'
import WorkoutSelect from '../components/WorkoutSelect'

import { config } from './app.config.json'

const apps = [
    {
        id: config.apps.finishing,
        title: "Fertig!",
        component: Finish
    },
    {
        id: config.apps.levelSelect,
        title: "Level auswählen",
        component: Level
    },
    {
        id: config.apps.notFound,
        title: '404 - Seite nicht gefunden',
        component: NotFound
    },
    {
        id: config.apps.programDays,
        title: 'Programm',
        component: ProgramDays
    },
    {
        id: config.apps.programs,
        title: 'Programm auswählen',
        component: ProgramSelect
    },
    {
        id: config.apps.selection,
        title: "Trainingstyp auswählen",
        component: Select
    },
    {
        id: config.apps.start,
        title: "Startseite",
        component: Start
    },
    {
        id: config.apps.plan,
        title: "Übersicht Trainingsplan",
        component: PlanOverview
    },
    {
        id: config.apps.plans,
        title: "Trainingsplan auswählen",
        component: TrainingPlans
    },
    {
        id: config.apps.workout,
        title: "Dein Workout",
        component: Workout
    },
    {
        id: config.apps.forwarding,
        title: "Bitte warten...",
        component: WorkoutSelect
    }
];

export default apps;
