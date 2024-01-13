/**
 *
 */
import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import { basicRoutes, privateRoutes } from "router";
import {
  RouterProvider,
  useRoutes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Loading } from "components/Loading";
import { DEFAULT_AUTHORITIES } from "config/auth";

const router = createBrowserRouter(basicRoutes);
const AUTHORITY = DEFAULT_AUTHORITIES;
function App() {
  const flag = useRef(false);
  const [done, setDone] = useState(false);
  // const navigate = useNavigate();
  // const { pathname } = useLocation();

  /**
   * 生成动态路由
   * @returns
   */
  const generateRoutes = () => {
    const _loop = (data: any) => {
      return data.filter((item: any) => {
        if (
          !item?.meta?.authorityId ||
          AUTHORITY.has(item?.meta?.authorityId)
        ) {
          if (item?.children) {
            item.children = _loop(item.children);
          }
          return true;
        }
        return false;
      });
    };
    setTimeout(() => {
      const result = _loop(privateRoutes);
      router.routes[0].children?.push(...result); // !!!需要扩展一次
      setDone(true);
      router.navigate(location.pathname);

      localStorage.setItem("ROUTE_CONFIG", JSON.stringify(router.routes));
    }, 900);
  };

  useEffect(() => {
    if (!flag.current) {
      // useRef变化会触发重新渲染吗？
      console.log(1);
      flag.current = true;
      generateRoutes();
      // .pushState(null, "dd", location.pathname);
    }
  }, []);
  return (
    <div className="w-full h-full">
      {done ? <RouterProvider router={router} /> : <Loading />}
    </div>
  );
}
// 让组件变成响应式
export default App;
