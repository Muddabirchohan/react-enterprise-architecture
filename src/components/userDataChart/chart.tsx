import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from "recharts";

const ChartParent = () => {
  const data = [
    { year: 1991, value: 30 },
    { year: 1992, value: 40 },
    { year: 1993, value: 45 },
    { year: 1994, value: 50 },
    { year: 1995, value: 49 },
    { year: 1996, value: 60 },
    { year: 1997, value: 70 },
    { year: 1998, value: 91 },
  ];

  const averageValue = 60; // Set your desired average value

  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />

        {/* Horizontal average line */}
        <ReferenceLine y={averageValue} stroke="#FF4560" strokeDasharray="3 3" label={`Average: ${averageValue}`} />
      </BarChart>
    </div>
  );
};

export default ChartParent;
