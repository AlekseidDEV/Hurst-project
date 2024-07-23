import HomePage from "@/views/HomePage.vue";
import {createRouter, createWebHistory} from "vue-router";
import PageNotFound from "@/views/PageNotFound.vue";

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
    },
    {
        path: "/404",
        name: "notFound",
        component: PageNotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(){
        return {top: 0}
    }
})


router.beforeEach((to, _from, next) => {
    let isRoute

    isRoute = router.options.routes.some((route) => {
      return route.name === to.name
    })

    isRoute ? next() : next({path: '/404'})
})

export default router