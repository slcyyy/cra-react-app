/**
 * qiankun js沙箱快照手写
 *
 */
class SnapshotSandbox {
  windowSnapshot = {};
  modifyPropsMap = {};

  active() {
    // 记录快照
    for (const prop in window) {
      // Key in 遍历原型，只记录自定义的。写法是因为eslint才这么写的格式,也可以直接windo w.hasOwnproperty。
      if (Object.prototype.hasOwnProperty.call(window, prop)) {
        this.windowSnapshot[prop] = window[prop];
      }
    }
    // 应用上次的更改
    Object.keys(this.modifyPropsMap).forEach((prop) => {
      window[prop] = this.modifyPropsMap[prop];
    });
  }

  inactive() {
    for (const prop in window) {
      // window上有些属性是只读的，不加这一句还会报错
      if (Object.prototype.hasOwnProperty.call(window, prop)) {
        if (window[prop] !== this.windowSnapshot[prop]) {
          // 收集此次更改，恢复到快照
          this.modifyPropsMap[prop] = window[prop];
          window[prop] = this.windowSnapshot[[prop]]; // 不能直接=this.windowSnapshot,因为对象引用问题，后续修改windowSnapshot会造成更改
        }
      }
    }
  }
}

window.city = "beijing";
window.language = "chinese";
const snapshot = new SnapshotSandbox();
snapshot.active();
console.log("active log about language:", window.language);
window.city = "chongqing";
window.title = "hello";
snapshot.inactive();
console.log("inacitve:", window.city);
console.log("inactive", window.title);
console.log("inactive", window.language);
