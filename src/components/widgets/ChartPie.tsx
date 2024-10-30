import { PieChart } from "@mui/x-charts";
import React from "react";
import Card from "./Card";
import CardTitle from "./CardTitle";
import { FaChartLine, FaChartPie } from "react-icons/fa";

const ChartPie = () => {
  return (
    <Card>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <CardTitle>User Distribution</CardTitle>
          <div className="p-3 bg-blue-50 rounded-lg">
            <FaChartPie className="text-blue-600" />
          </div>
        </div>
        <div className="mt-2">
          <PieChart
            height={150}
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "India" },
                  { id: 1, value: 15, label: "Uk" },
                  { id: 2, value: 20, label: "USA" },
                ],
                innerRadius: 30,
                arcLabel: (params) => params.label ?? "",
                arcLabelMinAngle: 20,
              },
            ]}
          />
        </div>
      </div>
    </Card>
  );
};

export default ChartPie;
