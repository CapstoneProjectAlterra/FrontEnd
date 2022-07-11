import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticatedAdmin } from "../utils/helpers/Auth";

export default function ProtectedRouteAdmin() {
  if (isAuthenticatedAdmin()) {
    return <Navigate to="/admin" replace />;
  }

  return <Outlet />;
}
