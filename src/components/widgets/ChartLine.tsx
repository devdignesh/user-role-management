import React from "react";
import CardTitle from "./CardTitle";
import Card from "./Card";
import { FaChartLine } from "react-icons/fa6";
import { LineChart } from "@mui/x-charts";

const ChartLine = () => {
  return (
    <Card>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <span className="text-lg font-semibold">Sales</span>
          <div className="p-3 bg-blue-50 rounded-lg">
            <FaChartLine className="text-blue-600" />
          </div>
        </div>
        <div className="mt-2">
          <LineChart
            height={300}
            series={[
              {
                curve: "linear",
                data: [0, 2, 2, 6, 3, 5,  9, 3, 5, 7, 4, 10],
              },
            ]}
          />
        </div>
      </div>
    </Card>
  );
};

export default ChartLine;
