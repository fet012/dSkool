import { Routes, Route } from "react-router-dom";
import Register from "./register.jsx";
import Login from "./login.jsx";
import Dashboard from "./dashboard.jsx";
import HomeContent from "./HomeContent.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeContent />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
