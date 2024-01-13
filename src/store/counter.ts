// store/Counter.ts
import {
  makeAutoObservable,
  action,
  makeObservable,
  observable,
  computed,
  runInAction,
} from "mobx";
class Counter {
  count = 0;

  constructor() {
    // 参数1：将参数对象中的属性设置为响应式（可观察）
    // 参数2：指定哪些属性或者方法变成可观察，覆盖自动推导
    makeAutoObservable(this);
  }
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  reset() {
    this.count = 0;
  }
  asyncIncrease() {
    setTimeout(() => {
      runInAction(() => {
        this.count += 10;
      });
    }, 1000);
  }
  get double() {
    return this.count * 2;
  }
}
const counter = new Counter();
export default counter;
