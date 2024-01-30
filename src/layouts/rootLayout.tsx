import { Outlet } from "react-router-dom";
import { SideBar } from "./menu";
import styles from "./layout.module.css";
import { HeartTwoTone } from "@ant-design/icons";
import { useState } from "react";
import { Button, Layout } from "antd";
import styled from "styled-components";
import { clearToken } from "utils/token";
import { useNavigate } from "react-router-dom";

const fontWeight = "bold";
const TestContainer = styled.div<{ $flag: boolean; $bgColor?: string }>`
  background-color: ${(props) => props.$bgColor || "#000"};
  color: ${(props) => (props.$flag ? "red" : "green")};
  font-weight: ${fontWeight};
`;

const ExtendsBox = styled(TestContainer)`
  background-color: pink;
`;

const { Header, Sider } = Layout;

export const RootLayout = () => {
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    setFlag(!flag);
    console.log(e);
  };

  const logout = () => {
    clearToken();
    navigate("/login");
  };
  return (
    <div className="w-full h-full">
      {/* css module */}
      <Header className="flex justify-between items-center w-full px-6">
        <div className={styles.headerLeft}>
          <HeartTwoTone twoToneColor="red " />
          <span>Written by CeciRo</span>
        </div>
        {/* css in js */}
        {/* <div className="flex">
          <TestContainer $bgColor="#BF4F74" $flag={flag}>
            测试style-components动态修改样式
          </TestContainer>
          <Button onClick={handleClick}>切换左侧样式</Button>n
          <ExtendsBox $flag={flag}>继承的样式</ExtendsBox>
        </div> */}
        <Button onClick={logout}>退出</Button>
      </Header>

      <div className="flex">
        <SideBar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
