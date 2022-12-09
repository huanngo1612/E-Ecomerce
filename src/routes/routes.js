import DefaultLayout from "../components/Layout/DefaultLayout";
import HeaderOnly from "../components/Layout/HeaderOnly";
import ProflieLayout from "../components/Layout/ProfileLayout";
import AddAuction from "../components/Profile/AddAuction/AddAuction";
import Orders from "../components/Profile/Orders/Orders";
import ProfileSetting from "../components/Profile/ProfileSetting/ProfileSetting";
import {
  Admin,
  Home,
  Login,
  Product,
  Register,
  Contact,
  About,
  Cart,
  Checkout,
} from "../pages/index";
//public Routes
const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/contact", component: Contact, layout: HeaderOnly },
  { path: "/about", component: About, layout: DefaultLayout },
  { path: "/product/:id", component: Product, layout: HeaderOnly },
  { path: "/login", component: Login, layout: DefaultLayout },
  { path: "/register", component: Register, layout: DefaultLayout },
  { path: "/admin", component: Admin, layout: HeaderOnly },
  { path: "/cart", component: Cart, layout: HeaderOnly },
];
const privateRoutes = [
  {
    path: "/profile/myprofile",
    component: ProfileSetting,
    layout: ProflieLayout,
  },
  {
    path: "/profile/orders",
    component: Orders,
    layout: ProflieLayout,
  },
  {
    path: "/profile/addproduct",
    component: AddAuction,
    layout: ProflieLayout,
  },
  {
    path: "/checkout",
    component: Checkout,
    layout: DefaultLayout,
  },
];
export { publicRoutes, privateRoutes };
