export const asyncScript = `let arr = [3,2,4,5];console.log('33');await new Promise(resolve=>{setTimeout(()=>{resolve(console.log('timeout done'))},2000)});return arr.map(item=>item+1)`;

export const clientScript1 = `
 let sum = 0  
for(let i=0;i<1000;i++){
    sum+=i
  }
  console.log('1 done');
  return sum
`;

export const clientScript2 = `
function dateFormat(date, template) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let res = template
    .replace(/yyyy/, year)
    .replace(/MM/, month)
    .replace(/dd/, day);

  return res;
}
console.log('2 done');

console.log(dateFormat(new Date("2020-12-01"), "yyyy/MM/dd"));
`;

export const clientScript3 = `
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
console.log('3 done');

const ins2 = objectFactory(Parent2, "ww");
console.log(ins2.name);

`;
