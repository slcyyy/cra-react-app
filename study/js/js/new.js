function objectFactory(factory, ...args) {
  if (typeof factory !== "function") {
    return new Error("请传入正确的构造函数");
  }
  let newObject = Object.create(factory.prototype);
  const res = factory.apply(newObject, args);
  if (res && (typeof res == "object" || typeof res == "function")) {
    return res;
  } else return newObject;
}
// 使用方法
// objectFactory(构造函数, 初始化参数);
class Parent {
  constructor(name) {
    this.name = name;
    this.age = 18;
  }
}
const temp = new Parent("lcs");
// console.log(temp.name);
// const ins = objectFactory(Parent, "lc"); //TypeError: Class constructor Parent cannot be invoked without 'new' why???

// console.log(ins.name);

function Parent2(name) {
  this.name = name;
  this.age = 18;
}
const ins2 = objectFactory(Parent2, "ww");
console.log(ins2.name);
