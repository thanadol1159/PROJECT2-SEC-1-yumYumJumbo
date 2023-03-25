import { createRouter, createWebHistory } from "vue-router";
import NotFoundView from '../views/NotFoundView.vue'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/:catchNotFound(.*)',
            name: 'notfound',
            component: NotFoundView
        },
    ] 
})
export default router