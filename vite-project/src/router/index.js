import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"

const lazyLoad = (view) => import(`../pages/${view}.vue`)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: lazyLoad('About')
    },
    {
        path: '/secret',
        name: 'secret',
        component: lazyLoad('Secret')
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router