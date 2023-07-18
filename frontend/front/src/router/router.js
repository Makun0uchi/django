import Vue from "vue"
import VueRouter from "vue-router"
import LoginPage from "@/pages/LoginPage.vue"
import CarPage from "@/pages/CarPage.vue"
import UpdateCarPage from "@/pages/UpdateCarPage.vue"
import UpdateSparePage from "@/pages/UpdateSparePage.vue"
import UpdateCountryPage from "@/pages/UpdateCountryPage.vue"
import store from "@/store"


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: CarPage,
        meta: {requiresAuth: true}
    },
    {
        path: '/login',
        component: LoginPage,
        meta: {requiresAuth: false}
    },
    {
        path: '/updatecar',
        component: UpdateCarPage,
        meta: {requiresAuth: true}
    },
    {
        path: '/updatespare',
        component: UpdateSparePage,
        meta: {requiresAuth: true}
    },
    {
        path: '/updatecountry',
        component: UpdateCountryPage,
        meta: {requiresAuth: true}
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const token = store.state.car.token
    if (to.meta.requiresAuth && !token) {
        next("/login")
    } else {
        next()
    }
})
export default router;