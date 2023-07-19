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
        name: 'main',
        meta: {requiresAuth: true}
    },
    {
        path: '/login',
        component: LoginPage,
        meta: {requiresAuth: false}
    },
    {
        path: '/updatecar/:id',
        component: UpdateCarPage,
        name: 'carUpdate',
        props: true,
        meta: {requiresAuth: true}
    },
    {
        path: '/updatespare/:id',
        component: UpdateSparePage,
        name: 'spareUpdate',
        props: true,
        meta: {requiresAuth: true}
    },
    {
        path: '/updatecountry/:id',
        component: UpdateCountryPage,
        name: 'countryUpdate',
        props: true,
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