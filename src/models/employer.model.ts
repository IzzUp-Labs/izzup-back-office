import CompanyModel from "./company.model.ts";


export default interface EmployerModel {
    id: number;
    companies: CompanyModel[];
    updated_at: Date;
    created_at: Date;
}