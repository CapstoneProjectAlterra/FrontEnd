import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticatedAdmin } from "../utils/helpers/Auth";

export default function PrivateRouteAdmin() {
  if (!isAuthenticatedAdmin()) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}
