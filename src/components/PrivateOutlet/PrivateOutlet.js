import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthConext } from "../../context/AuthContext";

function PrivateOutlet() {
  const { currentUser } = useContext(AuthConext);
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateOutlet;
