import { Outlet } from "react-router-dom";
import { SideBar } from "./menu";
import styles from "./layout.module.css";
import { HeartTwoTone } from "@ant-design/icons";
import { useState } from "react";
import { Button } from "antd";
import styled from "styled-components";

const fontWeight = "bold";
const TestContainer = styled.div<{ $flag: boolean; $bgColor?: string }>`
  background-color: ${(props) => props.$bgColor || "#000"};
  color: ${(props) => (props.$flag ? "red" : "green")};
  font-weight: ${fontWeight};
`;

const ExtendsBox = styled(TestContainer)`
  background-color: pink;
`;
export const RootLayout = () => {
  const [flag, setFlag] = useState(false);

  const handleClick = (e: any) => {
    console.log(e);
  };
  return (
    <div className="w-full h-full">
      {/* css module */}
      <header className={styles.headerContainer}>
        this is a header test for css module
        <div className="normalFlexBox">
          <span>written by CeciRo</span>
          <HeartTwoTone twoToneColor="red " />
        </div>
        {/* css in js */}
        <div className="flex">
          <TestContainer $bgColor="#BF4F74" $flag={flag}>
            测试style-components动态修改样式
          </TestContainer>
          <Button onClick={handleClick}>切换左侧样式</Button>
          <ExtendsBox $flag={flag}>继承的样式</ExtendsBox>
        </div>
      </header>
      <div className="flex">
        <SideBar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
