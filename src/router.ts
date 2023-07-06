import {createRouter, createWebHistory} from "vue-router";
import Login from "./views/Login.vue";
import {userStore} from "./stores/user.store.ts";
import Home from "./views/Home.vue";

const routes = [
    {
        path: '/:pathMatch(.*)*', // 404
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/",
        name: "Home",
        component: () => import("./views/Home.vue")
    },
    {
        path: "/profile",
        name: "Profile",
        component: () => import("./views/Profile.vue")
    },
    {
        path: "/user-list",
        name: "UserList",
        component: () => import("./views/UserList.vue")
    },
    {
        path: "/unverified-users",
        name: "UnverifiedUserList",
        component: () => import("./views/UnverifiedUserList.vue")
    },
    {
        path: "/home-cards",
        name: "HomeCards",
        component: () => import("./views/HomeCardList.vue")
    },
    {
        path: "/tags",
        name: "Tags",
        component: () => import("./views/TagList.vue")
    },
    {
        path: "/company-list",
        name: "CompanyList",
        component: () => import("./views/CompanyList.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// @ts-ignore
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
