import { getTokenSourceMapRange } from "typescript";

export const menu = [
  {
    id: "1",
    pId: "0",
    name: "首页",
    path: "/",
    icon: "FlagTwoTone",
  },
  {
    id: "2",
    pId: "0",

    name: "人脸管理",
    children: [
      {
        id: "201",
        pId: "2",
        path: "/face-manage/photo",
        name: "人脸照管理",
        isMenu: true,
      },
      {
        id: "202",
        pId: "2",
        path: "/face-manage/photo/detail/:id",
        name: "人脸照详情",
        isMenu: false,
      },
      {
        id: "203",
        pId: "2",
        path: "/face-manage/check",
        name: "人脸照审核",
        isMenu: true,
      },
    ],
  },
];
