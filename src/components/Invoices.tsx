import React from "react";
import { FaChartLine, FaSearch, FaUsers } from "react-icons/fa";
import StatCard from "./widgets/StatCard";
import Card from "./widgets/Card";
import InvoicesTable from "./widgets/InvoicesTable";
import { InvoicesData } from "../Data/Invoices";
import AddButton from "./widgets/AddButton";

const Invoices = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Invoices of{" "}
          {new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
          })}
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
          <AddButton>New Invoice</AddButton>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mb-8">
        <div className="h-40">
          <StatCard
            title="Paid Invoice"
            value="45"
            icon={<FaChartLine className="text-blue-600 text-xl" />}
            trend="up"
          />
        </div>
        <div className="h-40">
          <StatCard
            title="Due Invoice"
            value="12"
            icon={<FaUsers className="text-green-600 text-xl" />}
            trend="down"
          />
        </div>
        <div className="h-40">
          <StatCard
            title="Total Invoice"
            value="57"
            icon={<FaUsers className="text-green-600 text-xl" />}
          />
        </div>
      </div>

      <Card>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Invoices</h3>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>

        <InvoicesTable Data={InvoicesData} />

        <div className="mt-4 text-sm text-gray-500 text-right">
          Showing last 10 invoices
        </div>
      </Card>
    </div>
  );
};

export default Invoices;
