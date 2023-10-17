import {defineStore} from 'pinia';
import AuthLoginCredentialsModel from "../models/auth-login-credentials.model.ts";
import http from "../http-common.ts";
import jwt_decode from "jwt-decode";
import DecodeToken from "../models/decode-oken.model.ts";
import router from "../router.ts";
import UserInfoModel from "../models/user-info.model.ts";
import {RoleEnum} from "../models/enums/role-enum.ts";
import axios from "axios";

export const userStore = defineStore('user',{
    state: () => {
        return {
            user: null as UserInfoModel | null,
            token: null as string | null,
            isLogged: false
        }
    },
    actions: {
        async login(data: AuthLoginCredentialsModel) {
            await axios.post(import.meta.env.VITE_API_URL + "/auth/login", data).then((res) => {
                localStorage.setItem('token', res.data.token);
                this.$state.token = res.data.token;
            });
            const decodeToken: DecodeToken = await jwt_decode(this.$state.token as string);
            await axios.get(import.meta.env.VITE_API_URL + "/user/" + decodeToken.id, {
                headers: {
                    Authorization: `Bearer ${this.$state.token}`,
                },
            }).then((resFind) => {
                const userInfo = resFind.data;
                if(userInfo.role === RoleEnum.ADMIN){
                    this.user = userInfo;
                    this.isLogged = true;
                    router.push({name: 'Home'});
                }else{
                    alert("You are not an admin");
                }
            });
        },
        logout(): void {
            this.user = null;
            this.isLogged = false;
            this.token = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            http.defaults.headers.common['Authorization'] = '';
            router.push({name: 'Login'});
        },
    },
});
