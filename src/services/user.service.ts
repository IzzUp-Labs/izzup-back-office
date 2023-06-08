import http from '../http-common.ts';

class UserService{
    findOne(id: number) {
        return http.get("/user/"+id);
    }
}
export default new UserService();