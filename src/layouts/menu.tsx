import { FlagTwoTone, BulbTwoTone } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Menu as AntdMenu } from "antd";
import { Link } from "react-router-dom";
import { routesConfig } from "router";
import { rootCertificates } from "tls";

type MenuItem = {
  key: string;
  label: string;
  icon: string;
  path?: string;
  children?: any;
};

// const MENU_DATA: MenuItem[] = [

// {
//   key: "/settings",
//   label: "设置",
//   children: [
//     {
//       key: "roleManagement",
//       label: "角色管理",
//     },
//     {
//       key: "/theme-settings",
//       label: "主题设置",
//     },

//   ],
// },
//   {
//     key: "/dashboard/editor",
//     label: "可视化编辑器",
//   },

// ];

const iconList: Record<string, any> = {
  FlagTwoTone: FlagTwoTone,
  BulbTwoTone: BulbTwoTone,
};
export const SideBar = () => {
  const [menuData, setMenuData] = useState<any[]>([]);

  useEffect(() => {
    // 1.远程加载menu菜单
    // 2.处理menu数据，添加icon
    const routes = JSON.parse(localStorage.getItem("ROUTE_CONFIG") || "[]");
    console.log("routes", routes[0].children);

    const newMenu = generateMenuItems(routes[0].children);
    // console.log("newMenu", newMenu);
    // 3.渲染
    setMenuData(newMenu);
  }, []);

  /**
   * @method 处理menu数据，添加icon
   * @param data
   * @returns
   */
  const generateMenuItems: any = (data: any[], parentKey = "") => {
    const menuTree = [];

    for (const item of data) {
      if ((item.meta && item.meta.isMenu) || item.name == "root") {
        if (item.name == "root") {
          generateMenuItems(item.children, "");
        } else {
          const icon =
            item.icon && iconList[item.icon]
              ? React.createElement(iconList[item.icon])
              : null;
          let path = "";
          // 层级包裹组件
          if (item?.meta?.redirectUrl) {
            path = item.meta.redirectUrl;
          } else {
            path = parentKey
              ? parentKey + "/" + item.path
              : parentKey + item.path;
          }
          const menuItem: any = {
            key: path,
            icon,
            label: <Link to={path}>{item.name}</Link>,
          };

          if (item.children && item.children.length > 0) {
            const childItems = generateMenuItems(item.children, item.path);
            if (childItems?.length > 0) {
              menuItem.children = childItems;
              menuItem.label = item.name;
            }
          }

          menuTree.push(menuItem);
        }
      }
    }

    return menuTree;
  };

  return (
    <AntdMenu
      mode="inline"
      style={{ width: 256 }}
      items={menuData}
      defaultSelectedKeys={["1"]} // 默认选中首页
    />
  );
};
