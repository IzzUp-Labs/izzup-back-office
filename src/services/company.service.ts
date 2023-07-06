import http from '../http-common.ts';
import CompanyModel from "../models/company.model.ts";
class CompanyService {

    async findAll() {
        return http.get("/company").then((res) => {
            return res.data as Array<CompanyModel>;
        });
    }
}
export default new CompanyService();