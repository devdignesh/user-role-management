import React, { useState } from "react";
import AdminDashboard from "../components/AdminDashboard";
import UserManagement from "../components/UserManagement";
import Header from "../components/Header";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        tabs={["Dashboard", "User management"]}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="content">
          {activeTab === "Dashboard" ? <AdminDashboard /> : <UserManagement />}
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
