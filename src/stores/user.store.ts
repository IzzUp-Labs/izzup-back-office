import {defineStore} from 'pinia'
import AuthService from "../services/auth.service.ts";
import AuthLoginCredentialsModel from "../models/auth-login-credentials.model.ts";
import http from "../http-common.ts";
import jwt_decode from "jwt-decode";
import userService from "../services/user.service.ts";
import Token from "../models/token.model.ts";
import {RoleEnum} from "../utils/enums/role.enum.ts";
import router from "../router.ts";
import UserInfoModel from "../models/user-info.model.ts";

export const userStore = defineStore('user',{
    state: () => {
        return {
            user: null as UserInfoModel | null,
            isLogged: false
        }
    },
    actions: {
        login(data: AuthLoginCredentialsModel): void {
            AuthService.login(data).then((res) => {
                const userTokenInfo: Token = jwt_decode(res.data.token);
                userService.findOne(userTokenInfo.id).then((res) => {
                    const userInfo = res.data;
                    if(userInfo.role === RoleEnum.Admin){
                        this.user = userInfo;
                        this.isLogged = true;
                        http.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
                        router.push({name: 'Home'}).then(r => console.log(r));
                    }else{
                        alert("You are not an admin");
                    }
                });
            })
        },
        logout(): void {
            this.user = null;
            this.isLogged = false;
            http.defaults.headers.common['Authorization'] = '';
            router.push({name: 'Login'}).then(r => console.log(r));
        }
    }
});
