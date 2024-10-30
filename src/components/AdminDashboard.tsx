import React from "react";
import {
  FaUsers,
  FaChartLine,
  FaShoppingCart,
  FaRegBell,
  FaSearch,
  FaRegCalendarAlt,
} from "react-icons/fa";
import Card from "./widgets/Card";
import StatCard from "./widgets/StatCard";
import { LineChart, PieChart } from "@mui/x-charts";
import ChartPie from "./widgets/ChartPie";
import Notification from "./widgets/Notification";
import { MdCloudDownload } from "react-icons/md";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 md:block hidden rounded-lg border focus:outline-none focus:ring-2"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mb-8">
        <ChartPie />

        <StatCard
          title="Total Revenue"
          value="$54,239"
          icon={<FaChartLine className="text-blue-600 text-xl" />}
          trend="up"
        />
        <StatCard
          title="Total Coustomers"
          value="2,543"
          icon={<FaUsers className="text-green-600 text-xl" />}
          trend="down"
        />
      </div>

      <div className="grid grid-cols-1 mb-8">
        <Card className="min-h-[400px]">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Revenue Overview</h3>

            <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-200 rounded-lg">
              <MdCloudDownload size={18} />
              <span className="text-sm font-medium">Download PDF</span>
            </button>
          </div>
          <div className="flex items-center justify-center h-full text-gray-400">
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                  area: true,
                },
              ]}
              width={1500}
              height={300}
            />
          </div>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <Notification />
      </Card>
    </div>
  );
};

export default AdminDashboard;
