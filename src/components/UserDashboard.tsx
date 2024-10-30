import React from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import ChartLine from "./widgets/ChartLine";
import Card from "./widgets/Card";
import Notification from "./widgets/Notification";
import InvoicesTable from "./widgets/InvoicesTable";
import { InvoicesData } from "../Data/Invoices";

const UserDashboard = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Hey {user.username || "john Doe"},
        </h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="md:col-span-3">
          <ChartLine />
        </div>

        <div className="md:col-span-1 h-full">
          <Card className="h-full">
            <h3 className="text-lg font-semibold mb-4">Notifications</h3>
            <Notification />
          </Card>
        </div>
      </div>

      <Card>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Recently Paid Invoices</h3>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>

        <InvoicesTable Data={InvoicesData.filter((item)=> item.status == "Paid" )}/>

        <div className="mt-4 text-sm text-gray-500 text-right">
          Showing last 4 invoices
        </div>
      </Card>
    </div>
  );
};

export default UserDashboard;
