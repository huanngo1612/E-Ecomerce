import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateOutlet() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return userInfo ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateOutlet;
