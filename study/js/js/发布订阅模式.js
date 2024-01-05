class EventCenter {
  constructor() {
    this.handler = {};
  }

  addEventListener(type, handler) {
    if (!this.handler[type]) {
      this.handler[type] = [handler];
    } else {
      this.handler[type].push(handler);
    }
  }

  dispatchEvent(type, params) {
    if (!this.handler[type]) {
      return new Error("没有绑定该事件");
    }
    this.handler[type].forEach((fn) => {
      fn(...params);
    });
  }

  removeEventListener(type, handler) {
    // 没有指定特殊的事件,删除全部
    if (!handler) {
      delete this.handler.type;
    } else {
      const index = this.handler.findIndex((item) => item === handler); // 怎么用严格相等呢
      if (index == -1) {
        return new Error("没有该事件");
      }
      this.handler[type].splice(index, 1);
      // 清空
      if (this.handler[type].length == 0) {
        delete this.handler[type];
      }
    }
  }
}
