export default interface DecodeToken {
    id: number;
    email: string;
    role: string;
    iat: number;
    exp: number;
}