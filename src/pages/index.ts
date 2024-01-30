import LoadableComponent from "components/LoadableComponent";

// 定义组件，传给LoadableCompoennt组件需要的组件信息
export const Login = LoadableComponent(() => import("./login"));
export const HomePage = LoadableComponent(() => import("./homepage"));
export const RoleList = LoadableComponent(
  () => import("./roleManagement/list")
);
export const Test = LoadableComponent(() => import("./Test"));
export const Photo = LoadableComponent(() => import("./face-management/photo"));
export const VirtualList = LoadableComponent(
  () => import("./knowlege/virtualList")
);
