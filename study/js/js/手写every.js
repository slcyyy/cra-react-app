Array.prototype.myEvery = function (callback, context) {
  let len = this.length;
  for (let i = 0; i < len; i++) {
    if (!callback.call(context, this[i], i, this)) {
      return false;
    }
  }
  return true;
};

const arr = [1, 2, 3];
console.log(arr.myEvery((item) => item > 4));

const obj = { a: 3 };

arr.myEvery((item) => {
  console.log(this);
  return item.a == 3;
}, obj);
