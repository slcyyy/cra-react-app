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
import { Suspense, useEffect, useRef, useState } from "react";
import { Loading } from "components/Loading";
import { DEFAULT_AUTHORITIES } from "config/auth";
import { AuthRoute } from "components/AuthRoute";
import router from "router";
const { whenProd, getPlugin, pluginByName } = require("@craco/craco");

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
    // todo:在白名单中的ip应该done直接为true
    setTimeout(() => {
      const result = _loop(privateRoutes);
      router.routes[0].children?.push(...result); // !!!需要扩展一次
      setDone(true);
      router.navigate(location.pathname);

      localStorage.setItem("ROUTE_CONFIG", JSON.stringify(router.routes));
    }, 200);
  };

  useEffect(() => {
    if (!flag.current) {
      // useRef变化会触发重新渲染吗？
      flag.current = true;
      generateRoutes();
      // .pushState(null, "dd", location.pathname);
    }
  }, []);
  return (
    <AuthRoute>
      <div className="w-full h-full">
        <Suspense fallback={<Loading />}>
          {done ? <RouterProvider router={router} /> : <Loading />}
        </Suspense>
      </div>
    </AuthRoute>
  );
}
// 让组件变成响应式
export default App;
