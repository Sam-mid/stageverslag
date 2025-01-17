import { createRouter, createWebHistory } from 'vue-router';
import Start from './views/Start.vue';
import Home from "./views/Home.vue";
import Maatschappelijkeverantwoordelijkheid from "./views/Maatschappelijke-verantwoordelijkheid.vue";
import ProjectmatigWerken from "./views/Projectmatig-werken.vue";
import OndernemendeHouding from "./views/Ondernemende-houding.vue";
import TechnischeKennis from "./views/TechnischeKennis.vue";
import OntwerpenEnPrototypen from "./views/Ontwerpen.vue";

import Uitwisseling from "./views/Uitwisseling.vue";

const routes = [
    { path: '/', component: Start },
    {path: '/home', component: Home},

    {path: '/home/technische-kennis-en-analyse', component: TechnischeKennis},
    {path: '/home/maatschappelijke-verantwoordelijkheid', component: Maatschappelijkeverantwoordelijkheid},
    {path: '/home/projectmatig-werken', component: ProjectmatigWerken},
    {path: '/home/ondernemende-houding', component: OndernemendeHouding},
    {path: '/home/Ontwerpen-en-prototypen', component: OntwerpenEnPrototypen},


    {path: '/home/uitwisseling', component: Uitwisseling},
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;


