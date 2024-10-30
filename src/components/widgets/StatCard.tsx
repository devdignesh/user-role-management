import React from "react";
import { IconType } from "react-icons";
import CardTitle from "./CardTitle";
import Card from "./Card";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactElement;
  trend?: "up" | "down";
}

const StatCard = ({ title, value, icon, trend }: StatCardProps) => {
  return (
    <Card>
      <div className="flex justify-between h-full items-start">
        <div className="flex flex-col  h-full justify-between">
          <CardTitle>{title}</CardTitle>
          <div className="flex sm:mb-5 items-baseline space-x-2">
            <span className="md:text-4xl text-2xl font-bold text-gray-900">
              {value}
            </span>

            {trend && (
              <span
                className={`text-xl  ${
                  trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {trend === "up" ? (
                  <FaRegArrowAltCircleUp />
                ) : (
                  <FaRegArrowAltCircleDown />
                )}
              </span>
            )}
          </div>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg">{icon}</div>
      </div>
    </Card>
  );
};

export default StatCard;
