import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import Search from "../pages/Search/Search";
import DefaultLayout from "../components/Layout/DefaultLayout";
import HeaderOnly from "../components/Layout/HeaderOnly";
//public Routes
const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/category", component: Categories },
  { path: "/search", component: Search, layout: HeaderOnly },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
