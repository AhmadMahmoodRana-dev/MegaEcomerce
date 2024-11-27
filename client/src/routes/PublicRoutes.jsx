import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
const user = true
  return user ? <Navigate to="/dashboard-home" /> : <Outlet />;
};

export default PublicRoutes;
