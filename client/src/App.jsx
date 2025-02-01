import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@/pages/Login";
import PrivateRoutes from "./routes/PrivateRoutes";
import Home from "./pages/Main/Home";
import Sidebar1 from "@/pages/Dashboard/Sidebar";
import Signup from "./pages/Signup";

const App = () => {
  const user = true; // Simulating a logged-in user; replace with actual authentication logic

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Sidebar1 />} />
      </Route>
    </Routes>
  );
};

export default App;
