import http from "../http-common.ts";
import AuthLoginCredentialsModel from "../models/auth-login-credentials.model.ts";
import Token from "../models/token.model.ts";

class AuthService {
  async login(data : AuthLoginCredentialsModel) {
    return await http.post("/auth/login", data).then((res) => {
        return res.data as Token;
    });
  }

  async getConnectedDevices() {
    return await http.get("/auth/connected/devices").then((res) => {
        return res.data as string[];
    });
  }
}
export default new AuthService();