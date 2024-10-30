import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slice/userSlice";
import { fetchUserData } from "../services/api";
import { useNavigate } from "react-router-dom";

const LoginButton: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const userData = await fetchUserData();
    if (userData) {
      dispatch(setUser(userData));
      navigate(userData.role === "admin" ? "/admin" : "/user");
    }
  };

  return (
    <div className="login-container">
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Login with API
      </button>
    </div>
  );
};

export default LoginButton;
