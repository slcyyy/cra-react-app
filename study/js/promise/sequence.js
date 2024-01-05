/**
 * @method 每隔一秒钟输出1，2,3
 */

// 用reduce模拟循环过程还能缓存上一次返回的promise,then控制顺序和时间
function exec1() {
  const arr = [1, 2, 3];
  arr.reduce((p, value) => {
    return p.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(value);
          resolve();
        }, 1000);
      });
    });
  }, Promise.resolve());
}

/**
 * @method 红绿灯，3s红灯，2s黄灯，1s绿灯
 */
function exec2() {
  function red() {
    console.log("red");
  }
  function green() {
    console.log("green");
  }
  function yellow() {
    console.log("yellow");
  }

  function light(cb, timeout) {
    return new Promise((resolve) => {
      setTimeout(() => {
        cb();
        resolve();
      }, timeout);
    });
  }

  function step() {
    Promise.resolve() // 这个promise.resolve可以可无
      .then(() => {
        return light(red, 3000); // return 不能忘记,下一个then在resolve之后才执行
      })
      .then(() => {
        return light(green, 2000);
      })
      .then(() => {
        return light(yellow, 1000);
      })
      .then(() => step()); // 继续循环
  }
  step();
}

exec2();
