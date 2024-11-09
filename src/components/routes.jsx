import { Routes, Route } from "react-router-dom";
import Register from "./register.jsx";
import HomeContent from "./HomeContent.jsx";
import Login from "./login.jsx";
import Dashboard from "./dashboard.jsx";
import NotFoundPage from "./notfound.jsx";
import StudentRegistrationForm from "./adminRegister";
import SchoolFeesManagement from "./schoolFeesManagement";
import TeacherManagementDashboard from "./teacherManagement";
import ResultManagementSystem from "./resultManagement";
import ClassManagementSystem from "./classManagement";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<HomeContent />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFoundPage />} /> {/* Fallback route */}
      <Route path="/adminRegister" element={<StudentRegistrationForm />} />
      <Route path="/feeManagement" element={<SchoolFeesManagement />} />
      <Route
        path="/teacherManagement"
        element={<TeacherManagementDashboard />}
      />
      <Route path="/results" element={<ResultManagementSystem />} />
      <Route path="/classManagement" element={<ClassManagementSystem />} />
    </Routes>
  );
};

export default AppRouter;
