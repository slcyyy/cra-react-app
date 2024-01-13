/**
 * user store
 */
import { action, makeAutoObservable, observable } from "mobx";

export const DEFAULT_AUTHORITIES = new Set([
  "1",
  "2",
  "201",
  "20101",
  "3",
  "4",
  "401",
]);

class User {
  userInfo = {};
  authorities: Set<string> = DEFAULT_AUTHORITIES;
  constructor() {
    // 参数1：target，把谁变成响应式（可观察）
    // 参数2：指定哪些属性或者方法变成可观察
    makeAutoObservable(this);
  }
}
const user = new User();
export default user;
