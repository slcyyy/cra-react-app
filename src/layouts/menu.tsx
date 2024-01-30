import { FlagTwoTone, BulbTwoTone } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Menu as AntdMenu } from "antd";
import { Link, useLocation } from "react-router-dom";

type MenuItem = {
  key: string;
  label: string;
  icon: string;
  path?: string;
  children?: any;
};

const iconList: Record<string, any> = {
  FlagTwoTone: FlagTwoTone,
  BulbTwoTone: BulbTwoTone,
};
export const SideBar = () => {
  const [menuData, setMenuData] = useState<any[]>([]);
  // 菜单高亮 todo:折叠状态
  const location = useLocation();
  const selectedKey = location.pathname;
  console.log(location.pathname);

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
      selectedKeys={[selectedKey]}
    />
  );
};
