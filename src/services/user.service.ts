import http from '../http-common.ts';
import UserInfoModel from "../models/user-info.model.ts";

class UserService{
    async findOne(id: number) {
        return await http.get("/user/"+id).then((res) => {
            return res.data as UserInfoModel;
        });
    }

    async findAll() {
        return await http.get("/user").then((res) => {
            return res.data as Array<UserInfoModel>;
        });
    }

    async update(id: number, data: UserInfoModel) {
        return await http.patch("/user/"+id, data).then((res) => {
            return res.data as UserInfoModel;
        });
    }

    async findAllUsersNotVerified() {
        return await http.get("/user/users/unverified").then((res) => {
            return res.data as Array<UserInfoModel>;
        });
    }

    async verifyUser(id: number) {
        await http.patch("/user/"+id+"/verify");
    }

    async remove(id: number) {
        await http.delete("/user/"+id);
    }
}
export default new UserService();