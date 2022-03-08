import Finish from '../components/Finish'
import Level from '../components/Level'
import NotFound from '../components/NotFound'
import ProgramDays from '../components/ProgramDays'
import ProgramSelect from '../components/ProgramSelect'
import Select from '../components/Select'
import Start from '../components/Start'
import TrainingPlan from '../components/TrainingPlan'
import Workout from '../components/Workout'
import WorkoutSelect from '../components/WorkoutSelect'

const apps = [
    {
        id: "finish",
        title: "Fertig!",
        component: Finish
    },
    {
        id: "level",
        title: "Level auswählen",
        component: Level
    },
    {
        id: 'notFound',
        title: '404 - Seite nicht gefunden',
        component: NotFound
    },
    {
        id: 'days',
        title: 'Programm',
        component: ProgramDays
    },
    {
        id: 'programs',
        title: 'Programm auswählen',
        component: ProgramSelect
    },
    {
        id: "select",
        title: "Trainingstyp auswählen",
        component: Select
    },
    {
        id: "start",
        title: "Startseite",
        component: Start
    },
    {
        id: "plan",
        title: "Trainingsplan auswählen",
        component: TrainingPlan
    },
    {
        id: "workout",
        title: "Dein Workout",
        component: Workout
    },
    {
        id: "forward",
        title: "Bitte warten...",
        component: WorkoutSelect
    }
];

export default apps;
