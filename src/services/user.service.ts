import UserInfoModel from "../models/user-info.model.ts";
import axios from "axios";

class UserService{
    async findOne(id: string) {
        return await axios.get(import.meta.env.VITE_API_URL + "/user/"+id, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((res) => {
            return res.data as UserInfoModel;
        });
    }

    async findAll() {
        return await axios.get(import.meta.env.VITE_API_URL + "/user", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((res) => {
            return res.data as Array<UserInfoModel>;
        });
    }

    async update(id: string, data: UserInfoModel) {
        return await axios.patch(import.meta.env.VITE_API_URL + "/user/"+id, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((res) => {
            return res.data as UserInfoModel;
        });
    }

    async findAllUsersNotVerified() {
        return await axios.get(import.meta.env.VITE_API_URL + "/user/users/unverified", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((res) => {
            return res.data as Array<UserInfoModel>;
        });
    }

    async verifyUser(id: string) {
        return await axios.patch(import.meta.env.VITE_API_URL + "/user/"+id+"/verify", {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
    }

    async unverifyUser(id: string) {
        return await axios.patch(import.meta.env.VITE_API_URL + "/user/"+id+"/not-verify", {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
    }

    async remove(id: string) {
        return await axios.delete(import.meta.env.VITE_API_URL + "/user/"+id, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
    }
}
export default new UserService();