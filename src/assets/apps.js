import Finish from '../components/Finish'
import Level from '../components/Level'
import NotFound from '../components/NotFound'
import ProgramDays from '../components/ProgramDays'
import ProgramSelect from '../components/ProgramSelect'
import Programs from '../components/Programs'
import Select from '../components/Select'
import Start from '../components/Start'
import TrainingPlan from '../components/TrainingPlan'
import Workout from '../components/Workout'
import WorkoutSelect from '../components/WorkoutSelect'

const apps = {
    finish: {
        id: "finish",
        title: "Fertig!",
        component: Finish
    },
    level: {
        id: "level",
        title: "Level auswählen",
        component: Level
    },
    notFound: {
        id: 'notFound',
        title: '404 - Seite nicht gefunden',
        component: NotFound
    },
    days: {
        id: 'days',
        title: 'Programm',
        component: ProgramDays
    },
    watch: {
        id: 'watch',
        title: 'Programm auswählen',
        component: ProgramSelect
    },
    programs: {
        id: 'programs',
        title: 'Programm auswählen',
        component: Programs
    },
    select: {
        id: "select",
        title: "Trainingstyp auswählen",
        component: Select
    },
    start: {
        id: "start",
        title: "Startseite",
        component: Start
    },
    plan: {
        id: "plan",
        title: "Trainingsplan auswählen",
        component: TrainingPlan
    },
    workout: {
        id: "workout",
        title: "Dein Workout",
        component: Workout
    },
    forward: {
        id: "forward",
        title: "Bitte warten...",
        component: WorkoutSelect
    }
};

export default apps;
