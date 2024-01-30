import { Button } from "antd";
import Aliyun from "assets/img/aliyun.png";
import Deploying from "assets/img/deploying.svg";
export default () => {
  return (
    <div className="w-full h-full flex">
      <img src={Aliyun} alt="bbb" />
      <img src={Deploying} alt="aaa" />
      <img src="/logo192.png" alt="react" />
    </div>
  );
};
