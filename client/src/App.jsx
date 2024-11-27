import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@/pages/Login";
import PrivateRoutes from "./routes/PrivateRoutes";
import Home from "./pages/Main/Home";
import Sidebar1 from "@/pages/Dashboard/Sidebar";

const App = () => {
  const user = true; // Simulating a logged-in user; replace with actual authentication logic

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />

      {/* Private routes */}
      <Route element={<PrivateRoutes />}>
        {/* Protected homepage */}
        <Route path="/" element={<Home />} />

        {/* Dashboard with nested routes */}
        <Route path="/dashboard" element={<Sidebar1 />}>
          {/* Child routes */}
          <Route index element={<h1>Dashboard Overview</h1>} />
          {/* <Route path="statistics" element={<Statistics />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
