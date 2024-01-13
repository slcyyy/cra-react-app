import { useLocation } from "react-router-dom";
import React from "react";
import { Tooltip } from "antd";
import useStore from "store";
import { observer } from "mobx-react";

type IProps = {
  authCode: string;
  children: React.ReactElement;
  configIfNotAuth?: object;
  isShowIfNotAuth?: boolean;
};

export const AuthWrapper: React.FC<IProps> = observer(
  ({
    authCode,
    children,
    configIfNotAuth = { disabled: true },
    isShowIfNotAuth = true,
  }) => {
    const { userStore } = useStore();
    const { authorities } = userStore;

    // 找到当前的按钮状权限状态 !todo:location.pathname有可能有动态路由的状态
    // const curPagePermission = pagePermissionMap[location.pathname];
    if (authorities.has(authCode)) {
      return children;
    } else if (isShowIfNotAuth) {
      const ChildComp = React.cloneElement(children, configIfNotAuth);
      return <Tooltip title="暂无权限">{ChildComp}</Tooltip>;
    } else {
      // 给组件传递disabled属性 所有的按钮组件都应该具备disabled属性以控制显示
      return null;
    }
  }
);
