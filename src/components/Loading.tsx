import React from "react";
import { Spin } from "antd";

export const Loading: React.FC = () => (
  <div className="w-full h-full flex justify-center items-center">
    <Spin size="large" />
  </div>
);
