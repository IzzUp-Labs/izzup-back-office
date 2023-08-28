import {defineStore} from 'pinia'
import AuthService from "../services/auth.service.ts";
import AuthLoginCredentialsModel from "../models/auth-login-credentials.model.ts";
import http from "../http-common.ts";
import jwt_decode from "jwt-decode";
import userService from "../services/user.service.ts";
import Token from "../models/token.model.ts";
import DecodeToken from "../models/decode-oken.model.ts";
import router from "../router.ts";
import UserInfoModel from "../models/user-info.model.ts";
import {RoleEnum} from "../models/role-enum.ts";

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
            await AuthService.login(data).then((resToken: Token) => {
                http.defaults.headers.common['Authorization'] = `Bearer ${resToken.token}`;
                localStorage.setItem('token', resToken.token);
                this.token = resToken.token;
            });
            const decodeToken: DecodeToken = await jwt_decode(this.token as string);
            await userService.findOne(decodeToken.id).then((resFind) => {
                const userInfo = resFind;
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
