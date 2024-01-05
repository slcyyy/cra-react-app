export const BASE_DATASETS = "";
// class DynamicWorker extend{
//   constructor(worker) {
//     /**
//      * 依赖的全局变量声明
//      * 如果 BASE_DATASETS 非字符串形式，可调用 JSON.stringify 等方法进行处理
//      * 保证变量的正常声明
//      */
//     const CONSTS = `const base = ${BASE_DATASETS};`;

//     /**
//      * 数据处理函数
//      */
//     const formatFn = `const formatFn = ${worker.toString()};`;

//     /**
//      * 内部 onmessage 处理
//      */
//     const onMessageHandlerFn = `self.onmessage = ()=>{}`;

//     /**
//      * 返回结果
//      * @param {*} param0
//      */
//     const handleResult = () => {};

//     const blob = new Blob(
//       [`(()=>{${CONSTS}${formatFn}${onMessageHandlerFn}})()`],
//       { type: "text/javascript" }
//     );
//     this.worker = new Worker(URL.createObjectURL(blob));
//     this.worker.addEventListener("message", handleResult);

//     URL.revokeObjectURL(blob);
//   }

//   /**
//    * 动态调用
//    */
//   send(data) {}

//   close() {}
// }
