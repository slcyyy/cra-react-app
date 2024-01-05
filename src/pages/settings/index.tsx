import { Button } from "antd";
import { AuthWrapper } from "auth";
import React, { useState, useEffect } from "react";

export default () => {
  const [count1, setCount1] = useState(0);

  const increment = () => {
    setCount1((prevCount1) => prevCount1 + 1);
    setCount1((prevCount1) => prevCount1 + 1);
  };

  useEffect(() => {
    document.addEventListener("click", function () {
      console.log("document click");
    });
  }, []);
  const handleClick = (e: any) => {
    console.log("button");
    // console.log(e);
    // console.log(e.target);
    // console.log(e.currentTarget);
    // console.log(e.nativeEvent.target);
    // console.log(e.nativeEvent.currentTarget);
  };
  return (
    <div>
      <AuthWrapper authCode="edit">
        <Button type="primary" onClick={handleClick} id="">
          删除
        </Button>
      </AuthWrapper>
      <p>Count 1: {count1}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
