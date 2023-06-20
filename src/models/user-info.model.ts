export default interface UserInfoModel {
    id: number;
    email: string;
    password: string;
    last_name: string;
    first_name: string;
    role: string;
    date_of_birth: Date;
    created_at: Date;
    updated_at: Date;
}
