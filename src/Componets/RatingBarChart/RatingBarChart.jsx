import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const RatingBarChart = ({ barChartData }) => {
  return (
    <div>
      <div className="border-y-2 border-gray-300 py-10 mb-10">
        <h2 className="text-[#11111] font-bold text-xl">Ratings</h2>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={barChartData} layout="vertical">
            <YAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              type="category"
            ></YAxis>
            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              domain={[0, 12000]}
            ></XAxis>
            <Tooltip />
            <Bar fill="#FF9C00" dataKey="count" barSize={30}></Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RatingBarChart;
