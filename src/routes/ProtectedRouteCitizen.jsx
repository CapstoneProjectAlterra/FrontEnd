import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticatedUser } from "../utils/helpers/Auth";

export default function ProtectedRouteCitizen() {
  if (isAuthenticatedUser()) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
