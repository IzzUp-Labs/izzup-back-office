import http from "../http-common.ts";
import AuthLoginCredentialsModel from "../models/auth-login-credentials.model.ts";

class AuthService {
  login(data : AuthLoginCredentialsModel) {
    return http.post("/auth/login", data);
  }
}
export default new AuthService();