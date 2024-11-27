import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const user = true; // Simulating a logged-in user; replace with actual authentication logic
  console.log(user, "USER");

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
