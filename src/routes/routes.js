import DefaultLayout from "../components/Layout/DefaultLayout";
import HeaderOnly from "../components/Layout/HeaderOnly";
import ProflieLayout from "../components/Layout/ProfileLayout";
import AdminLayout from "../components/Layout/AdminLayout";
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
import AddAuction from "../components/Admin/AddAuction/AddAuction";
import AdminCategory from "../components/Admin/AdminCategory/AdminCategory";
import AdminProduct from "../components/Admin/AdminProduct/AdminProduct";
import AdminEditProduct from "../components/Admin/AdminEditProduct/AdminEditProduct";
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
    path: "/admin/addproduct",
    component: AddAuction,
    layout: AdminLayout,
  },
  {
    path: "/admin/addcategory",
    component: AdminCategory,
    layout: AdminLayout,
  },
  {
    path: "/admin/products",
    component: AdminProduct,
    layout: AdminLayout,
  },
  {
    path: "/admin/products/:id/edit",
    component: AdminEditProduct,
    layout: AdminLayout,
  },
  {
    path: "/checkout",
    component: Checkout,
    layout: DefaultLayout,
  },
];
export { publicRoutes, privateRoutes };
