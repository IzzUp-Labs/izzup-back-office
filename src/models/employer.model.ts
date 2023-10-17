import CompanyModel from "./company.model.ts";
import UserInfoModel from "./user-info.model.ts";


export default interface EmployerModel {
    id: string;
    companies: CompanyModel[];
    user: UserInfoModel;
    updated_at: Date;
    created_at: Date;
}