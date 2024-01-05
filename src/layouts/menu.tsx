import { FlagTwoTone, BulbTwoTone } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Menu as AntdMenu } from "antd";
import { Link } from "react-router-dom";

type MenuItem = {
  key: string;
  label: string;
  icon: string;
  path?: string;
  children?: any;
};

const MENU_DATA: MenuItem[] = [
  {
    key: "1",
    label: "动画",
    icon: "BulbTwoTone",
    children: [
      {
        key: "101",
        label: "购物车",
        icon: "FlagTwoTone",
        path: "/animation/shoppingCarParabola",
      },
    ],
  },
  {
    key: "2",
    label: "设置",
    icon: "FlagTwoTone",
    path: "/settings",
  },
  {
    key: "3",
    label: "低代码",
    icon: "FlagTwoTone",
    path: "/lowCode",
    children: [
      {
        key: "301",
        label: "表单",
        icon: "FlagTwoTone",
        path: "/lowCode/lowCodeForm",
      },
    ],
  },
];
const iconList: Record<string, any> = {
  FlagTwoTone: FlagTwoTone,
  BulbTwoTone: BulbTwoTone,
};
export const Menu = () => {
  const [menuData, setMenuData] = useState<any[]>([]);

  /**
   * @method 处理menu数据，添加icon
   * @param data
   * @returns
   */
  const generateMenuItems: any = (data: any[]) => {
    return data.map((item: any) => {
      const icon =
        item.icon && iconList[item.icon]
          ? React.createElement(iconList[item.icon])
          : null;
      const label =
        item.children && item.children.length > 0 ? (
          item.label
        ) : (
          <Link to={item.path}>{item.label}</Link>
        );
      if (item.children && item.children.length > 0) {
        return {
          key: item.key,
          label: label,
          icon: icon,
          children: generateMenuItems(item.children),
        };
      }
      return {
        key: item.key,
        label: label,
        icon,
      };
    });
  };

  useEffect(() => {
    // 1.远程加载menu菜单
    // 2.处理menu数据，添加icon
    const newMenu = generateMenuItems(MENU_DATA);
    // 3.渲染
    setMenuData(newMenu);
  }, []);

  return <AntdMenu mode="inline" style={{ width: 256 }} items={menuData} />;
};

console.log(iconList);
