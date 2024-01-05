import { createBrowserRouter } from "react-router-dom";
import basicLayout from "./basic";
import animationLayout from "./animaiton";

// const modules = require.context("./", false, /\.tsx$/);
// const routeModuleList: any[] = [];
// console.log("modules", modules);
// modules.keys().forEach((key: string) => {
//   console.log("key", key);
//   const mod = modules(key).default;
//   const modList = Array.isArray(mod) ? [...mod] : [mod];
//   routeModuleList.push(...modList);
// });

// const routes = [...routeModuleList];
// console.log('routes',routes)

// const routes = [...routeModuleList];
const routes = [...basicLayout, ...animationLayout];

console.log("routes", routes);

export default createBrowserRouter(routes);
