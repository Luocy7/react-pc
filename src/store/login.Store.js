// 登录模块
import { makeAutoObservable } from "mobx";
import { setToken, getToken, clearToken, http } from "@/utils";

class LoginStore {
  token = getToken() || "";
  constructor() {
    makeAutoObservable(this);
  }
  // 登录
  getToken = async ({ mobile, code }) => {
    const res = await http.post("http://geek.itheima.net/v1_0/authorizations", {
      mobile,
      code,
    });
    // 存入token
    this.token = res.data.token;
    // 存入ls
    setToken(this.token);
  };

  // 退出登录
  loginOut = () => {
    this.token = "";
    clearToken();
  };
}
export default LoginStore;
