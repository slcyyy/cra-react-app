/**
 * basic
 * @note 文件必须是.tsx
 */
import { RootLayout } from "layouts";
import TestMarkdown from "pages/testMarkdown";
import DashboardEditor from "pages/dashboard/editor";
import Settings from "pages/settings";
import { LowCodeForm } from "pages/lowcode/form";

export default [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/testMarkdown",
        element: <TestMarkdown />,
      },
      {
        path: "/dashboard/editor",
        element: <DashboardEditor />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/optimization",
        children: [
          {
            path: "/optimization/virtualList",
            element: <LowCodeForm />,
          },
        ],
      },

      {
        path: "lowCode",
        children: [
          {
            path: "/lowCode/lowCodeForm",
            element: <LowCodeForm />,
          },
        ],
      },
    ],
  },
];
