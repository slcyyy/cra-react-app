// 登录模块
import { makeAutoObservable } from "mobx";
import { setToken, getToken, clearToken } from "utils/token";

class LoginStore {
  token = getToken() || "";
  constructor() {
    makeAutoObservable(this);
  }
  // 登录
  login = async ({ mobile, code }: any) => {
    // const res = await post("http://geek.itheima.net/v1_0/authorizations", {
    //   mobile,
    //   code,
    // });
    const res = {
      data: {
        token: "xxxtokenjaijfojw",
      },
    };
    this.token = res.data.token;
    setToken(res.data.token);
  };
}
export default LoginStore;
