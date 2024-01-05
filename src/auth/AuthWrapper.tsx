import { useLocation } from "react-router-dom";
import React from "react";
import { Tooltip } from "antd";

type IProps = {
  authCode: string;
  children: React.ReactElement;
};
export const AuthWrapper: React.FC<IProps> = ({ authCode, children }) => {
  // 从状态管理器中拿出pagePermissionMap
  const pagePermissionMap: Record<string, string[]> = {
    "/settings": ["edit"],
  };
  // 当前的路由
  const location = useLocation();

  // 找到当前的按钮状权限状态 !todo:location.pathname有可能有动态路由的状态
  const curPagePermission = pagePermissionMap[location.pathname];
  if (curPagePermission.includes(authCode)) {
    return children;
  } else {
    // 给组件传递disabled属性 所有的按钮组件都应该具备disabled属性以控制显示
    const ChildComp = React.cloneElement(children, { disabled: true });
    return <Tooltip title="暂无权限">{ChildComp}</Tooltip>;
  }
};
