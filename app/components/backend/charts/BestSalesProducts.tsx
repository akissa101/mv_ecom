"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {};

const data = {
  labels: ["Green Lettus", "Brocoli", "Capbage", "Watermelon"],
  datasets: [
    {
      label: "# of products",
      data: [33, 17, 30, 20],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 3,
    },
  ],
};

export default function BestSalesProducts({}: Props) {
  return (
    <div className="bg-slate-50 dark:bg-slate-800 border border-slate-400 shadow-md shadow-slate-600 damk:shadow-slate-700 dark:border-slate-700 p-3 rounded-lg">
      <h2 className="text-xl font-bold p-4">Best Sales Product</h2>
      {/* chart */}
      <Pie data={data} className="max-h-[26rem]" />
    </div>
  );
}
