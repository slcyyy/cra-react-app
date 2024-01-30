/**
 * user store
 */
import { action, makeAutoObservable, observable } from "mobx";

class Dashboard {
  material?: any;
  layouts: any[] = [];

  constructor() {
    // 参数1：target，把谁变成响应式（可观察）
    // 参数2：指定哪些属性或者方法变成可观察
    makeAutoObservable(this);
  }

  saveMaterial(item: any) {
    this.material = item;
  }
}
const dashboard = new Dashboard();
export default dashboard;
