import DefaultLayout from "../components/Layout/DefaultLayout";
import HeaderOnly from "../components/Layout/HeaderOnly";
import { Home, Login, Register } from "../pages/index";
//public Routes
const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/search", component: Search, layout: HeaderOnly },
  { path: "/adsa", component: Search, layout: HeaderOnly },
  { path: "/sa", component: Search, layout: HeaderOnly },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
