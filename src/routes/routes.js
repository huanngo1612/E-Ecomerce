import Search from "../pages/Search/Search";
import DefaultLayout from "../components/Layout/DefaultLayout";
import HeaderOnly from "../components/Layout/HeaderOnly";
import { Home, Login, Register } from "../pages/index";
//public Routes
const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/search", component: Search, layout: HeaderOnly },
  { path: "/login", component: Login, layout: null },
  { path: "/register", component: Register, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
