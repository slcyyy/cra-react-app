/**
 * 题目：考虑有重复数据,不考虑元素位置,不使用排序
 * [1,2,3,3]  [1,2,3,4]
 *
 *  https://juejin.cn/post/7290786959441117243
 * 不能使用indexOf去判断（有重复数）
 * 如果没有重复数，用includes去判断数组中是否存在
 * indexOf采用严格相等，NAN不相等，includes采用零值相等
 */
function judgeArrayEqual(arr1 = [], arr2 = []) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // 使用map维护第一个数组各项的次数，遍历第二个数组递减次数，不合理时即不相等
  const countMap = new Map();
  arr1.forEach((item) => {
    countMap.set(item, (countMap.get(item) || 0) + 1);
  });

  // 使用for of 也能暂停，还方便一点不用写下标
  for (const item of arr2) {
    let times = countMap.get(item);
    // 不存在，或者次数已经递减到0或负数
    if (!times) {
      return false; // for循环return false会暂停整个程序
    } else {
      countMap.set(item, times - 1);
    }
  }
  return true;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 3];
const arr3 = [2, 3, 4],
  arr4 = [2, 3, 4, 6];
console.log(judgeArrayEqual(arr1, arr2));
console.log(judgeArrayEqual(arr3, arr4));
