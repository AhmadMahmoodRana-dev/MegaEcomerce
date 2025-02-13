import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@/pages/Login";
import PrivateRoutes from "./routes/PrivateRoutes";
import Home from "./pages/Main/Home";
import Sidebar1 from "@/pages/Dashboard/Sidebar";
import Signup from "./pages/Signup";

const App = () => {
  const user = true;

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Sidebar1 />}>
          <Route index element={<h1>Dashboard Home</h1>} />
          <Route path="statistics" element={<h1>Statistics Page</h1>} />
          <Route path="students" element={<h1>Students Page</h1>} />
          <Route path="courses" element={<h1>Courses Page</h1>} />
          <Route path="orders" element={<h1>Orders Page</h1>} />
          <Route path="billings" element={<h1>Billings Page</h1>} />
          <Route path="settings" element={<h1>Settings Page</h1>} />
          <Route path="help" element={<h1>Help Page</h1>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
