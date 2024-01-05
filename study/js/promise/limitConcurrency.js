/**
 * promise控制并发请求个数
 * https://www.bilibili.com/video/BV11f4y117qp/?spm_id_from=333.337.search-card.all.click&vd_source=997c3e4545ad6122fa4b486f6ba0b972
 *
 */

class Scheduler {
  workingNum = 0;
  list = [];

  constructor(maxNum = 2) {
    this.maxNum = maxNum;
  }

  add = (request) => {
    this.list.push(request);
  };

  start = () => {
    for (var i = 0; i < this.maxNum; i++) {
      this.doNext();
    }
  };

  doNext = () => {
    // 一个请求做完之后，立刻从队列中取出一个请求补上
    if (this.list.length && this.workingNum <= this.maxNum) {
      this.workingNum++;
      let newRequest = this.list.shift();

      newRequest().then(() => {
        this.workingNum--;
        this.doNext();
      });
    }
  };
}

const mockRequest = (num, timeout) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, timeout)
  ).then(() => console.log(num));

const scheduler = new Scheduler();
scheduler.add(() => mockRequest(1, 1000));
scheduler.add(() => mockRequest(2, 300));
scheduler.add(() => mockRequest(3, 500));
scheduler.add(() => mockRequest(4, 400));
scheduler.start();

//2 3 1 4
