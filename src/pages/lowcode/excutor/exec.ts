// import worker, { workerExecute } from "./worker";
import * as Babel from "@babel/standalone";

export const es6CodeTransform = (code: string) => {
  const output = Babel.transform(code, {
    presets: ["env"],
    // plugins: ["lolizer"], // 自定义插件示例
    parserOpts: { sourceType: "script", strictMode: false },
  }).code;
  return output;
};

type ConfigProps = {
  /**是否需要异步等待执行，针对按钮点击需要呈现loading效果的场景 */
  wait?: boolean;
};

const exec = async (code: string, config: ConfigProps = {}) => {
  try {
    // 兼容代码中使用了await
    const _code = `
      function wrappedFn(){
        return async function(){
          ${code}
        }
      };
     
   `;

    // 将 es6CodeTransform 函数转换为字符串
    const es6CodeTransformStr = `(${es6CodeTransform.toString()})`;
    const blob = new Blob(
      [
        `
      const es6CodeTransform = ${es6CodeTransformStr};
      const code = ${_code};
      const transformedCode = es6CodeTransform(code);
      self.postMessage(transformedCode);
    `,
      ],
      { type: "text/javascript" }
    );
    const worker = new Worker(URL.createObjectURL(blob));
    let transformedCode = "";
    // 接收 Web Worker 的消息
    worker!.onmessage = function (event: any) {
      transformedCode = event.data;
      console.log("Received transformed code:", transformedCode);

      // 执行完成后的操作
      // const endTime = Date.now();
      // const executionTime = endTime - startTime;
      // console.log("任务执行时间:", executionTime, "毫秒");
    };

    // const fn = new Function(transformedCode + `;return wrappedFn()`);
    // return await fn()();
  } catch (err) {
    console.log(err);
  }
};

export default exec;
