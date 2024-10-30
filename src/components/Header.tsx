import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { setUser } from "../store/slice/userSlice";

interface HeaderProps {
  tabs: string[];
  activeTab: string;
  onSelectTab: (tab: string) => void;
}
const Header: React.FC<HeaderProps> = ({ tabs, activeTab, onSelectTab }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector((state: RootState) => state.user.role);

  const toggleRole = () => {
    const newRole = role === "admin" ? "user" : "admin";
    dispatch(setUser({ username: "john Doe", role: newRole }));
    navigate(newRole === "admin" ? "/admin" : "/user");
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-800">Product</h1>
          </div>

          <div className="flex flex-row space-x-4">
            <nav className="flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => onSelectTab(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                  ${
                    activeTab === tab
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
            <button
              onClick={toggleRole}
              className="ml-auto hidden sm:block px-4 py-2 rounded bg-green-500 text-white text-sm hover:bg-green-600"
            >
              Switch to {role === "admin" ? "User" : "Admin"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
