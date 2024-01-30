/**
 * basic
 * @note 文件必须是.tsx
 */
import { Outlet, Navigate } from "react-router-dom";
import { RootLayout } from "layouts";
// import TestMarkdown from "pages/testMarkdown";
import DashboardEditor from "pages/dashboard/editor";
import Settings from "pages/settings";
// import { LowCodeForm } from "pages/lowcode/form";
import ErrorPage from "pages/error-page";
import { RoleDetail } from "pages/roleManagement";
import {
  Login,
  HomePage,
  RoleList,
  Test,
  Photo,
  VirtualList,
} from "pages/index";

export const basicRoutes = [
  {
    name: "root",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        name: "首页",
        element: <HomePage />,
        meta: {
          isMenu: true,
          // authorityId: ["1"],
        },
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export const privateRoutes = [
  {
    path: "/settings",
    name: "设置",
    meta: {
      isMenu: true,
      authorityId: "2",
    },
    children: [
      {
        // 层级包裹容器，为了页面权限形成树形结构
        path: "roleManagement",
        name: "角色管理",
        meta: {
          redirectUrl: "/settings/roleManagement/role/list", // 点击角色管理菜单默认跳转到角色列表
          isMenu: true, //被渲染为菜单项
          authorityId: "201",
        },
        children: [
          {
            path: "role/list",
            name: "角色列表",
            element: <RoleList />,
            index: true, // 默认路由，且只要选中了角色管理模块，角色列表是默认必选的
            meta: {
              authorityId: "20101",
              // aliasName: "角色列表", // 用于在权限设置中显示的名称,优先级高过name
            },
          },
          {
            path: "role/detail",
            name: "角色详情", // 角色详情选择的时候，角色列表也应该选择
            element: <RoleDetail />,
            meta: {
              authorityId: "20102",
              link: ["20101"], // 选中该项时，link中的item也选中
            },
          },
        ],
      },
      {
        path: "theme-settings",
        name: "主题设置",
        element: <Settings />,
        meta: {
          authorityId: "20103",
          isMenu: true,
        },
      },
    ],
  },
  {
    name: "可视化编辑器",
    path: "/dashboard/editor",
    element: <DashboardEditor />,
    meta: {
      authorityId: "3",
      isMenu: true,
    },
  },
  {
    path: "/faceManagement",
    name: "人脸管理",
    meta: {
      isMenu: true,
      authorityId: "4",
    },
    children: [
      {
        path: "photo",
        name: "人脸照管理",
        authorityId: "401",
        element: <Photo />,
        meta: {
          isMenu: true,
          authorizedBtns: [
            {
              name: "人脸照导入",
              authorityId: "",
            },
          ],
        },
      },
    ],
  },
  {
    path: "/knowledge",
    name: "小知识点",
    meta: {
      isMenu: true,
    },
    children: [
      {
        path: "virtualList",
        name: "虚拟列表",
        element: <VirtualList />,
        meta: {
          isMenu: true,
        },
      },
    ],
  },
  {
    path: "test",
    name: "测试",
    element: <Test />,
    meta: {
      isMenu: true,
    },
  },
];

// {
//   path: "/testMarkdown",
//   element: <TestMarkdown />,
// },
// {
//   path: "/dashboard/editor",
//   element: <DashboardEditor />,
// },
// {
//   path: "/settings",
//   element: <Settings />,
// },
// {
//   path: "/optimization",
//   children: [
//     {
//       path: "/optimization/virtualList",
//       element: <LowCodeForm />,
//     },
//   ],
// },

// {
//   path: "lowCode",
//   children: [
//     {
//       path: "/lowCode/lowCodeForm",
//       element: <LowCodeForm />,
//     },
//   ],
// },
