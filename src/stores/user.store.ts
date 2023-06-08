import {defineStore} from 'pinia'
import UserInfoModel from "../models/user-info.model.ts";
import AuthService from "../services/auth.service.ts";
import AuthLoginCredentialsModel from "../models/auth-login-credentials.model.ts";
import http from "../http-common.ts";
import jwt_decode from "jwt-decode";
import userService from "../services/user.service.ts";
import Token from "../models/token.model.ts";
import {RoleEnum} from "../utils/enums/role.enum.ts";
import router from "../router.ts";

export const userStore = defineStore('user',{
    state: () => {
        return {
            user: null as UserInfoModel | null
        }
    },
    actions: {
        login(data: AuthLoginCredentialsModel): void {
            AuthService.login(data).then((res) => {
                const userTokenInfo: Token = jwt_decode(res.data.token);
                userService.findOne(userTokenInfo.id).then((res) => {
                    const userInfo: UserInfoModel = res.data;
                    if(userInfo.role === RoleEnum.Admin){
                        this.user = res.data;
                        http.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
                        router.push({name: 'Home'}).then(r => console.log(r));
                    }else{
                        alert("You are not an admin");
                    }
                });
            })
        }
    }
});