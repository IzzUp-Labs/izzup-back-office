import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import {createPinia} from "pinia";
import { createPersistedState } from 'pinia-plugin-persistedstate'
import {userStore} from "./stores/user.store.ts";
import {authStore} from "./stores/auth.store.ts";
import VueGoogleMaps from '@fawmi/vue-google-maps'

const pinia = createPinia()
pinia.use(createPersistedState({
    auto: true,
}))

createApp(App)
    .use(router)
    .use(pinia)
    .use(VueGoogleMaps, {
        load: {
            key: process.env.VITE_GOOGLE_API_KEY,
        },
    })
    .mount('#app')

userStore();
authStore();
