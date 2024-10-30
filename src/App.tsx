import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";

const ProtectedRoute = ({
  role,
  children,
}: {
  role: string;
  children: React.ReactNode;
}) => {
  const { role: userRole } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole && userRole !== role) {
      navigate("/");
    }
  }, [userRole, role, navigate]);

  return userRole === role ? <>{children}</> : <Navigate to="/" />;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/user/*" element={<UserPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
