import CompanyModel from "../models/company.model.ts";
import axios from "axios";
class CompanyService {

    async findAll() {
        return await axios.get(import.meta.env.VITE_API_URL + "/company", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then((res) => {
            return res.data as Array<CompanyModel>;
        });
    }
}
export default new CompanyService();