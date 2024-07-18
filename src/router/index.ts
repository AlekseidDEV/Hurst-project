import HomePage from "@/views/HomePage.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/",
        name: 'home',
        component: HomePage,
    },
    {
        path: "/single-product/:name",
        name: "single-product",
        component: () => import('@/views/SingleProductPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(){
        return {top: 0}
    }
})

export default router