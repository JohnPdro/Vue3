import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
// import Equipe from "@/pages/Equipe.vue";
const lazyLoad = (view) => import(`@/pages/${view}.vue`) // o lazyLoad é utilizado para evitar o carregamento de telas desnecessárias ao entrar na página

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/equipe',
        name: 'Equipe',
        component: lazyLoad('Equipe'),
    },
    {
        path: '/equipe/:id',
        name: 'Funcionario',
        component: lazyLoad('Funcionario'),
    },
    {
        path: '/:pathMatch(.*)',
        component: lazyLoad('PaginaNaoEncontrada')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;