import { createRouter, createWebHistory } from 'vue-router';

import Main from '../pages/Main.vue';
import HelloWorld from '../components/HelloWorld.vue';
// import Products from '../pages/Products.vue'
import NotFound from '../pages/NotFoundPage.vue';

const routes = [
    {
        path: "/",
        component: Main,
    },
    { path: '/:404(.*)', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;