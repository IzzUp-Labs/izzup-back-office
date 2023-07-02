import CompanyModel from "./company.model.ts";

export default interface LocationModel {
    latitude: number;
    longitude: number;
    company?: CompanyModel;
}