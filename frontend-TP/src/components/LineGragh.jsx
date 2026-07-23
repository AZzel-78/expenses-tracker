import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "../css/LineGraph.css";

function LineGraph({ expensesData }) {
  return (
    <div className="line-graph">
      <div className="spendings">Spending Snapshots</div>
      <div
        style={{ width: "100%", height: "400px" }}
        className="line-graph-data"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={expensesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="totalAmount"
              stroke="#53d7f2"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LineGraph;
