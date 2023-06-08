export default interface UserInfoModel {
    id: number;
    email: string;
    password: string;
    lastName: string;
    firstName: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}