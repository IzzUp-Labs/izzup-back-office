import EmployerModel from "./employer.model.ts";
import ExtraModel from "./extra.model.ts";
import UserStatusModel from "./user-status.model.ts";

export default interface UserInfoModel {
    id: string;
    email: string;
    password: string;
    last_name: string;
    first_name: string;
    role: string;
    employer: EmployerModel;
    extra: ExtraModel;
    statuses: UserStatusModel[];
    id_photo: string;
    date_of_birth: Date;
    created_at: Date;
    updated_at: Date;
}
