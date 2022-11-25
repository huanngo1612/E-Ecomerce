import DefaultLayout from "../components/Layout/DefaultLayout";
import HeaderOnly from "../components/Layout/HeaderOnly";
import { Home, Login, Register } from "../pages/index";
//public Routes
const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/login", component: Login, layout: HeaderOnly },
  { path: "/register", component: Register, layout: null },
  { path: "/ads", component: Register, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
