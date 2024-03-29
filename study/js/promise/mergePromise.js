/**
 * 根据数组promise按顺序执行，上一个执行完再执行下一个
 * .all()不需要管执行顺序，只需要并发执行就行了
 *
 *
 */

const time = (timer) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timer);
  });
};
const ajax1 = () =>
  time(2000).then(() => {
    console.log(1);
    return 1;
  });
const ajax2 = () =>
  time(1000).then(() => {
    console.log(2);
    return 2;
  });
const ajax3 = () =>
  time(1000).then(() => {
    console.log(3);
    return 3;
  });

function mergePromise(ajaxArray) {
  // 在这里写代码
  let data = [];
  let p = Promise.resolve(); // 函数要返回一个值为data的promise
  ajaxArray.forEach((ajax) => {
    p = p
      .then(() => {
        //是为了能在ajax之后接then
        return ajax();
      })
      .then((v) => {
        data.push(v);
        return data;
      });
  });
  return p;
}

mergePromise([ajax1, ajax2, ajax3]).then((data) => {
  console.log("done");
  console.log(data); // data 为 [1, 2, 3]
});

// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]
