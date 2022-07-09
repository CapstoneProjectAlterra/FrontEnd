import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticatedUser } from "../utils/helpers/Auth";

export default function PrivateRouteCitizen() {
  if (!isAuthenticatedUser()) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
