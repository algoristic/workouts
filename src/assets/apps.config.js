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

const { apps } = config;

const allApps = [
    {
        id: apps.finishing,
        title: "Fertig!",
        component: Finish
    },
    {
        id: apps.levelSelect,
        title: "Level auswählen",
        component: Level
    },
    {
        id: apps.notFound,
        title: '404 - Seite nicht gefunden',
        component: NotFound
    },
    {
        id: apps.programDays,
        title: 'Programm',
        component: ProgramDays
    },
    {
        id: apps.programs,
        title: 'Programm auswählen',
        component: ProgramSelect
    },
    {
        id: apps.selection,
        title: "Trainingstyp auswählen",
        component: Select
    },
    {
        id: apps.start,
        title: "Startseite",
        component: Start
    },
    {
        id: apps.plan,
        title: "Übersicht Trainingsplan",
        component: PlanOverview
    },
    {
        id: apps.plans,
        title: "Trainingsplan auswählen",
        component: TrainingPlans
    },
    {
        id: apps.workout,
        title: "Dein Workout",
        component: Workout
    },
    {
        id: apps.forwarding,
        title: "Bitte warten...",
        component: WorkoutSelect
    }
];

export default allApps;
