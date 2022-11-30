import DefaultLayout from "../components/Layout/DefaultLayout";
import HeaderOnly from "../components/Layout/HeaderOnly";
import {
  Home,
  Login,
  Product,
  Register,
  Contact,
  About,
  Cart,
} from "../pages/index";
//public Routes
const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/contact", component: Contact, layout: HeaderOnly },
  { path: "/about", component: About, layout: DefaultLayout },
  { path: "/product/:id", component: Product, layout: HeaderOnly },
  { path: "/login", component: Login, layout: HeaderOnly },
  { path: "/register", component: Register, layout: HeaderOnly },
];
const privateRoutes = [
  { path: "/profile", component: Cart, layout: DefaultLayout },
];
export { publicRoutes, privateRoutes };
