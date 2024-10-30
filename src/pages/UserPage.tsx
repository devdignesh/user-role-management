import React, { useState } from "react";
import Header from "../components/Header";
import UserDashboard from "../components/UserDashboard";
import Invoices from "../components/Invoices";

const UserPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        tabs={["Dashboard", "Invoice"]}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">

      <div className="content p-4">
        {activeTab === "Dashboard" ? <UserDashboard /> : <Invoices />}
      </div>
      </main>
    </div>
  );
};

export default UserPage;
