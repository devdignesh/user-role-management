import React from "react";
import LoginButton from "../components/LoginButton";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const LoginPage: React.FC = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-1/2 p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome Again,
        </h2>

        <div className="space-y-4 p-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="login-container">
            <button className="w-full bg-zinc-500 text-white py-2 rounded-lg transition-colors">
              Login
            </button>
          </div>

          <LoginButton />
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>

          <div className="  flex flex-row justify-center space-x-4 items-center">
            <button className="  border border-gray-300 w-10 h-10 rounded-full flex items-center justify-center   hover:bg-gray-50">
              <FaGoogle />
            </button>
            <button className="  border border-gray-300  w-10 h-10 rounded-full flex items-center justify-center   hover:bg-gray-50">
              <FaApple />
            </button>
          </div>

          <p className="text-center text-gray-600 mt-6">
            New User?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default LoginPage;
