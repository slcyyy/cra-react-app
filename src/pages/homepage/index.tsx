import { Button } from "antd";
export default () => {
  return (
    <div className="w-full h-full flex">
      <div className="h-full flex-1 ">
        <Button type="primary">dianji</Button>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="w-[340px] h-full border-lime-400  border-solid border-l-2">
        right
      </div>
    </div>
  );
};
