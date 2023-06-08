import {createRouter, createWebHistory} from "vue-router";
import Login from "./views/Login.vue";
import {userStore} from "./stores/user.store.ts";

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/",
        name: "Home",
        component: () => import("./views/Home.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const store = userStore();
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = store.user !== null;
    if (authRequired && !loggedIn) {
        return next('/login');
    }else if(!authRequired && loggedIn){
        return next('/');
    }else {
        next();
    }
});

export default router;
