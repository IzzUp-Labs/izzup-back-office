import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import {createPinia} from "pinia";
import { createPersistedState } from 'pinia-plugin-persistedstate'
import {userStore} from "./stores/user.store.ts";

const pinia = createPinia()
pinia.use(createPersistedState({
    auto: true,
}))

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')

userStore();
